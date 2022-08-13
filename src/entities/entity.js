class Avenger {
  constructor(obj, arr) {
    this.id = generateId(arr);
    this.character = obj.character;
    this.realName = obj.realName;
    this.joinedIn = obj.joinedIn;
    this.image = obj.image;
    this.notes = obj.notes;
  }
  showAvenger() {
    return {
      id: this.id,
      character: this.character,
      realName: this.realName,
      joinedIn: this.joinedIn,
      image: this.image,
      notes: this.notes,
    };
  }
  verify() {
    if (!this.character) {
      throw new Error("Character cannot be empty.");
    }
    if (!this.realName) {
      throw new Error("realName cannot be empty.");
    }
    if (!this.joinedIn) {
      throw new Error("joinedIn cannot be empty.");
    }
    if (!this.image) {
      throw new Error("image cannot be empty.");
    }
    if (!this.notes) {
      throw new Error("notes cannot be empty.");
    }
  }
}

function generateId(arr, x = 1) {
  let num = x;
  try {
    for (let n of arr) {
      if (n.id == x) {
        return generateId(arr, (num += 1));
      }
    }
    return num;
  } catch (e) {
    return 1;
  }
}

module.exports = Avenger;
