import mongoose from 'mongoose';

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb+srv://test:4uuuu@cluster0.rsc4sup.mongodb.net/blog?retryWrites=true&w=majority')
}

const db = mongoose.connection
db.once('open', function (){
    console.log("we are connected")
})

export default db