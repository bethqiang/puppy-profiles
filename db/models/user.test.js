const { expect } = require('chai');

const User = require('./index');

describe('User model', () => {
  let user;

  beforeEach(() => {
    user = new User({
      email: 'test@test.com',
      password: 'ok',
      name: 'Jane Doe',
      description: 'I\'m an adventurer and world-traveler.'
    });
  });

  // Clear db after each test is run
  afterEach(() => User.remove());

  it('should be invalid if email is empty', () => {
    user.email = undefined;
    return user.validate(err => expect(err.errors.email).to.be.ok);
  });

  it('should be invalid if new email is a duplicate', () => {
    const user2 = new User({
      email: 'test@test.com',
      password: 'also ok',
      name: 'John Doe',
      description: 'I\'m a homebody and a crazy cat dude.'
    });
    return user.save()
    .then(() => user2.save(err => expect(err.message).to.contain('duplicate key error')));
  });

  it('should be invalid if name is empty', () => {
    user.name = undefined;
    return user.validate(err => expect(err.errors.name).to.be.ok);
  });

  it('should set the default picture if none is specified', () =>
    user.save()
    .then(user => expect(user.picture).to.equal('/img/default.png')));

  it('should be invalid if description is empty', () => {
    user.description = undefined;
    return user.validate(err => expect(err.errors.description).to.be.ok);
  });

  describe('authentication', () => {
    it('changes the password from what was entered', () =>
      user.save()
      .then(user => expect(user.password).to.not.equal('ok')));

    it('resolves true if the password matches', () =>
      user.save()
      .then(user => user.authenticate('ok'))
      .then(result => expect(result).to.be.true));

    it("resolves false if the password doesn't match", () =>
      user.save()
      .then(user => user.authenticate('not ok'))
      .then(result => expect(result).to.be.false));
  });
});
