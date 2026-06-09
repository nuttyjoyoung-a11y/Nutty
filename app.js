
async function load(){
 const res = await fetch('vocab.json');
 const data = await res.json();
 console.log('Loaded categories:', data);
}
load();
