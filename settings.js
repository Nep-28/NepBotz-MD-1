//
//   ___      ___                    __________              
//   | |\ \   | |  ____  ________     | |     \ \    ____    __ | |___  
//   | | \ \  | |/ ___  \ | | ___  \  | |_____/ /  / /   \ \ |__| |__| _______
//   | |  \ \ | | _____ / | | |_|   | | |     \ \ | |    | |    | |      / /
//   | |   \ \| |\ ____ / | |_____ /  | |_____/ /  \ \___/ /    | |    /_/____   
//                        | | 
//                        | |           A powerful Bot for whatsapp
//                        | |                                         ___      ___  ________
//                                                                    | |\  / /| | | |      \ \
//                                                                    | | \/ / | | | |       | |
//                                                                    | |      | | | |       | |
//                                                                    | |      | | | |______/ /
//
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = false //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./XeonMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94702476028'] //ur owner number
global.ownername = "🌹⃝⃘̉̉̉̉̉̉🧚ℕ𝕖𝕡𝕥𝕦𝕟𝕖❤️⃝➤⃟̱̱̱̱̄̄̄̄" //ur owner name
global.ytname = "Youtube: Neptune" //ur yt chanel name
global.socialm = "GitHub: Nep-28" //ur github or insta name
global.location = "Sri Lanka, Southern Province, Galle" //ur location

//bot bomdy 
global.owner = ['94702476028']
global.ownertag = '94702476028' //ur tag number
global.botname = '🦋⃝❉⃟࿔ꦿℕ𝕖𝕡𝔹𝕠𝕥𝕫۝⃟̥̩̩̩̥̩̥͚̮💍' //ur bot name
global.footer = '🌹⃝⃘̉̉̉̉̉̉🧚𝙽𝚎𝚙𝚋𝚘𝚝𝚣 𝚙𝚞𝚋𝚕𝚒𝚌 𝚎𝚍𝚒𝚝𝚘𝚗' // ur footer
global.linkz = "https://github.com/Nep-28/NepBotz-MD-1" //your theme url which will be displayed on whatsapp
global.websitex = "https://github.com/Nep-28/NepBotz-MD-1" //ur website to be displayed
global.botscript = 'Nothing' //script link
global.reactmoji = "✅" //ur menu react emoji
global.themeemoji = "🐱" //ur theme emoji
global.note = "It's Upgrating Time" // ur note
global.packname = "NepBotz Stickers\n\n\n\n\n\n\n\n\n\n\n94702476028" //ur sticker watermark packname
global.author = "🌹⃝⃘̉̉̉̉̉̉🧚ℕ𝕖𝕡𝕥𝕦𝕟𝕖❤️⃝➤⃟̱̱̱̱̄̄̄̄" //ur sticker watermark author
global.wm = "🌹⃝⃘̉̉̉̉̉̉🧚𝙽𝚎𝚙𝚋𝚘𝚝𝚣 𝚙𝚞𝚋𝚕𝚒𝚌 𝚎𝚍𝚒𝚝𝚘𝚗"
global.gc = "https://chat.whatsapp.com/Gi47BN7YM30321sUIa7mtT" //ur group to be displayed

//Bot theme media
global.thum = fs.readFileSync("./NepMedia/theme/log0.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./NepMedia/theme/log0.jpg") //ur logo pic
global.err4r = fs.readFileSync("./NepMedia/theme/ea404.jpg") //ur error pic
global.thumb = fs.readFileSync("./NepMedia/theme/log0.jpg") //ur thumb pic

//damtabase
global.premium = ['94702476028'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    banChat: 'The bot was banned in this group, please contact the owner to unban',
    attack: 'Type the number u want to attack',
    kick: '⚙️ User has been successfully removed from this group ✔️',
    add: '⚙️ User has been successfully added to this group ✔️',
    promote: '⚙️ User successfully promoted ✔️',
    demote: '⚙️ User successfully demoted ✔️',
    block: 'Blocked ✔️',
    unblock: 'Unblocked ✔️',
    msticker: 'Downloading media and creating the sticker 🧰',
    tsticker: 'Creating the sticker 🧰',
    rsticker: 'Change the sticker author and package name 🧰',
    picedit: 'Downloading media and editing your photo 🧰'


}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.thumb = fs.readFileSync('./NepMedia/theme/log0.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
