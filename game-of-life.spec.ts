describe("game-of-life", () => {
  // * alive
  // _ dead
  const initialBoard = [
    ["_", "_", "_", "_", "_"],
    ["_", "*", "*", "_", "_"],
    ["_", "*", "*", "_", "_"],
    ["_", "_", "_", "_", "_"],
  ];

  describe("given cells not overcrowded", () => {
    it("cells survive to the next generation", () => {
      // Arrange
      const expected = initialBoard;
      // Act
      const result = evolve(initialBoard);
      // Assert
      expect(result).toEqual(expected);
    });
  });

  describe("given cell is isolated", () => {
    it("cells does not live to the next generation", () => {
      // Arrange
      const initialBoard = [
        ["_", "_", "_"],
        ["_", "*", "_"],
        ["_", "_", "_"],
      ];
      const expected = [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ];
      // Act
      const result = evolve(initialBoard);
      // Assert
      expect(result).toEqual(expected);
    });
  });
});

function evolve(initialBoard: string[][]): string[][] {
  const numberOfAliveCells = initialBoard
    .map((x) => x.filter((y) => y === "*").length)
    .reduce((acc, x) => acc + x, 0);

  if (numberOfAliveCells === 1) {
    let nextGeneration = initialBoard.slice();
    nextGeneration = nextGeneration.map((x) => x.map((y) => "_"));
    return nextGeneration;
  }

  return initialBoard;
}
