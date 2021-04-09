const { describe, test, expect } = require("@jest/globals");
const {
  eveAppleCount,
  appleCount,
  eveAppleSet,
  appleSet,
  adamAndEveApples,
  appleSum,
  appleSetToZero,
  russiaCapital,
  getCapital,
  addsJamaica,
  addsCountry,
  authorScores,
  bestScore,
  cubeObj,
  countAandE,
  countOccurance,
  countOccuranceNoSpaces,
  mostCommonElement,
  updateList,
  deleteKey,
  propertyCount,
} = require("../problems/objects");

describe("eveAppleCount", () => {
  test("returns the number of apples that eve has", () => {
    expect(
      eveAppleCount({
        Adam: 3,
        Beth: 5,
        Cal: 3,
        Dan: 5,
        Eve: 4,
      })
    ).toBe(4);
    expect(
      eveAppleCount({
        Celine: 3,
        Corey: 5,
        Jimmy: 3,
        Ben: 5,
        Eve: 7,
      })
    ).toBe(7);
  });

  test("is implemented and doesn't loop through the object", () => {
    const funcString = eveAppleCount.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("appleCount", () => {
  test("returns the number of apples for a specific name", () => {
    expect(
      appleCount(
        {
          Celine: 3,
          Corey: 5,
          Jimmy: 3,
          Ben: 5,
          Eve: 7,
        },
        "Corey"
      )
    ).toBe(5);
    expect(
      appleCount(
        {
          Celine: 3,
          Corey: 5,
          Jimmy: 3,
          Ben: 5,
          Eve: 7,
        },
        "Celine"
      )
    ).toBe(3);
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = appleCount.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("eveAppleSet", () => {
  test("updates Eve's apple count", () => {
    expect(
      eveAppleSet(
        {
          Celine: 3,
          Corey: 5,
          Jimmy: 3,
          Ben: 5,
          Eve: 7,
        },
        5
      )
    ).toEqual({
      Celine: 3,
      Corey: 5,
      Jimmy: 3,
      Ben: 5,
      Eve: 5,
    });
    expect(
      eveAppleSet(
        {
          Celine: 3,
          Corey: 5,
          Jimmy: 3,
          Ben: 5,
          Eve: 7,
        },
        10
      )
    ).toEqual({
      Celine: 3,
      Corey: 5,
      Jimmy: 3,
      Ben: 5,
      Eve: 10,
    });
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = eveAppleSet.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("appleSet", () => {
  test("updates the apple count", () => {
    expect(
      appleSet(
        {
          Celine: 3,
          Corey: 5,
          Jimmy: 3,
          Ben: 5,
          Eve: 7,
        },
        "Corey",
        10
      )
    ).toEqual({
      Celine: 3,
      Corey: 10,
      Jimmy: 3,
      Ben: 5,
      Eve: 7,
    });
    expect(
      appleSet(
        {
          Celine: 3,
          Corey: 5,
          Jimmy: 3,
          Ben: 5,
          Eve: 7,
        },
        "Celine",
        0
      )
    ).toEqual({
      Celine: 0,
      Corey: 5,
      Jimmy: 3,
      Ben: 5,
      Eve: 7,
    });
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = appleSet.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("adamAndEveApples", () => {
  test("correctly adds together Adam and Eve's apples", () => {
    expect(
      adamAndEveApples({
        Adam: 3,
        Beth: 5,
        Cal: 3,
        Dan: 5,
        Eve: 4,
      })
    ).toBe(7);
    expect(
      adamAndEveApples({
        Adam: 19,
        Beth: 5,
        Cal: 3,
        Dan: 5,
        Eve: 21,
      })
    ).toBe(40);
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = adamAndEveApples.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("appleSum", () => {
  test("returns the sum of all apples", () => {
    expect(
      appleSum({
        Adam: 19,
        Beth: 5,
        Cal: 3,
        Dan: 5,
        Eve: 21,
      })
    ).toBe(53);
    expect(
      appleSum({
        Celine: 0,
        Corey: 5,
        Jimmy: 3,
        Ben: 5,
        Eve: 10,
      })
    ).toBe(23);
  });
});

describe("appleSetToZero", () => {
  test("should reset all apple values to 0", () => {
    const obj = {
      Adam: 19,
      Beth: 5,
      Cal: 3,
      Dan: 5,
      Eve: 21,
    };
    appleSetToZero(obj);
    expect(obj["Adam"]).toBe(0);
    expect(obj["Beth"]).toBe(0);
    expect(obj["Cal"]).toBe(0);
    expect(obj["Dan"]).toBe(0);
    expect(obj["Eve"]).toBe(0);

    const obj2 = {
      Celine: 0,
      Corey: 5,
      Jimmy: 3,
      Ben: 5,
      Eve: 10,
    };
    let returnVal = appleSetToZero(obj2);
    expect(obj2["Celine"]).toBe(0);
    expect(obj2["Corey"]).toBe(0);
    expect(obj2["Jimmy"]).toBe(0);
    expect(obj2["Ben"]).toBe(0);
    expect(obj2["Eve"]).toBe(0);

    expect(returnVal).toBe(obj2);
  });
});

describe("russiaCapital", () => {
  test("returns the capital of Russia", () => {
    const citiesObj = {
      Afghanistan: "Kabul",
      Russia: "Moscow",
      Iceland: "Reykjavik",
    };
    expect(russiaCapital(citiesObj)).toBe("Moscow");
    const citiesObj2 = {
      Afghanistan: "Kabul",
      Russia: "This should be returned",
      Iceland: "Reykjavik",
    };
    expect(russiaCapital(citiesObj2)).toBe("This should be returned");
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = russiaCapital.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("getCapital", () => {
  test("returns the capital of a given country", () => {
    const citiesObj = {
      Afghanistan: "Kabul",
      Russia: "Moscow",
      Iceland: "Reykjavik",
    };
    expect(getCapital(citiesObj, "Iceland")).toBe("Reykjavik");

    expect(getCapital(citiesObj, "Afghanistan")).toBe("Kabul");
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = getCapital.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("addsJamaica", () => {
  test("adds Jamaica to given object", () => {
    const citiesObj = {
      Afghanistan: "Kabul",
      Russia: "Moscow",
      Iceland: "Reykjavik",
    };
    expect(addsJamaica(citiesObj)).toEqual({
      Afghanistan: "Kabul",
      Russia: "Moscow",
      Iceland: "Reykjavik",
      Jamaica: "Kingston",
    });

    let response = addsJamaica(citiesObj);
    expect(response).toBe(citiesObj);
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = addsJamaica.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("addsCountry", () => {
  test("adds Jamaica to given object", () => {
    const citiesObj = {
      Afghanistan: "Kabul",
      Iceland: "Reykjavik",
    };

    let response = addsCountry(citiesObj, "Russia", "Moscow");
    let response2 = addsCountry(citiesObj, "Jamaica", "Kingston");
    expect(response).toBe(citiesObj);
    expect(citiesObj).toEqual({
      Afghanistan: "Kabul",
      Iceland: "Reykjavik",
      Russia: "Moscow",
      Jamaica: "Kingston",
    });
  });
  test("is implemented and doesn't loop through the object", () => {
    const funcString = addsCountry.toString();
    expect(funcString.includes("for")).toBe(false);
    expect(funcString === "() => {}").toBe(false)
  });
});

describe("authorScores", () => {
  test("returns an object with author name mapped to score", () => {
    const authors = [
      ["Mark Twain", 8.9],
      ["Nathaniel Hawthorne", 5.1],
      ["John Steinbeck", 2.3],
      ["C.S. Lewis", 9.9],
      ["Jon Krakauer", 6.1],
    ];
    const res = authorScores(authors);
    expect(res).toEqual({
      "Mark Twain": 8.9,
      "Nathaniel Hawthorne": 5.1,
      "John Steinbeck": 2.3,
      "C.S. Lewis": 9.9,
      "Jon Krakauer": 6.1,
    });
  });
});

describe("bestScore", () => {
  test("returns the full name of the person with the best score", () => {
    const peopleWithScores = [
      {
        firstName: "Calvin",
        lastName: "Newton",
        score: 13,
      },
      {
        firstName: "Garry",
        lastName: "Mckenzie",
        score: 23,
      },
      {
        firstName: "Leah",
        lastName: "Rivera",
        score: 10,
      },
      {
        firstName: "Sonja",
        lastName: "Moreno",
        score: 3,
      },
      {
        firstName: "Noel",
        lastName: "Bowen",
        score: 16,
      },
    ];
    expect(bestScore(peopleWithScores)).toBe("Garry Mckenzie");
  });
});

describe("cubeObj", () => {
  test("returns an object with keys 1 - 20 and all values cubed", () => {
    const res = cubeObj();
    expect(Object.keys(res).length).toBe(20);
    expect(res[1]).toBe(1);
    expect(res[2]).toBe(8);
    expect(res[3]).toBe(27);
    expect(res[14]).toBe(2744);
    expect(res[20]).toBe(8000);
  });
});

describe("countAandE", () => {
  test("still shows zero when no a's or e's are found", () => {
    expect(countAandE("dirt")).toEqual({ a: 0, e: 0 });
  });
  test("ignores capitalization", () => {
    expect(countAandE("eEaA")).toEqual({ a: 2, e: 2 });
  });
  test("works fully", () => {
    expect(countAandE("BE a big Dreamer!")).toEqual({ a: 2, e: 3 });
    expect(countAandE("cats")).toEqual({ a: 1, e: 0 });
  });
});

describe("countOccurance", () => {
  test("returns an objects with keys as letters and values as counts", () => {
    expect(countOccurance("A good snake")).toEqual({
      a: 2,
      " ": 2,
      g: 1,
      o: 2,
      d: 1,
      s: 1,
      n: 1,
      k: 1,
      e: 1,
    });
    expect(countOccurance("HELLO world")).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      " ": 1,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});

describe("countOccuranceNoSpaces", () => {
  test("returns an objects with keys as letters and values as counts. Ignores spaces.", () => {
    expect(countOccuranceNoSpaces("A good snake")).toEqual({
      a: 2,
      g: 1,
      o: 2,
      d: 1,
      s: 1,
      n: 1,
      k: 1,
      e: 1,
    });
    expect(countOccuranceNoSpaces("HELLO world")).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    });
  });
});

describe("mostCommonElement", () => {
  test("returns the most common element", () => {
    expect(mostCommonElement(["cat", "bird", "cat"])).toBe("cat");
    expect(mostCommonElement([2, 1, 1, 1, 3, 2])).toBe(1);
  });
});

describe("updateList", () => {
  test("gives new array with updated values", () => {
    expect(
      updateList({ "Ed Sheeran": "guitar", "Ray Charles": "piano" }, [
        "Ed Sheeran",
        "John Lennon",
        "Ray Charles",
      ])
    ).toEqual(["guitar", "John Lennon", "piano"]);
    expect(updateList({}, [])).toEqual([]);
    expect(
      updateList({ tony: "tiger", sam: "toucan" }, ["nelly", "tony"])
    ).toEqual(["nelly", "tiger"]);
  });
});

describe("deleteKey", ()=> {
    test("deletes key from object", () => {
        const cereal = { tony: "tiger", sam: "toucan" };
        const result = deleteKey(cereal, "tony")
        expect(result).toBe(cereal);
        expect(cereal).toEqual({ sam: "toucan" });
        expect(cereal["tony"]).toBeUndefined()
    })
});

describe("propertyCount", () => {
    test("returns the correct number of properites", () => {
        expect(propertyCount({ "Ed Sheeran": "guitar", "Ray Charles": "piano" })).toBe(2);
        expect(propertyCount({a: 2, b: 3, c: 1})).toBe(3)
        expect(propertyCount({})).toBe(0)
    })
});
