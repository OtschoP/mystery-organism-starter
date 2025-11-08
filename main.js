// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function to create a specimen object

function pAequorFactory(specimenNum, dna){
  const obj = {specimenNum: specimenNum, dna: dna}
  return obj;
}

console.log(pAequorFactory(1, mockUpStrand()));