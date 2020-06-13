const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tarunpritamvrs@gmail.com',
        subject: 'Create Your First task',
        html: 'Explore the Application , ' + name + '. Read Help for Application manual .<br> Contact this email for any queries and Feedbacks.<br><br><br><strong>With Regards , </strong><br>Team TaskIt'
    })
}

const loginMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tarunpritamvrs@gmail.com',
        subject: 'Welcome Back ' + name + '  !',
        html: 'Manage Your Tasks , Dont forget to complete the Tasks ' + name + ' ! <br>Just Kidding <br><br>Contact this email for any queries and Feedbacks.<br><strong>With Regards , </strong><br>Team TaskIt'

    })
}

const deleteList = (email, name, list) => {
    sgMail.send({
        to: email,
        from: 'tarunpritamvrs@gmail.com',
        subject: 'List' + list + ' has been Deleted ',
        html: 'You have successfully completed the Tasks of list ' + list + '. <br><br>Create new lists for acheiveing new tasks <br>Thank You ! '
    })
}

// const deletedUserMail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'tarunpritamvrs@gmail.com',
//         subject: 'Can you provide us Feedback ? ',
//         text: 'Hello ' + name + ',Drop us some information for deleting the account.'
//     })
// }

module.exports = {
    loginMail,
    sendWelcomeMail,
    deleteList
}