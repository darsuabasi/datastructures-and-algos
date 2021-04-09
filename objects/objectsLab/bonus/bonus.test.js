const { describe, test, expect } = require("@jest/globals");
const {
  catSpecies,
  giveCatColor,
  catTexture,
  objKeys,
  objKeys2,
  objValues,
  objValues2,
  findDirectors,
  fullNames,
  largestEarner,
  pairs,
  movieList,
  mostFreqWordGreaterThanFive,
  mostFreqWordGreaterThanLength,
  secondMostFrequentLetter,
} = require("./bonus.js");

describe("catSpecies", () => {
  test("returns the correct cat species", () => {
    expect(
      catSpecies({
        genus: "Felis",
        species: "Catus",
      })
    ).toBe("Catus");
  });
  expect(
    catSpecies({
      genus: "Felis",
      species: "Cool Cat",
    })
  ).toBe("Cool Cat");
});

describe("giveCatColor", () => {
  test("adds color to cat object", () => {
    const cat = {
      genus: "Felis",
      species: "Catus",
    };
    const res = giveCatColor(cat, "orange");
    expect(res).toBe(cat);
    expect(cat["color"]).toBe("orange");
    const cat2 = {
      genus: "Felis",
      species: "Catus",
    };
    const res2 = giveCatColor(cat2, "purple");
    expect(res2).toBe(cat2);
    expect(cat2["color"]).toBe("purple");
  });
});

describe("catTexture", () => {
  test("returns cat texture when property exists", () => {
    expect(
      catTexture({
        name: "Noboru",
        texture: "smooth",
      })).toBe("smooth")
    expect(
      catTexture({
        name: "Hatchiko",
        texture: "soft",
      })).toBe("soft")
  });

  test("throws correct error when object contains on texture", () => {
    expect(() => {
      catTexture({
        name: "Noboru",
      });
    }).toThrow("Does not have texture property");
    expect(() => {
      catTexture({
        name: "Hatchiko",
      });
    }).toThrow("Does not have texture property");
  });
});

describe("objKeys", () => {
  test("returns all keys as an array", () => {
    expect(
      objKeys({
        name: "Biw",
        age: 29,
        eyes: "brown",
      })
    ).toEqual(["name", "age", "eyes"]);
    expect(
      objKeys({
        name: "Hatchiko",
        texture: "soft",
      })
    ).toEqual(["name", "texture"]);
  });

  test("is implemented and oes NOT use Object.keys", () => {
    const funcString = objKeys.toString();
    expect(funcString.includes("Object.keys")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});
describe("objKeys2", () => {
  test("returns all keys as an array", () => {
    expect(
      objKeys2({
        name: "Biw",
        age: 29,
        eyes: "brown",
      })
    ).toEqual(["name", "age", "eyes"]);
    expect(
      objKeys2({
        name: "Hatchiko",
        texture: "soft",
      })
    ).toEqual(["name", "texture"]);
  });

  test("MUST use Object.keys", () => {
    const funcString = objKeys2.toString();
    expect(funcString.includes("Object.keys")).toBe(true);
  });
});
describe("objValues", () => {
  test("returns all values as an array", () => {
    expect(
      objValues({
        name: "Biw",
        age: 29,
        eyes: "brown",
      })
    ).toEqual(["Biw", 29, "brown"]);
    expect(
      objValues({
        name: "Hatchiko",
        texture: "soft",
      })
    ).toEqual(["Hatchiko", "soft"]);
  });

  test("is implemented and does NOT use Object.values", () => {
    const funcString = objValues.toString();
    expect(funcString.includes("Object.values")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});
describe("objValues2", () => {
  test("returns all values as an array", () => {
    expect(
      objValues2({
        name: "Biw",
        age: 29,
        eyes: "brown",
      })
    ).toEqual(["Biw", 29, "brown"]);
    expect(
      objValues2({
        name: "Hatchiko",
        texture: "soft",
      })
    ).toEqual(["Hatchiko", "soft"]);
  });

  test("MUST use Object.values", () => {
    const funcString = objValues2.toString();
    expect(funcString.includes("Object.values")).toBe(true);
  });
});

describe("findDirectors", () => {
  test("returns an array of only the directors", () => {
    const films = [
      {
        name: "Psycho",
        director: "Alfred Hitchcock",
        released: 1960,
      },
      {
        name: "Citizen Kane",
        director: "Orson Welles",
        released: 1941,
      },
      {
        name: "The Usual Suspects",
        director: "Bryan Singer",
        released: 1995,
      },
    ];
    expect(findDirectors(films)).toEqual([
      "Alfred Hitchcock",
      "Orson Welles",
      "Bryan Singer",
    ]);
  });
});

describe("fullNames", () => {
  test("returns an array of everyone's full name", () => {
    const people = [
      {
        firstName: "Calvin",
        lastName: "Newton",
      },
      {
        firstName: "Garry",
        lastName: "Mckenzie",
      },
      {
        firstName: "Leah",
        lastName: "Rivera",
      },
      {
        firstName: "Sonja",
        lastName: "Moreno",
      },
      {
        firstName: "Noel",
        lastName: "Bowen",
      },
    ];
    expect(fullNames(people)).toEqual([
      "Calvin Newton",
      "Garry Mckenzie",
      "Leah Rivera",
      "Sonja Moreno",
      "Noel Bowen",
    ]);
  });
});

describe("largestEarner", () => {
  test("Correctly determines the largest earner", () => {
    expect(
      largestEarner({
        Williams: [300, 270, 24, 52, 99],
        Cooper: [200, 55, 600, 305, 410, 35],
        Davies: [4008, 568, 300],
        Clark: [555, 457, 995, 806, 569, 46, 265],
        Johnson: [126, 300, 640, 255, 268],
      })
    ).toBe("Davies made $4876")
    expect(
      largestEarner({
        Williams: [5, 1, 2, 1, 3],
        Cooper: [10, 55, 10, 305, 10, 35],
        Davies: [2, 2, 2],
        Clark: [3, 1, 1, 1, 1, 1, 1],
        Johnson: [6, 2, 1, 3, 1],
      })
    ).toBe("Cooper made $425")
  });
});

describe("pairs", () => {
  test("returns array of pairs separated by &", () => {
    expect(pairs({ "Peanut Butter": "Jelly" })).toEqual([
      "Peanut Butter & Jelly",
    ]);
    expect(
      pairs({ "Peanut Butter": "Jelly", Ham: "Cheese", Butter: "Bread" })
    ).toEqual(["Peanut Butter & Jelly", "Ham & Cheese", "Butter & Bread"]);
    expect(pairs({})).toEqual([]);
  });
});

describe("movieList", () => {
  test("returns an array that tells watch status", () => {
    const movies = [
      { title: "Wonder Woman", director: "Patty Jenkins", watched: true },
      { title: "Jaws", director: "Steven Spielberg", watched: false },
    ];
    expect(movieList(movies)).toEqual([
      'You already watched "Wonder Woman" directed by Patty Jenkins.',
      'You still need to watch "Jaws" by director Steven Spielberg.',
    ]);

    const movies2 = [
      {
        title: "Psycho",
        director: "Alfred Hitchcock",
        watched: false,
      },
      {
        title: "Citizen Kane",
        director: "Orson Welles",
        watched: false,
      },
      {
        title: "The Usual Suspects",
        director: "Bryan Singer",
        watched: true,
      },
    ];
    expect(movieList(movies2)).toEqual([
      'You still need to watch "Psycho" by director Alfred Hitchcock.',
      'You still need to watch "Citizen Kane" by director Orson Welles.',
      'You already watched "The Usual Suspects" directed by Bryan Singer.',
    ]);
  });
});

describe("mostFreqWordGreaterThanFive", () => {
  test("returns an empty string when there is no word greater than 5 chars", () => {
    expect(mostFreqWordGreaterThanFive("hi my name is corey")).toBe("");
    expect(mostFreqWordGreaterThanFive("what is up?")).toBe("");
  });

  test("returns the most frequent word greater than 5 chars", () => {
    expect(
      mostFreqWordGreaterThanFive(
        "Hamburger Cheese hello cheese cheese hamburger"
      )
    ).toBe("cheese");
    expect(
      mostFreqWordGreaterThanFive("ruby javascript ruby javascript ruby python")
    ).toBe("javascript");
  });
});

describe("mostFreqWordGreaterThanLength", () => {
  test("returns an empty string when there is no word greater than length", () => {
    expect(mostFreqWordGreaterThanLength("hi my name is corey", 5)).toBe("");
    expect(mostFreqWordGreaterThanLength("whatss is up?", 6)).toBe("");
  });

  test("returns the most frequent word greater than length chars", () => {
    expect(
      mostFreqWordGreaterThanLength(
        "Hamburger Cheese hello cheese cheese hamburger",
        8
      )
    ).toBe("hamburger");
    expect(
      mostFreqWordGreaterThanLength(
        "ruby javascript ruby javascript ruby python",
        3
      )
    ).toBe("ruby");
  });
});

describe("secondMostFrequentLetter", () => {
  test("returns the second most frequent letter", () => {
    expect(secondMostFrequentLetter("aabbbccdddd")).toBe("b")
    expect(secondMostFrequentLetter("abbbccd")).toBe("c")
  })
  test("ignores non letters and ignores case", () => {
    expect(secondMostFrequentLetter("!!!..&;;    abb")).toBe("a")
    expect(secondMostFrequentLetter("!!A!.bbb.&;;+=333343    a")).toBe("a")

  })
});
