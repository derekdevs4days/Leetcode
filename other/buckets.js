/*
There are two commands: goto <BUCKET> and create <FILE>.
goto: Go to a specified bucket.
create: Create a new file in the bucket, and if a bucket already has a file with identical name in it, it won't be added.
Return the name of Bucket that contains the most files.

["goto bucketA", "create fileA", "create fileB", "create fileC", "goto bucketB", "create fileA", "create fileA"]


input: array of instructions
ouput: bucket that has the most files

algorithm: 
- initialize dictionary
{
  bucketA: {fileA, fileB, fileC}
  bucketB: {fileA}
}
- initialize currentBucket
- initialize max value

- iterate through input
  - get instruction and current bucket/file name
    - if instruction is goto
      - set to currentBucket 
      - add current bucket and hashset
    - if instruction is create
      - add current fileName to currentBucket

- iterate through dictonary
  - update max value

- iterate through ditonary and return key with max value
*/

const mostFiles = function(input) {
  const dictionary = {};

  let currentBucket;
  let maxValue = 0;

  for (let el of input) {
    let [instructions, file] = el.split(' ');
    if (instructions === 'goto') {
      currentBucket = file;
      if (!dictionary.hasOwnProperty(file)) dictionary[currentBucket] = new Set();
      continue;
    } else {
      dictionary[currentBucket].add(file);
    }
  }

  for (let bucket in dictionary) {
    if (dictionary[bucket].size > maxValue) maxValue = dictionary[bucket].size;
  }
  
  for (let bucket in dictionary) {
    if (dictionary[bucket].size === maxValue) return bucket;
  }
  
}

// Test case 1
console.log(
  mostFiles([
    "goto music",
    "create song1",
    "create song2",
    "goto videos",
    "create video1",
    "create video2",
    "create video3",
    "goto music",
    "create song3",
  ]) === 'music'
);

// Test case 2
console.log(
  mostFiles([
    "goto docs",
    "create resume",
    "create cover-letter",
    "goto downloads",
    "create file1",
    "create file2",
    "goto photos",
    "create photo1",
    "create photo2",
    "create photo3",
    "goto downloads",
    "create file3",
    "create file4",
    "goto docs",
    "create reference-letter",
  ]) === "downloads"
);

// Test case 3
console.log(
  mostFiles([
    "goto projects",
    "goto project1",
    "create code1",
    "create code2",
    "goto ..",
    "goto project2",
    "create code1",
    "create code2",
    "create code3",
    "goto ..",
    "goto project3",
    "create code1",
    "create code2",
    "create code3",
    "create code4",
    "goto ..",
    "goto projects",
    "goto project2",
  
  ]) === "project3"
);

