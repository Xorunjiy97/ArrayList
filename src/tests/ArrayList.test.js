const {assert} = require("chai");
const ArrayList = require("../ArrayList.js");


describe("ArrayList methods", () => {
  describe("init",() => {
    const aList = new ArrayList();
    const testData = [
        {
            initialArray: [1, 2, 3],
            expectedSize: 3,
            expectedString: "[1, 2, 3]"
        },
        {
            initialArray: [1, 2, 3, 4],
            expectedSize: 4,
            expectedString: "[1, 2, 3, 4]"
        },
        {
            initialArray: [1, 2, 3, 4, 5],
            expectedSize: 5,
            expectedString: "[1, 2, 3, 4, 5]"
        }
    ];

    testData.forEach(({initialArray, expectedSize, expectedString}) => {
      it("should return size ${expectedSize} and ${expectedString}", () => {
        aList.init(initialArray)

        assert.deepEqual(aList.getSize(), expectedSize);
        assert.deepEqual(aList.cusToString(), expectedString);
      });
    });
  });
  describe("push",() => {
    const aList = new ArrayList();
    const testData = [
        {
            arg: 10,
            initialArray: [1, 2, 3],
            expectedSize: 4,
            expectedString: "[1, 2, 3, 10]"
        },
        {
            arg:10,
            initialArray: [1, 2, 3, 4, 10],
            expectedSize: 6,
            expectedString: "[1, 2, 3, 4, 10, 10]"
        },
        {   arg:10,
            initialArray: [1, 2, 3, 4, 5, 10, 10],
            expectedSize: 8,
            expectedString: "[1, 2, 3, 4, 5, 10, 10, 10]"
        }
    ];

    testData.forEach(({arg, initialArray, expectedSize, expectedString}) => {
        it("should return size ${expectedSize} and ${expectedString}", () => {
            aList.init(initialArray)

            assert.deepEqual(aList.cusPush(arg), expectedSize);
            assert.deepEqual(aList.cusToString(), expectedString);
        });
    });
  });
  describe("cusUnShift",() => {
    const aList = new ArrayList();
    const testData = [
        {
            arg: 10,
            initialArray: [1, 2, 3],
            expectedSize: 4,
            expectedString: "[10, 1, 2, 3]"
        },
        {
            arg:10,
            initialArray: [10, 1, 2, 3, 4,],
            expectedSize: 6,
            expectedString: "[10, 10, 1, 2, 3, 4]"
        },
        {   arg:10,
            initialArray: [10, 10, 1, 2, 3, 4, 5,],
            expectedSize: 8,
            expectedString: "[10, 10, 10, 1, 2, 3, 4, 5]"
        }
    ];

    testData.forEach(({arg, initialArray, expectedSize, expectedString}) => {
        it("should return size ${expectedSize} and ${expectedString}", () => {
            aList.init(initialArray)

            assert.deepEqual(aList.cusUnShift(arg), expectedSize);
            assert.deepEqual(aList.cusToString(), expectedString);
        });
    });
  });
  describe("cusShift",() => {
    const aList = new ArrayList();
      const testData = [
          {
              initialArray: [1, 2, 3, 4],
              returnElement: 1,
              expectedString: "[2, 3, 4]",
          },
          {
              initialArray: [2, 3, 4],
              returnElement: 2,
              expectedString: "[3, 4]",
          },
          {
              initialArray: [3, 4],
              returnElement: 3,
              expectedString: "[4]",
          }
      ];

      testData.forEach(({arg, initialArray, returnElement, expectedString}) => {
        it("should return size ${returnElement} and ${expectedString}", () => {
            aList.init(initialArray)

            assert.deepEqual(aList.cusShift(), returnElement);
            assert.deepEqual(aList.cusToString(), expectedString);
        });
      });
    });
    describe("cusPop",() => {
        const aList = new ArrayList();
            const testData = [
                {
                  initialArray: [1, 2, 3, 4],
                  returnElement: 4,
                  expectedString: "[1, 2, 3]",
                },
                {
                  initialArray: [1, 2, 3],
                  returnElement: 3,
                  expectedString: "[1, 2]",
                },
                {
                  initialArray: [1, 2],
                  returnElement: 2,
                  expectedString: "[1]",
                }
            ];

        testData.forEach(({arg, initialArray, returnElement, expectedString}) => {
            it("should return size ${returnElement} and ${expectedString}", () => {
                aList.init(initialArray)

                assert.deepEqual(aList.cusPop(), returnElement);
                assert.deepEqual(aList.cusToString(), expectedString);
            });
        });
    });
        describe("cusClear",() => {
            const aList = new ArrayList();
                  const testData = [
                      {
                          initialArray: [1, 2, 3, 4],
                          expectedSize: 0,
                          expectedString: "[]",
                      },
                      {
                          initialArray: [1, 2, 3],
                          expectedSize: 0,
                          expectedString: "[]",
                      },
                      {
                          initialArray: [1, 2],
                          expectedSize: 0,
                          expectedString: "[]",
                      }
                  ];

                  testData.forEach(({arg, initialArray, expectedSize, expectedString}) => {
                  it("should return size ${expectedSize} and ${expectedString}", () => {
                    aList.init(initialArray)
                    aList.cusClear()

                    assert.deepEqual(aList.getSize(), expectedSize);
                    assert.deepEqual(aList.cusToString(), expectedString);
                  });
            });
        });
    describe("cusReverse",() => {
        const aList = new ArrayList();
            const testData = [
                {
                  initialArray: [1, 2, 3, 4],
                  returnElement: [4, 3, 2, 1],
                },
                {
                  initialArray: [1, 2, 3],
                  returnElement: [3, 2, 1],
                },
                {
                  initialArray: [1, 2],
                  returnElement: [2, 1],
                }
            ];

            testData.forEach(({arg, initialArray, returnElement, expectedString}) => {
                it("should return size ${returnElement} and ${expectedString}", () => {
                    aList.init(initialArray)

            assert.deepEqual(aList.cusReverse(), returnElement);
                });
            });
    });
    describe("cusSlice",() => {
        const aList = new ArrayList();
          const testData = [
            {arg: 0,
             arg2: 2,
             initialArray: [1, 2, 3],
             expectedSize: [1, 2],
            },
             {
              arg: 2,
              arg2: 4,
              initialArray: [1, 2, 3, 4],
              expectedSize: [3, 4],
             },
             {
              arg: 1,
              arg2: 4,
              initialArray: [1, 2, 3, 4, 5],
              expectedSize: [2, 3, 4],
             }
          ];

          testData.forEach(({arg, arg2, initialArray, expectedSize, expectedString}) => {
              it("should return size ${initialArray} and ${expectedString}", () => {
                aList.init(initialArray)

                assert.deepEqual(aList.cusSlice(arg,arg2), expectedSize);
              });
          });
    });
})

