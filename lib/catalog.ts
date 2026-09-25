export const services=[
{id:'signature-cut',name:'Signature Cut & Style',category:'Hair',duration:60,price:55,description:'A tailored cut and polished finish, shaped around your style.',image:'/images/salon-1.jpg'},
{id:'color',name:'Color & Gloss',category:'Hair',duration:120,price:115,description:'Rich, dimensional color with a luminous gloss.',image:'/images/salon-2.jpg'},
{id:'facial',name:'Essential Facial',category:'Skin',duration:60,price:70,description:'A calming, personalized facial for a refreshed feel.',image:'/images/salon-3.jpg'},
{id:'makeup',name:'Occasion Makeup',category:'Makeup',duration:75,price:85,description:'An elegant look created for your special occasion.',image:'/images/salon-4.jpg'},
{id:'nails',name:'Manicure & Nail Care',category:'Nails',duration:45,price:40,description:'Thoughtful nail care and a beautifully finished manicure.',image:'/images/salon-5.jpg'},
{id:'bridal',name:'Bridal Styling',category:'Bridal',duration:120,price:160,description:'A considered hair and makeup experience for your day.',image:'/images/salon-6.jpg'}];
export const stylists=[{id:'maya',name:'Maya',role:'Hair stylist',specialty:'Cuts and styling'},{id:'lina',name:'Lina',role:'Color specialist',specialty:'Color and gloss'},{id:'noor',name:'Noor',role:'Beauty specialist',specialty:'Skin, makeup and nails'}];
export const times=['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00'];
export function eligible(service:string){if(service==='signature-cut')return ['maya','lina'];if(service==='color')return ['lina'];if(service==='facial'||service==='makeup'||service==='nails')return ['noor'];return ['maya','noor']}
