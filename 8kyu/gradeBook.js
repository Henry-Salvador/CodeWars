function getGrade (s1, s2, s3) { 
    let grade = Math.floor(((s1 + s2 + s3)/ 3)/10);
    console.log(grade)
    switch(grade){
        case 10:
        case 9:
          grade = 'A';
          break;
        case 8:
          grade = 'B';
          break;
        case 7:
          grade = 'C';
          break;
        case 6:
          grade = 'D';
          break;
        default:
          grade = 'F';
          break;
    }
    console.log(grade)
    return grade;
  }

  //*top rated solution

  function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }