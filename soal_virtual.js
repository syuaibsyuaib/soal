//buka lembar soal
var datasoal = ["1. siapa nama presiden pertama Indonesia?",
                "2. apa nama ilmiah proses memasak makanan pada tumbuhan?",
               	"3. tahun berapakah Indonesia merdeka?",
               	"4. apa yang di maksud dengan avertebrata?",
               	"5. apa fungsi jantung?"];

for (i=0;i<5;i++){
var jawaban = prompt (datasoal[i]);
  confirm("jawaban anda "+"'"+jawaban);
  console.log (i+1+". "+jawaban);
};
/*
confirm ("jawaban anda "+ jawaban);
var jawaban_satu = jawaban;
console.log ("1. "+jawaban);
//baca soal pertama

//buka lembar jawaban
//tulis jawaban untuk soal pertama
//buka lembar soal*/