require('./db/mongoose')

const User = require('./db/user')
const Transfer = require('./db/transfer')

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT

if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'));
      
        app.get('/', (req, res) => {
          res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
        });

        app.get('/transfer/:id', (req, res) => {
                res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
        });

        app.get('/account/:id', (req, res) => {
                res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
        });

        app.get('/transfers', (req, res) => {
                res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
        });
}

app.post('/user', async (req,res) => {
        const user = new User(req.body)
        try{
                await user.save()
                res.status(201).send(user)
        }catch(e){
                res.status(404).send({error:e})
        }
})

app.get('/users', async (req,res) => {
        try{
                const users = await User.find({})
                res.send({users})
        }catch(e){
                res.status(500).send({error:e})
        }
})

app.patch('/transfer', async (req,res) => {
        const transfer = req.body;
        const transferAmount = parseFloat(transfer.amount)
        try{
                const sender = await User.findById(transfer.sender)
                const reciever = await User.findById(transfer.reciever)
                const tmpTransferObj = {
                        sender: sender._id,
                        reciever: reciever._id,
                        amount: transferAmount
                }
                const transferObj = new Transfer(tmpTransferObj)
                sender.balance = sender.balance - transferAmount
                reciever.balance = reciever.balance + transferAmount
                await reciever.save()
                await sender.save()
                await transferObj.save()
                res.send({
                        sender,
                        reciever
                })
        }catch(e){
                res.status(400).send({error:e})
        }
})

app.get('/transfer_history',async (req,res) => {
        try{
                const transfers = await Transfer.find({}).sort({createdAt:'desc'})
                for(const transfer of transfers){
                        await transfer.populate('sender').execPopulate()
                        await transfer.populate('reciever').execPopulate()
                }
                res.send({
                        transfers
                })
        }catch(e){
                res.status(500).send({error:e})
        }
})

app.listen(port, () => {
        console.log('Listening on port '+port)
})