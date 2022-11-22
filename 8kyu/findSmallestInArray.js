class SmallestIntegerFinder {
    findSmallestInt(args) {
     return args.sort( ( a, b ) => a - b).shift();
    }
  }