const Discord = require("discord.js")
const auth = require('./auth.json');
const bot = new Discord.Client()
/* var regexall = /(cucks?)|((ph|f)agg?s?([e0aio]ts?|oted|otry))|(nigg?[aeoi]s?)|((ph|f)[@a]gs?)|(n[i!j1e]+gg?(rs?|ett?e?s?|lets?|ress?e?s?|r[a0oe]s?|[ie@ao0!]rs?|r[o0]ids?|ab[o0]s?|erest))|(j[!i]gg?[aer]+(boo?s?|b00?s?))|(jigg?[aer]+(b[0o]ing))|(p[0o]rchs*-?m[0o]nke?(ys?|ies?))|(g(ooks?|00ks?))|(k[iy]+kes?)|(b[ea]ne[ry]s?)|((towel|rag)heads?)|(dark(e?y|ies?))|((shit|mud)-?skins?)|(tarbab(ys?|ies?))|(apes?fricans?)|(coons?(y|i?e?s?|er))|(mignorants?)|(shitlords?)|(groids?)|(chimpires?)|(muds*childr?e?n?)|(dunes*coone?r?s?)|(highs*yellows?)|(shee?s*boons?)|(cocks*suckers?)|( tards?)|(cunts?y?)|(queer\\s*bags?)|(fucking*(whores?))|(whore*mouth)|(fuckboys?)|(fatfucks?)|(fuck(wits?|tards?))|(shit(bags?|dicks?))|(jigapes?)|(nigtown)/gi;
 */

 const prefix = "$"
var Admincommandlist = [
    "**help** - It's what you just used!",
    "**invites** <raid> - Creates an invite list for macroing invites in-game, works for MC, ZG and BWL atm", 
    "**del** - Deletes a message in current chat",
    "**bulkdel** X - Deletes X amount of posts in current chat, max 99 (IRREVERSIBLE!)",
    "**raidsign** <raid> <on/off> - Allows or disallows raid signing",
    "**addraid** <raidname> <name> <class> <role> - Assigns a member to raid, only name is sensitive for formatting",
    "**newraid** <raidname> <weekday> <time> - Makes a new raid template for specified raid, also sets automatic signup opening (See note below)",
    "**removeraid** <raidname> <member> - Removes yourself or a member (Caps sensitive) from raid roster, exclude membername to remove yourself",
    "**repopulateraid** - Repopulates raid info for bot, from the all raid signup lists in case bot goes down",
    "**updateraid** - Reassigns dates and refills raid rosters based on current arrays in bot | Should be deprecated",
    "**updateday** <raidname> dd/mm hh.mm <weekday> - Updates set day and time for specified raid",
    "**getraidposts** - Reassigns the bot's posts for raid lists in case someone else was first in said channels, or it was empty | Should be deprecated",
    "**arrangereactions** - Rearranges the reactions on raid posts, in case it messed up the order at any point", 
    "**giveaway** dd/mm-yy hh:mm <item name> - Makes a giveaway!",
    "",
    "Available roles are tank, healer, melee, ranged",
    "Available raids are BWL, MC, ZG, AQT and AQF",
    "Time format at newraid hh.mm", 
    "", 
    "Newraid now automates signup opening following this rule: If $newraid before 20.00, it sets up opening signups at 20.00 same day", 
    "If $newraid after 20.00, it sets up opening signups at 20.00 the day after"]
var Membercommandlist = [
    "**giveaway** dd/mm-yy hh:mm <item name> - Makes a giveaway! Preferrably used in #giveaway, but can be used anywhere", 
    "**help** - It's what you just used!",
    "This is all you're allowed for now :("]


var defaultoutput 
var MCraidsign = true
var MCoffactive = false
var MConactive = false
var ZGraidsign = true
var ZGonactive = false
var BWLraidsign = true
var BWLonactive = false
var AQFraidsign = true
var AQFonactive = false
var AQTraidsign = true
var AQTonactive = false
var emojifilter = /mage|hunter|warlock|druid|rogue|priest|warrior|shaman|alt|backup/i

var MCtanklist = [""]
var MChealerlist = [""]
var MCmeleelist = [""]
var MCrangedlist = [""]

var BWLProtWars = 0
var BWLBears = 0
var BWLRestoDruids = 0
var BWLHPriests = 0
var BWLRestoShamans = 0
var BWLBalances = 0
var BWLFerals = 0
var BWLHunters = 0
var BWLMages = 0
var BWLRogues = 0
var BWLSPriests = 0
var BWLEleShamans = 0
var BWLEnhShamans = 0
var BWLDPSWars = 0
var BWLWarlocks = 0

var BWLProtWarlist = [""]
var BWLBearlist = [""]
var BWLRestoDruidlist = [""]
var BWLHPriestlist = [""]
var BWLRestoShamanlist = [""]
var BWLBalanceDruidlist = [""]
var BWLFeralDruidlist = [""]
var BWLHunterlist = [""]
var BWLMagelist = [""]
var BWLRoguelist = [""]
var BWLSPriestlist = [""]
var BWLEleShamanlist = [""]
var BWLEnhShamanlist = [""]
var BWLDPSWarlist = [""]
var BWLWarlocklist = [""]

var AQFProtWars = 0
var AQFBears = 0
var AQFRestoDruids = 0
var AQFHPriests = 0
var AQFRestoShamans = 0
var AQFBalances = 0
var AQFFerals = 0
var AQFHunters = 0
var AQFMages = 0
var AQFRogues = 0
var AQFSPriests = 0
var AQFEleShamans = 0
var AQFEnhShamans = 0
var AQFDPSWars = 0
var AQFWarlocks = 0

var AQFProtWarlist = [""]
var AQFBearlist = [""]
var AQFRestoDruidlist = [""]
var AQFHPriestlist = [""]
var AQFRestoShamanlist = [""]
var AQFBalanceDruidlist = [""]
var AQFFeralDruidlist = [""]
var AQFHunterlist = [""]
var AQFMagelist = [""]
var AQFRoguelist = [""]
var AQFSPriestlist = [""]
var AQFEleShamanlist = [""]
var AQFEnhShamanlist = [""]
var AQFDPSWarlist = [""]
var AQFWarlocklist = [""]

var AQTProtWars = 0
var AQTBears = 0
var AQTRestoDruids = 0
var AQTHPriests = 0
var AQTRestoShamans = 0
var AQTBalances = 0
var AQTFerals = 0
var AQTHunters = 0
var AQTMages = 0
var AQTRogues = 0
var AQTSPriests = 0
var AQTEleShamans = 0
var AQTEnhShamans = 0
var AQTDPSWars = 0
var AQTWarlocks = 0

var AQTProtWarlist = [""]
var AQTBearlist = [""]
var AQTRestoDruidlist = [""]
var AQTHPriestlist = [""]
var AQTRestoShamanlist = [""]
var AQTBalanceDruidlist = [""]
var AQTFeralDruidlist = [""]
var AQTHunterlist = [""]
var AQTMagelist = [""]
var AQTRoguelist = [""]
var AQTSPriestlist = [""]
var AQTEleShamanlist = [""]
var AQTEnhShamanlist = [""]
var AQTDPSWarlist = [""]
var AQTWarlocklist = [""]

var ZGProtWars = 0
var ZGBears = 0
var ZGRestoDruids = 0
var ZGHPriests = 0
var ZGRestoShamans = 0
var ZGBalances = 0
var ZGFerals = 0
var ZGHunters = 0
var ZGMages = 0
var ZGRogues = 0
var ZGSPriests = 0
var ZGEleShamans = 0
var ZGEnhShamans = 0
var ZGDPSWars = 0
var ZGWarlocks = 0

var ZGProtWarlist = [""]
var ZGBearlist = [""]
var ZGRestoDruidlist = [""]
var ZGHPriestlist = [""]
var ZGRestoShamanlist = [""]
var ZGBalanceDruidlist = [""]
var ZGFeralDruidlist = [""]
var ZGHunterlist = [""]
var ZGMagelist = [""]
var ZGRoguelist = [""]
var ZGSPriestlist = [""]
var ZGEleShamanlist = [""]
var ZGEnhShamanlist = [""]
var ZGDPSWarlist = [""]
var ZGWarlocklist = [""]

var prottemp = BWLProtWarlist
var beartemp = BWLBearlist
var restodruidtemp = BWLRestoDruidlist
var hpriesttemp = BWLHPriestlist
var restoshamantemp = BWLRestoShamanlist
var balancetemp = BWLBalanceDruidlist
var feraltemp = BWLFeralDruidlist
var huntertemp = BWLHunterlist
var magetemp = BWLMagelist
var roguetemp = BWLRoguelist
var spriesttemp = BWLSPriestlist
var eletemp = BWLEleShamanlist
var enhtemp = BWLEnhShamanlist
var dpswartemp = BWLDPSWarlist
var warlocktemp = BWLWarlocklist

var MCPost
var MCday = 7
var MCWeekday = "Sunday"
var MCTime = "20.30"
var MCmonth = nextDate(MCday).getUTCMonth()+1;
var MCdate = nextDate(MCday).getUTCDate() + "/" + MCmonth;

var ZGPost
var ZGday = 4
var ZGWeekday = "Thursday"
var ZGTime = "20.00"
var ZGmonth = nextDate(ZGday).getUTCMonth()+1;
var ZGdate = nextDate(ZGday).getUTCDate() + "/" + ZGmonth;

var BWLPost
var BWLday = 7
var BWLWeekday = "Sunday"
var BWLTime = "19.00"
var BWLmonth = nextDate(BWLday).getUTCMonth()+1;
var BWLdate = nextDate(BWLday).getUTCDate() + "/" + BWLmonth;

var AQFPost
var AQFday = 7
var AQFWeekday = "Sunday"
var AQFTime = "19.00"
var AQFmonth = nextDate(AQFday).getUTCMonth()+1;
var AQFdate = nextDate(AQFday).getUTCDate() + "/" + AQFmonth;

var AQTPost
var AQTday = 7
var AQTWeekday = "Sunday"
var AQTTime = "19.00"
var AQTmonth = nextDate(AQTday).getUTCMonth()+1;
var AQTdate = nextDate(AQTday).getUTCDate() + "/" + AQTmonth;

var MCmaxtank = 4
var MCmaxhealer = 8
var MCmaxmelee = 12
var MCmaxranged = 16
var raidinitmessage = ""

let temptank = MCtanklist
let temphealer = MChealerlist
let tempmelee = MCmeleelist
let tempranged = MCrangedlist

let adminclassification = ["Guild Master", "Officers"]
let raiderclassification = ["Guild Master", "Officers", "Raider", "Class Leader"]
let userclassification = ["Members"]
let trialclassification = ["Trial"]
let memberclassification = ["Recruits", "Members", "Raider", "Trial", "Junior Officers", "Raid Leader", "Class Leader"]


bot.on("ready", async () => {
        var readytime = new Date()
        console.log("Connected as " + bot.user.tag + " and time/date is " + readytime)
        await getraidposts().catch((err) => {console.log(err)});

        let MCtempdate = new Date()
        let ZGtempdate = new Date()
        let BWLtempdate = new Date()
        let AQFtempdate = new Date()
        let AQTtempdate = new Date()

        let temp = MCPost.content.toString().match(/\d{1,2}\/\d{1,2}/)
        console.log("MC: " + temp)
        let MCtempday = temp.toString().replace(/\/\d{1,2}/,"")
        let MCtempmonth = temp.toString().replace(/\d{1,2}\//,"")
        MCtempmonth = MCtempmonth-1
        MCtempdate.setDate(MCtempday)
        MCtempdate.setMonth(MCtempmonth)
        MCmonth = MCtempdate.getUTCMonth()+1
        MCdate = MCtempdate.getUTCDate() + "/" + MCmonth
        MCTime = MCPost.content.toString().match(/\d{1,2}\.\d{1,2}/)
        let weektemp = MCPost.content.toString().match(/ [a-zA-Z]{2,6}day/i)
        MCWeekday = weektemp.toString().replace(" ","")

        temp = ZGPost.content.toString().match(/\d{1,2}\/\d{1,2}/)
        console.log("ZG: " + temp)
        let ZGtempday = temp.toString().replace(/\/\d{1,2}/,"")
        let ZGtempmonth = temp.toString().replace(/\d{1,2}\//,"")
        ZGtempmonth = ZGtempmonth-1
        ZGtempdate.setDate(ZGtempday)
        ZGtempdate.setMonth(ZGtempmonth)
        ZGmonth = ZGtempdate.getUTCMonth()+1
        ZGdate = ZGtempdate.getUTCDate() + "/" + ZGmonth
        ZGTime = ZGPost.content.toString().match(/\d{1,2}\.\d{1,2}/)
        weektemp = ZGPost.content.toString().match(/ [a-zA-Z]{2,6}day/i)
        ZGWeekday = weektemp.toString().replace(" ","")
        
        temp = BWLPost.content.toString().match(/\d{1,2}\/\d{1,2}/)
        console.log("BWL: " + temp)
        let BWLtempday = temp.toString().replace(/\/\d{1,2}/,"")
        let BWLtempmonth = temp.toString().replace(/\d{1,2}\//,"")
        BWLtempmonth = BWLtempmonth-1
        BWLtempdate.setDate(BWLtempday)
        BWLtempdate.setMonth(BWLtempmonth)
        BWLmonth = BWLtempdate.getUTCMonth()+1
        BWLdate = BWLtempdate.getUTCDate() + "/" + BWLmonth
        BWLTime = BWLPost.content.toString().match(/\d{1,2}\.\d{1,2}/)
        weektemp = BWLPost.content.toString().match(/ [a-zA-Z]{2,6}day/i)
        BWLWeekday = weektemp.toString().replace(" ","")

                
        temp = AQFPost.content.toString().match(/\d{1,2}\/\d{1,2}/)
        console.log("AQF: " + temp)
        let AQFtempday = temp.toString().replace(/\/\d{1,2}/,"")
        let AQFtempmonth = temp.toString().replace(/\d{1,2}\//,"")
        AQFtempmonth = AQFtempmonth-1
        AQFtempdate.setDate(AQFtempday)
        AQFtempdate.setMonth(AQFtempmonth)
        AQFmonth = AQFtempdate.getUTCMonth()+1
        AQFdate = AQFtempdate.getUTCDate() + "/" + AQFmonth
        AQFTime = AQFPost.content.toString().match(/\d{1,2}\.\d{1,2}/)
        weektemp = AQFPost.content.toString().match(/ [a-zA-Z]{2,6}day/i)
        AQFWeekday = weektemp.toString().replace(" ","")

                
        temp = AQTPost.content.toString().match(/\d{1,2}\/\d{1,2}/)
        console.log("AQT: " + temp)
        let AQTtempday = temp.toString().replace(/\/\d{1,2}/,"")
        let AQTtempmonth = temp.toString().replace(/\d{1,2}\//,"")
        AQTtempmonth = AQTtempmonth-1
        AQTtempdate.setDate(AQTtempday)
        AQTtempdate.setMonth(AQTtempmonth)
        AQTmonth = AQTtempdate.getUTCMonth()+1
        AQTdate = AQTtempdate.getUTCDate() + "/" + AQTmonth
        AQTTime = AQTPost.content.toString().match(/\d{1,2}\.\d{1,2}/)
        weektemp = AQTPost.content.toString().match(/ [a-zA-Z]{2,6}day/i)
        AQTWeekday = weektemp.toString().replace(" ","")


        populateraidlists();
/*         var MCofftime = new Date()
        MCofftime = nextDate(MCday)
        MCofftime.setHours(18)
        MCofftime.setMinutes(0)
        MCofftime.setSeconds(0)
        MCofftime = MCofftime - readytime
            console.log('Test time = ' + MCofftime)
            if(MCoffactive == false){
                MCoffactive = true
                setTimeout(closeMC, MCofftime)
            } */
})

function nextDate(dayIndex) {
    var today = new Date();
    today.setDate(today.getDate() +(dayIndex - 1 - today.getDay() + 7) % 7 + 1);
    return today;
}

bot.on('messageReactionAdd', (reaction, user) => {
    if ((user != bot.user) && (reaction.message == MCPost || reaction.message == ZGPost || reaction.message == BWLPost || reaction.message==AQFPost || reaction.message==AQTPost)) {
        if (reaction.message == MCPost && MCraidsign == true && reaction.emoji.name.match(emojifilter)) {
            if((MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ") && (reaction.emoji.name == 'Alt' || reaction.emoji.name == 'Backup')) || !MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
                reaction.users.remove(user).then(async function() {
                    await assignmember(reaction, user)
                })
        }else{
            reaction.users.remove(user)
            user.send('You\'re already signed up for Molten Core! If you try to change spec, remove yourself first and try again')}
    }
    else if (reaction.message == ZGPost && ZGraidsign == true && reaction.emoji.name.match(emojifilter)) {
        if((ZGPost.content.toString().match(reaction.message.guild.member(user).displayName + " ") && (reaction.emoji.name == 'Alt' || reaction.emoji.name == 'Backup')) || !ZGPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            reaction.users.remove(user).then(async function () { 
            await assignmember(reaction, user)
        })
    }else{
        reaction.users.remove(user)
        user.send('You\'re already signed up for Zul\'Gurub! If you try to change spec, remove yourself first and try again')}
} 
    else if (reaction.message == BWLPost && BWLraidsign == true && reaction.emoji.name.match(emojifilter)) {
        if(!BWLPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            reaction.users.remove(user).then(async function() {
                await assignmember(reaction, user)
            })
    }else{
        reaction.users.remove(user)
        user.send('You\'re already signed up for BWL! If you try to change spec, remove yourself first and try again')}
    }
    else if (reaction.message == AQFPost && AQFraidsign == true && reaction.emoji.name.match(emojifilter)) {
        if(!AQFPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            reaction.users.remove(user).then(async function() {
                await assignmember(reaction, user)
            })
    }else{
        reaction.users.remove(user)
        user.send('You\'re already signed up for AQ40! If you try to change spec, remove yourself first and try again')}
    }
    else if (reaction.message == AQTPost && AQTraidsign == true && reaction.emoji.name.match(emojifilter)) {
        if(!AQTPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            reaction.users.remove(user).then(async function() {
                await assignmember(reaction, user)
            })
    }else{
        reaction.users.remove(user)
        user.send('You\'re already signed up for AQ40! If you try to change spec, remove yourself first and try again')}
    }
        else if (reaction.emoji.name == "RemoveMe"){
            if(MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ") && reaction.message == MCPost && MCraidsign == true){
                reaction.users.remove(user).then(async function() {
                    assignmember(reaction, user)
                })
            }
            else if(ZGPost.content.toString().match(reaction.message.guild.member(user).displayName) + " " && reaction.message == ZGPost && ZGraidsign == true){
                reaction.users.remove(user).then(async function () {
                    await assignmember(reaction, user)
                })
                } 
        else if(BWLPost.content.toString().match(reaction.message.guild.member(user).displayName + " ") && reaction.message == BWLPost && BWLraidsign == true){
            reaction.users.remove(user).then(async function (){
                await assignmember(reaction, user)
            })
        }else if(AQFPost.content.toString().match(reaction.message.guild.member(user).displayName + " ") && reaction.message == AQFPost && AQFraidsign == true){
            reaction.users.remove(user).then(async function (){
                await assignmember(reaction, user)
            })
        }else if(AQTPost.content.toString().match(reaction.message.guild.member(user).displayName + " ") && reaction.message == AQTPost && AQTraidsign == true){
            reaction.users.remove(user).then(async function (){
                await assignmember(reaction, user)
            })
        }else{
                reaction.users.remove(user)
                user.send('You\'re already unassigned from that raid or signups are closed atm')}
        }
        else if (reaction.emoji.name.match(emojifilter)){
            user.send("I'm afraid you're not allowed to sign up or off for that raid right now\nSignups always open up at 20.00 the day after raid happened! I'll announce it in raid-signup when it starts").then(async function(){
            await reaction.users.remove(user)
            })}
            else{reaction.users.remove(user)}
            
}
    })

bot.on('message', (receivedMessage) => {
    defaultoutput = receivedMessage.channel
    if (receivedMessage.author == bot.user) {
        return
    }
/*     if (receivedMessage.toString().match(regexall)) {
        receivedMessage.delete(1).catch((err) => { console.log(err) })
        defaultoutput.send("Keep it friendly, guys, no such words")
        let temp = receivedMessage.author + " : " + receivedMessage
        let logmessage = temp.toString()
        botlog(logmessage, "^Deleted from #" + receivedMessage.channel.name + "^")
    } */
    else if (receivedMessage.channel.type == "dm" && receivedMessage.content.match(/frostbolt.*,.*,*/i)){
        let frostmsg = receivedMessage.content.split(',')
        var frostdmg = frostmsg[0].replace('!frostbolt','')
        var hit = Number(frostmsg[1])
        hit = (hit+83)/100
        if (hit > 0.99){
            hit = 0.99
        }
        var crit = frostmsg[2]/100 + 1

        let avgfrostbolt = frostdmg*0.814*hit*crit+((440+475)/2)

        receivedMessage.channel.send('Your average frostbolt is about ' + avgfrostbolt + ' damage unbuffed')
    }
    else if (receivedMessage.channel.type == "dm" && receivedMessage.content.match(/frosthelp/i)){
        receivedMessage.channel.send('Syntax is !frostbolt frostpower,hitbonus,critchance \nDo note decimals are . and not , so example would be !frostbolt 300,7,11.35')
    }
    else if (receivedMessage.member && receivedMessage.content.startsWith(prefix)) {
        if (receivedMessage.member.roles.cache.some(r => adminclassification.includes(r.name))) {
            processAdminCommand(receivedMessage)
        }
        else if (receivedMessage.member && receivedMessage.member.roles.cache.some(r => memberclassification.includes(r.name))) {
            processMemberCommand(receivedMessage)
        }
        else {
            defaultoutput.send("You're not allowed to use that command.")
        }
    }

    else { return }
})

async function processAdminCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "bulkdel") {
        let argumentsnum = parseInt(arguments[0])
        if (arguments.length == 0) { defaultoutput.send("Define how many entries to delete!") }
        else {
            if (argumentsnum > 0 && argumentsnum < 100) {
                receivedMessage.channel.bulkDelete(argumentsnum + 1).catch((error) => { console.log(error) })
                botlog("Deleted " + argumentsnum + " messages in #" + receivedMessage.channel.name, "")
            } else { defaultoutput.send("Too big number (Must be equal to or less than 99), or no number assigned.") }
        }
    }
    else if (primaryCommand == "del") {
        receivedMessage.channel.bulkDelete(2).catch((error) => { console.log(error) })
        botlog("Deleted 1 message in #" + receivedMessage.channel.name, "")
    }
    else if (primaryCommand == "invites") {
        if (arguments[0].match(/mc/i)){
            makeinvites('mc', receivedMessage.member)
        }else if (arguments[0].match(/bwl/i)){
            makeinvites('bwl', receivedMessage.member)
        }else if (arguments[0].match(/zg/i)){
            makeinvites('ZG', receivedMessage.member)
        }else if (arguments[0].match(/aqf/i)){
            makeinvites('aqf', receivedMessage.member)
        }else if (arguments[0].match(/aqt/i)){
            makeinvites('aqt', receivedMessage.member)
        }
    }
    else if(primaryCommand == "arrangereactions"){
            MCPost.reactions.removeAll().then(async function () {
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "Mage"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "RemoveMe"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "Backup"))
            await MCPost.react(MCPost.guild.emojis.cache.find(emoji => emoji.name == "Alt"))
    }).catch((err) => {console.log(err)})


    ZGPost.reactions.removeAll().then(async function () {
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Mage"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "RemoveMe"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Backup"))
        await ZGPost.react(ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Alt"))
    }).catch((err) => {console.log(err)})

BWLPost.reactions.removeAll().then(async function () {
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Mage"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock"))
    await BWLPost.react(BWLPost.guild.emojis.cache.find(emoji => emoji.name == "RemoveMe"))
    }).catch((err) => {console.log(err)})

    AQFPost.reactions.removeAll().then(async function () {
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Mage"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock"))
        await AQFPost.react(AQFPost.guild.emojis.cache.find(emoji => emoji.name == "RemoveMe"))
        }).catch((err) => {console.log(err)})

        AQTPost.reactions.removeAll().then(async function () {
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Mage"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock"))
            await AQTPost.react(AQTPost.guild.emojis.cache.find(emoji => emoji.name == "RemoveMe"))
            }).catch((err) => {console.log(err)})
}

else if (primaryCommand == "timesign"){
    if(arguments != undefined){
        if (arguments[0].match(/mc/i)){
            var tempdate = new Date();
            tempdate.setHours(20)
            tempdate.setMinutes(00)
            tempdate.setSeconds(00)
            var now = new Date();
            var timer = tempdate - now
            if(timer > 0){
                setTimeout(openMC, timer)
            }else{defaultoutput.send("Wait until tomorrow, can't set it for today!")}
        }
        else if (arguments[0].match(/ZG/i)){
            var tempdate = new Date();
            tempdate.setHours(20)
            tempdate.setMinutes(00)
            tempdate.setSeconds(00)
            var now = new Date();
            var timer = tempdate - now
            if(timer > 0){
                setTimeout(openZG, timer)
            }else{defaultoutput.send("Wait until tomorrow, can't set it for today!")}
        } 
        else if (arguments[0].match(/bwl/i)){
            var tempdate = new Date();
            tempdate.setHours(20)
            tempdate.setMinutes(00)
            tempdate.setSeconds(00)
            var now = new Date();
            var timer = tempdate - now
            if(timer > 0){
                setTimeout(openBWL, timer)
            }else{defaultoutput.send("Wait until tomorrow, can't set it for today!")}
        }
        else if (arguments[0].match(/AQF/i)){
            var tempdate = new Date();
            tempdate.setHours(20)
            tempdate.setMinutes(00)
            tempdate.setSeconds(00)
            var now = new Date();
            var timer = tempdate - now
            if(timer > 0){
                setTimeout(openAQF, timer)
            }else{defaultoutput.send("Wait until tomorrow, can't set it for today!")}
        }
        else if (arguments[0].match(/AQT/i)){
            var tempdate = new Date();
            tempdate.setHours(20)
            tempdate.setMinutes(00)
            tempdate.setSeconds(00)
            var now = new Date();
            var timer = tempdate - now
            if(timer > 0){
                setTimeout(openAQT, timer)
            }else{defaultoutput.send("Wait until tomorrow, can't set it for today!")}
    }
}
}

    else if (primaryCommand == "raidsign") {
        if (arguments != undefined) {
            if (arguments[0].match(/mc/i)) {
                if (arguments[1].match(/on/i)) {
                    openMC();
                }
                else if (arguments[1].match(/off/i)) {
                    closeMC()
                }
                else {
                    defaultoutput.send("Something went wrong, check so the command was done right")
                }
            }
            else if (arguments[0].match(/ZG/i)) {
                if (arguments[1].match(/on/i)) {
                    openZG();
                }
                else if (arguments[1].match(/off/i)) {
                    closeZG();
                }
                else {
                    defaultoutput.send("Something went wrong, check so the command was done right")
                }
            } 
            else if (arguments[0].match(/BWL/i)) {
                if (arguments[1].match(/on/i)) {
                    openBWL();
                }
                else if (arguments[1].match(/off/i)) {
                    closeBWL()
                }
                else {
                    defaultoutput.send("Something went wrong, check so the command was done right")
                }
            }
            else if (arguments[0].match(/AQF/i)) {
                if (arguments[1].match(/on/i)) {
                    openAQF();
                }
                else if (arguments[1].match(/off/i)) {
                    closeAQF()
                }
                else {
                    defaultoutput.send("Something went wrong, check so the command was done right")
                }
            }
            else if (arguments[0].match(/AQT/i)) {
                if (arguments[1].match(/on/i)) {
                    openAQT();
                }
                else if (arguments[1].match(/off/i)) {
                    closeAQT()
                }
                else {
                    defaultoutput.send("Something went wrong, check so the command was done right")
                }
            }
        } else {
            defaultoutput.send("Gotta add some stuff to that command, ya kno")
        }
    }
    else if (primaryCommand == "giveaway"){
        var gaarguments = receivedMessage.content.replace(/\$giveaway\s?/i,"");
        if(gaarguments.length > 5 && gaarguments.match(/\d{1,2}\/\d{1,2}\-\d{2,4}\s\d{2}:\d{2}/i)){
            makeGiveaway(gaarguments)
        }else if(gaarguments.length < 2){
            defaultoutput.send("Checking for giveaways in #giveaway!")
            getGiveaways()}
            else{
                defaultoutput.send('You did something wrong, try again; $giveaway dd/mm-yy hh:mm item name')
            }
    }
    else if (primaryCommand == "help") {
        var helplist = ""
        Admincommandlist.forEach(commandindex => {
            helplist = helplist.concat(commandindex + "\n")
        })
        defaultoutput.send("This is a list of commands:" + "\n" + helplist)
    }
    else if (primaryCommand == "getraidposts") {
        getraidposts()
    }
    else if (primaryCommand == "addraid") {
        if (arguments[0] == undefined) {
            defaultoutput.send("Add some stuff after the command, dude")
        }
        else if (arguments[0].match(/mc/i)) {
            let raider = arguments[1]
            arguments.shift()
            arguments.shift()
            addMC(raider, arguments[0], arguments[1])
        }
        else if (arguments[0].match(/ZG/i)) {
            let raider = arguments[1]
            arguments.shift()
            arguments.shift()
            addZG(raider, arguments[0], arguments[1])
        } 
        else if (arguments[0].match(/BWL/i)) {
            let raider = arguments[1]
            arguments.shift()
            arguments.shift()
            addBWL(raider, arguments[0], arguments[1])
        }
        else if (arguments[0].match(/AQF/i)) {
            let raider = arguments[1]
            arguments.shift()
            arguments.shift()
            addAQF(raider, arguments[0], arguments[1])
        }
        else if (arguments[0].match(/AQT/i)) {
            let raider = arguments[1]
            arguments.shift()
            arguments.shift()
            addAQT(raider, arguments[0], arguments[1])
        }
        else {
            defaultoutput.send("You didn't define a raid correctly")
        }
    }

    else if (primaryCommand == "removeraid") {
        removeraid(arguments[0], arguments[1])
    }

    else if (primaryCommand == "newraid") {

        if (arguments[0] == undefined) {
            defaultoutput.send("Gotta tell me which raid!")
        }
        else if (arguments[0].match(/mc/i)) {
            setopentimer('MC')

            if (arguments[1].match(/mon|tue|wed|thu|fri|sat|sun/i)) {
                if (arguments[1].match(/mon/i)) {
                    MCWeekday = "Monday"
                    MCday = 1
                }
                else if (arguments[1].match(/tue/i)) {
                    MCWeekday = "Tuesday"
                    MCday = 2
                }
                else if (arguments[1].match(/wed/i)) {
                    MCWeekday = "Wednesday"
                    MCday = 3
                }
                else if (arguments[1].match(/thu/i)) {
                    MCWeekday = "Thursday"
                    MCday = 4
                }
                else if (arguments[1].match(/fri/i)) {
                    MCWeekday = "Friday"
                    MCday = 5
                }
                else if (arguments[1].match(/sat/i)) {
                    MCWeekday = "Saturday"
                    MCday = 6
                }
                else if (arguments[1].match(/sun/i)) {
                    MCWeekday = "Sunday"
                    MCday = 7
                }
                if (arguments[2].length > 0) {
                    MCTime = arguments[2]
                    MCmonth = nextDate(MCday).getUTCMonth()+1;
                    MCdate = nextDate(MCday).getUTCDate() + "/" + MCmonth;
                    defaultMClist()
                    MCraidsign = false
                    createraidpost("MC")

                } else { defaultoutput.send("Give me a time to set as well, for example 19.00") }

            } else { defaultoutput.send("You missed giving me a weekday") }
        }
        else if (arguments[0].match(/ZG/i)) {
            setopentimer('ZG')
            if (arguments[1].match(/mon|tue|wed|thu|fri|sat|sun/i)) {
                if (arguments[1].match(/mon/i)) {
                    ZGWeekday = "Monday"
                    ZGday = 1
                }
                else if (arguments[1].match(/tue/i)) {
                    ZGWeekday = "Tuesday"
                    ZGday = 2
                }
                else if (arguments[1].match(/wed/i)) {
                    ZGWeekday = "Wednesday"
                    ZGday = 3
                }
                else if (arguments[1].match(/thu/i)) {
                    ZGWeekday = "Thursday"
                    ZGday = 4
                }
                else if (arguments[1].match(/fri/i)) {
                    ZGWeekday = "Friday"
                    ZGday = 5
                }
                else if (arguments[1].match(/sat/i)) {
                    ZGWeekday = "Saturday"
                    ZGday = 6
                }
                else if (arguments[1].match(/sun/i)) {
                    ZGWeekday = "Sunday"
                    ZGday = 7
                }
                if (arguments[2].length > 0) {
                    ZGTime = arguments[2]
                    ZGmonth = nextDate(ZGday).getUTCMonth()+1;
                    ZGdate = nextDate(ZGday).getUTCDate() + "/" + ZGmonth
                    defaultZGlist()
                    ZGraidsign = false
                    createraidpost("ZG")

                } else { defaultoutput.send("Give me a time to set as well, for example 19.00") }

            } else { defaultoutput.send("You missed giving me a weekday") }
        }
        else if (arguments[0].match(/BWL/i)) {
            setopentimer('BWL')
            if (arguments[1].match(/mon|tue|wed|thu|fri|sat|sun/i)) {
                if (arguments[1].match(/mon/i)) {
                    BWLWeekday = "Monday"
                    BWLday = 1
                }
                else if (arguments[1].match(/tue/i)) {
                    BWLWeekday = "Tuesday"
                    BWLday = 2
                }
                else if (arguments[1].match(/wed/i)) {
                    BWLWeekday = "Wednesday"
                    BWLday = 3
                }
                else if (arguments[1].match(/thu/i)) {
                    BWLWeekday = "Thursday"
                    BWLday = 4
                }
                else if (arguments[1].match(/fri/i)) {
                    BWLWeekday = "Friday"
                    BWLday = 5
                }
                else if (arguments[1].match(/sat/i)) {
                    BWLWeekday = "Saturday"
                    BWLday = 6
                }
                else if (arguments[1].match(/sun/i)) {
                    BWLWeekday = "Sunday"
                    BWLday = 7
                }
                if (arguments[2].length > 0) {
                    BWLTime = arguments[2]
                    BWLmonth = nextDate(BWLday).getUTCMonth()+1;
                    BWLdate = nextDate(BWLday).getUTCDate() + "/" + BWLmonth
                    defaultBWLlist()
                    BWLraidsign = false
                    createraidpost("BWL")

                } else { defaultoutput.send("Give me a time to set as well, for example 19.00") }

            } else { defaultoutput.send("You missed giving me a weekday") }
        }
        else if (arguments[0].match(/AQF/i)) {
            setopentimer('AQF')
            if (arguments[1].match(/mon|tue|wed|thu|fri|sat|sun/i)) {
                if (arguments[1].match(/mon/i)) {
                    AQFWeekday = "Monday"
                    AQFday = 1
                }
                else if (arguments[1].match(/tue/i)) {
                    AQFWeekday = "Tuesday"
                    AQFday = 2
                }
                else if (arguments[1].match(/wed/i)) {
                    AQFWeekday = "Wednesday"
                    AQFday = 3
                }
                else if (arguments[1].match(/thu/i)) {
                    AQFWeekday = "Thursday"
                    AQFday = 4
                }
                else if (arguments[1].match(/fri/i)) {
                    AQFWeekday = "Friday"
                    AQFday = 5
                }
                else if (arguments[1].match(/sat/i)) {
                    AQFWeekday = "Saturday"
                    AQFday = 6
                }
                else if (arguments[1].match(/sun/i)) {
                    AQFWeekday = "Sunday"
                    AQFday = 7
                }
                if (arguments[2].length > 0) {
                    AQFTime = arguments[2]
                    AQFmonth = nextDate(AQFday).getUTCMonth()+1;
                    AQFdate = nextDate(AQFday).getUTCDate() + "/" + AQFmonth
                    defaultAQFlist()
                    AQFraidsign = false
                    createraidpost("AQF")

                } else { defaultoutput.send("Give me a time to set as well, for example 19.00") }

            } else { defaultoutput.send("You missed giving me a weekday") }
        }
        else if (arguments[0].match(/AQT/i)) {
            setopentimer('AQT')
            if (arguments[1].match(/mon|tue|wed|thu|fri|sat|sun/i)) {
                if (arguments[1].match(/mon/i)) {
                    AQTWeekday = "Monday"
                    AQTday = 1
                }
                else if (arguments[1].match(/tue/i)) {
                    AQTWeekday = "Tuesday"
                    AQTday = 2
                }
                else if (arguments[1].match(/wed/i)) {
                    AQTWeekday = "Wednesday"
                    AQTday = 3
                }
                else if (arguments[1].match(/thu/i)) {
                    AQTWeekday = "Thursday"
                    AQTday = 4
                }
                else if (arguments[1].match(/fri/i)) {
                    AQTWeekday = "Friday"
                    AQTday = 5
                }
                else if (arguments[1].match(/sat/i)) {
                    AQTWeekday = "Saturday"
                    AQTday = 6
                }
                else if (arguments[1].match(/sun/i)) {
                    AQTWeekday = "Sunday"
                    AQTday = 7
                }
                if (arguments[2].length > 0) {
                    AQTTime = arguments[2]
                    AQTmonth = nextDate(AQTday).getUTCMonth()+1;
                    AQTdate = nextDate(AQTday).getUTCDate() + "/" + AQTmonth
                    defaultAQTlist()
                    AQTraidsign = false
                    createraidpost("AQT")

                } else { defaultoutput.send("Give me a time to set as well, for example 19.00") }

            } else { defaultoutput.send("You missed giving me a weekday") }
        }
        else {
            defaultoutput.send("Raid isn't defined correctly, try again")
        }
    }

    else if (primaryCommand == "updateday") {
        if (arguments[0] == undefined) {
            defaultoutput.send("Gotta tell me more!")
        }
        else if (arguments[0].match(/mc/i)) {
            if (arguments[1].match(/\d{1,2}\/\d{1,2}/) && arguments[2].match(/\d{1,2}\.\d{1,2}/)) {

                    let MCtempdate = new Date()
                    let temp = arguments[1]
                    console.log("MC: " + temp)
                    let MCtempday = temp.toString().replace(/\/\d{1,2}/,"")
                    let MCtempmonth = temp.toString().replace(/\d{1,2}\//,"")
                    MCtempmonth = MCtempmonth-1
                    MCtempdate.setDate(MCtempday)
                    MCtempdate.setMonth(MCtempmonth)
                    MCmonth = MCtempdate.getUTCMonth()+1
                    MCdate = MCtempdate.getUTCDate() + "/" + MCmonth
                    MCTime = arguments[2]
                    MCWeekday = arguments[3]

                    createraidpost("MC")

            } else { defaultoutput.send("You fucked something up, try $updateday <raidname> dd/mm hh.mm <weekdayname>") }
        }
        else if (arguments[0].match(/ZG/i)) {
            if (arguments[1].match(/\d{1,2}\/\d{1,2}/) && arguments[2].match(/\d{1,2}\.\d{1,2}/)) {

                let ZGtempdate = new Date()
                let temp = arguments[1]
                console.log("ZG: " + temp)
                let ZGtempday = temp.toString().replace(/\/\d{1,2}/,"")
                let ZGtempmonth = temp.toString().replace(/\d{1,2}\//,"")
                ZGtempmonth = ZGtempmonth-1
                ZGtempdate.setDate(ZGtempday)
                ZGtempdate.setMonth(ZGtempmonth)
                ZGmonth = ZGtempdate.getUTCMonth()+1
                ZGdate = ZGtempdate.getUTCDate() + "/" + ZGmonth
                ZGTime = arguments[2]
                ZGWeekday = arguments[3]

                createraidpost("ZG")

        } else { defaultoutput.send("You fucked something up, try $updateday <raidname> dd/mm hh.mm <weekdayname>") }
        }
        else if (arguments[0].match(/BWL/i)) {
            if (arguments[1].match(/\d{1,2}\/\d{1,2}/) && arguments[2].match(/\d{1,2}\.\d{1,2}/)) {

                let BWLtempdate = new Date()
                let temp = arguments[1]
                console.log("BWL: " + temp)
                let BWLtempday = temp.toString().replace(/\/\d{1,2}/,"")
                let BWLtempmonth = temp.toString().replace(/\d{1,2}\//,"")
                BWLtempmonth = BWLtempmonth-1
                BWLtempdate.setDate(BWLtempday)
                BWLtempdate.setMonth(BWLtempmonth)
                BWLmonth = BWLtempdate.getUTCMonth()+1
                BWLdate = BWLtempdate.getUTCDate() + "/" + BWLmonth
                BWLTime = arguments[2]
                BWLWeekday = arguments[3]

                createraidpost("BWL")

        } else { defaultoutput.send("You fucked something up, try $updateday <raidname> dd/mm hh.mm <weekdayname>") }
        }
        else if (arguments[0].match(/AQF/i)) {
            if (arguments[1].match(/\d{1,2}\/\d{1,2}/) && arguments[2].match(/\d{1,2}\.\d{1,2}/)) {

                let AQFtempdate = new Date()
                let temp = arguments[1]
                console.log("AQF: " + temp)
                let AQFtempday = temp.toString().replace(/\/\d{1,2}/,"")
                let AQFtempmonth = temp.toString().replace(/\d{1,2}\//,"")
                AQFtempmonth = AQFtempmonth-1
                AQFtempdate.setDate(AQFtempday)
                AQFtempdate.setMonth(AQFtempmonth)
                AQFmonth = AQFtempdate.getUTCMonth()+1
                AQFdate = AQFtempdate.getUTCDate() + "/" + AQFmonth
                AQFTime = arguments[2]
                AQFWeekday = arguments[3]

                createraidpost("AQF")

        } else { defaultoutput.send("You fucked something up, try $updateday <raidname> dd/mm hh.mm <weekdayname>") }
        }
        else if (arguments[0].match(/AQT/i)) {
            if (arguments[1].match(/\d{1,2}\/\d{1,2}/) && arguments[2].match(/\d{1,2}\.\d{1,2}/)) {

                let AQTtempdate = new Date()
                let temp = arguments[1]
                console.log("AQT: " + temp)
                let AQTtempday = temp.toString().replace(/\/\d{1,2}/,"")
                let AQTtempmonth = temp.toString().replace(/\d{1,2}\//,"")
                AQTtempmonth = AQTtempmonth-1
                AQTtempdate.setDate(AQTtempday)
                AQTtempdate.setMonth(AQTtempmonth)
                AQTmonth = AQTtempdate.getUTCMonth()+1
                AQTdate = AQTtempdate.getUTCDate() + "/" + AQTmonth
                AQTTime = arguments[2]
                AQTWeekday = arguments[3]

                createraidpost("AQT")

        } else { defaultoutput.send("You fucked something up, try $updateday <raidname> dd/mm hh.mm <weekdayname>") }
        }
        else {
            defaultoutput.send("Raid isn't defined correctly, try again")
        }
    }
    else if (primaryCommand == "updateraid") {
        createraidpost("MC")
        createraidpost("ZG") 
        createraidpost("BWL")
        createraidpost("AQF")
        createraidpost("AQT")
    }
    else if (primaryCommand == "repopulateraid") {
        populateraidlists()
    }
    else {
        defaultoutput.send("I haven't learned that command yet! Teach me!")
    }

}

function processMemberCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)


    if (primaryCommand == "help") {
        var helplist = ""
        Membercommandlist.forEach(commandindex => {
            helplist = helplist.concat(commandindex + "\n")
        })
        defaultoutput.send("This is a list of commands:" + "\n" + helplist)
    }else if (primaryCommand == "giveaway"){
        var gaarguments = receivedMessage.content.replace(/\$giveaway\s?/i,"");
        if(gaarguments.length > 5 && gaarguments.match(/\d{1,2}\/\d{1,2}\-\d{2,4}\s\d{2}:\d{2}/i)){
            makeGiveaway(gaarguments)
        }else if(gaarguments.length < 2){
            defaultoutput.send("Checking for giveaways in #giveaway!")
            getGiveaways()}
            else{
                defaultoutput.send('You did something wrong, try again; $giveaway dd/mm-yy hh:mm item name')
            }
    }
    else {
        defaultoutput.send("I haven't learned that command, or you're not allowed to use it :(")
    }

}


function botlog(message1, message2) {
        bot.guilds.cache.find(g => g.name == "Hellscream").channels.cache.forEach((channel) => {
            if (channel.name == "bot-chat") {
                let temp = channel.id
                let botspam = bot.channels.cache.get(temp)
                botspam.send(message1)
                if(message2) botspam.send(message2)
            }
    })
}

async function createraidpost(raidn) {
    if (raidn.match(/MC/i)) {
        await fixMClists().then(populateMCpost())
    }
    else if (raidn.match(/ZG/i)) {
        ZGnumbers();
        await fixZGlists().then(populateZGpost())
    }
    else if (raidn.match(/BWL/i)) {
        bwlnumbers();
        await fixBWLlists().then(populateBWLpost())
    }
    else if (raidn.match(/AQF/i)) {
        AQFnumbers();
        await fixAQFlists().then(populateAQFpost())
    }
    else if (raidn.match(/AQT/i)) {
        AQTnumbers();
        await fixAQTlists().then(populateAQTpost())
    }
    else {
        defaultoutput.send("You never told me a correct raid to work with")
    }
}

function populateMCpost() {
    MCmaxtank = 4
    MCmaxhealer = 8
    MCmaxmelee = 12
    MCmaxranged = 16
    let tankmessage = ""
    let healermessage = ""
    let meleemessage = ""
    let rangedmessage = ""



    MCtanklist.forEach((tank, index) => {
        if (index == MCmaxtank) {
        tankmessage = tankmessage + "\n" + "__Backup__ \n" + tank + "\n"
    }
    else if (index != MCmaxtank) {
        tankmessage = tankmessage + tank + "\n"
    }
    })
    MChealerlist.forEach((healer, index) => {
        if (index == MCmaxhealer) {
            healermessage = healermessage + "\n" + "__Backup__ \n" + healer + "\n"
        }
        else if (index != MCmaxhealer) {
            healermessage = healermessage + healer + "\n"
        }
    })
    MCmeleelist.forEach((melee, index) => {
        if (index == MCmaxmelee) {
            meleemessage = meleemessage + "\n" + "__Backup__ \n" + melee + "\n"
        }
        else if (index != MCmaxmelee) {
            meleemessage = meleemessage + melee + "\n"
        }
    })
    MCrangedlist.forEach((ranged, index) => {
        if (index == MCmaxranged) {
            rangedmessage = rangedmessage + "\n" + "__Backup__ \n" + ranged + "\n"
        }
        else if (index != MCmaxranged) {
            rangedmessage = rangedmessage + ranged + "\n"
        }
    })
    
    var amounttanks
    var amounthealers
    var amountmelees
    var amountranged
    if (MCtanklist[0] == "") {
        amounttanks = 0
    }
    else {
        amounttanks = MCtanklist.length
    }
    if (MChealerlist[0] == "") {
        amounthealers = 0
    }
    else {
        amounthealers = MChealerlist.length
    }
    if (MCmeleelist[0] == "") {
        amountmelees = 0
    }
    else {
        amountmelees = MCmeleelist.length
    }
    if (MCrangedlist[0] == "") {
        amountranged = 0
    }
    else {
        amountranged = MCrangedlist.length
    }
    defaultraidmessage("MC")
    var totalsigns = amounttanks+amounthealers+amountmelees+amountranged
        MCPost.edit(raidinitmessage + "\n" + "**Please be present 15 minutes before raid time for invites**\n" +
        "To sign up, find your icon for your class **and** spec, and just click it below!" +
        "\nRemember that we will do Onyxia as well for these raidnights and keep in mind we're not sure exactly how long BWL takes, so please have some patience with that, ***and be present by MC entrance by 20.30***" +
        "\nTotal members signed right now: " + totalsigns +
        "\n" + "\n" + "\n" +
        "**Tanks " + "(" + amounttanks + "/" + MCmaxtank + ")**" + "\n" + tankmessage + "\n" +
        "**Healers " + "(" + amounthealers + "/" + MCmaxhealer + ")**" + "\n" + healermessage + "\n" +
        "**Melee DPS " + "(" + amountmelees + "/" + MCmaxmelee + ")**" + "\n" + meleemessage + "\n" +
        "**Ranged DPS " + "(" + amountranged + "/" + MCmaxranged + ")**" + "\n" + rangedmessage + "\n")

}


async function ZGnumbers() {
    if (ZGProtWarlist[0] == "") ZGProtWars = 0; else ZGProtWars = ZGProtWarlist.length;
    if (ZGBearlist[0] == "") ZGBears = 0; else ZGBears = ZGBearlist.length;
    if (ZGRestoDruidlist[0] == "") ZGRestoDruids = 0; else ZGRestoDruids = ZGRestoDruidlist.length;
    if (ZGHPriestlist[0] == "") ZGHPriests = 0; else ZGHPriests = ZGHPriestlist.length;
    if (ZGRestoShamanlist[0] == "") ZGRestoShamans = 0; else ZGRestoShamans = ZGRestoShamanlist.length;
    if (ZGBalanceDruidlist[0] == "") ZGBalances = 0; else ZGBalances = ZGBalanceDruidlist.length;
    if (ZGFeralDruidlist[0] == "") ZGFerals = 0; else ZGFerals = ZGFeralDruidlist.length;
    if (ZGHunterlist[0] == "") ZGHunters = 0; else ZGHunters = ZGHunterlist.length;
    if (ZGMagelist[0] == "") ZGMages = 0; else ZGMages = ZGMagelist.length;
    if (ZGRoguelist[0] == "") ZGRogues = 0; else ZGRogues = ZGRoguelist.length;
    if (ZGSPriestlist[0] == "") ZGSPriests = 0; else ZGSPriests = ZGSPriestlist.length;
    if (ZGEleShamanlist[0] == "") ZGEleShamans = 0; else ZGEleShamans = ZGEleShamanlist.length;
    if (ZGEnhShamanlist[0] == "") ZGEnhShamans = 0; else ZGEnhShamans = ZGEnhShamanlist.length;
    if (ZGDPSWarlist[0] == "") ZGDPSWars = 0; else ZGDPSWars = ZGDPSWarlist.length;
    if (ZGWarlocklist[0] == "") ZGWarlocks = 0; else ZGWarlocks = ZGWarlocklist.length;
    }
    
    async function populateZGpost() {
    
        let protwarmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior").toString() + " **Tank Warriors** ("+ ZGProtWars + ")" + "\n"
        let bearmessage = ZGPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid").toString() + " **Tank Druids** ("+ ZGBears + ")" + "\n"
        let restodruidmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid").toString() + " **Healer Druids** ("+ ZGRestoDruids + ")" + "\n"
        let hpriestmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest").toString() + " **Healer Priests** ("+ ZGHPriests + ")" + "\n"
        let restoshamanmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman").toString() + " **Healer Shamans** ("+ ZGRestoShamans+ ")" + "\n"
        let balancemessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid").toString() + " **Balance Druids** ("+ ZGBalances + ")" + "\n"
        let feralmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid").toString() + " **Feral Druids** ("+ ZGFerals + ")" + "\n"
        let huntermessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter").toString() + " **Hunters** ("+ ZGHunters + ")" + "\n"
        let magemessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Mage").toString() + " **Mages** ("+ ZGMages + ")" + "\n"
        let roguemessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue").toString() + " **Rogues** ("+ ZGRogues + ")" + "\n"
        let spriestmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest").toString() + " **Shadow Priests** ("+ ZGSPriests + ")" + "\n"
        let elemessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman").toString() + " **Elemental Shamans** ("+ ZGEleShamans + ")" + "\n"
        let enhmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman").toString() + " **Enhancement Shamans** ("+ ZGEnhShamans + ")" + "\n"
        let dpswarmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior").toString() + " **DPS Warriors** ("+ ZGDPSWars + ")" + "\n"
        let warlockmessage = "\n \n" + ZGPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock").toString() + " **Warlocks** ("+ ZGWarlocks + ")" + "\n"
    
    
    ZGProtWarlist.forEach((user) => {
            protwarmessage = protwarmessage + user + " \n"
    })
    
    ZGBearlist.forEach((user) => {
            bearmessage = bearmessage + user + " \n"
    })
    
    ZGRestoDruidlist.forEach((user) => {
        restodruidmessage = restodruidmessage + user + " \n"
    })
    
    ZGHPriestlist.forEach((user) => {
        hpriestmessage = hpriestmessage + user + " \n"
    })
    
    ZGRestoShamanlist.forEach((user) => {
        restoshamanmessage = restoshamanmessage + user + " \n"
    })
    
    ZGBalanceDruidlist.forEach((user) => {
        balancemessage = balancemessage + user + " \n"
    })
    
    ZGFeralDruidlist.forEach((user) => {
        feralmessage = feralmessage + user + " \n"
    })
    
    ZGHunterlist.forEach((user) => {
        huntermessage = huntermessage + user + " \n"
    })
    
    ZGMagelist.forEach((user) => {
        magemessage = magemessage + user + " \n"
    })
    
    ZGRoguelist.forEach((user) => {
        roguemessage = roguemessage + user + " \n"
    })
    
    ZGSPriestlist.forEach((user) => {
        spriestmessage = spriestmessage + user + " \n"
    })
    
    ZGEleShamanlist.forEach((user) => {
        elemessage = elemessage + user + " \n"
    })
    
    ZGEnhShamanlist.forEach((user) => {
        enhmessage = enhmessage + user + " \n"
    })
    
    ZGDPSWarlist.forEach((user) => {
        dpswarmessage = dpswarmessage + user + " \n"
    })
    
    ZGWarlocklist.forEach((user) => {
        warlockmessage = warlockmessage + user + " \n"
    })
    
    
    var totallistlength = ZGProtWars+ZGBears+ZGRestoDruids+ZGHPriests+ZGRestoShamans+ZGBalances+ZGFerals+ZGHunters+ZGMages+ZGRogues+ZGSPriests+ZGEleShamans+ZGEnhShamans+ZGDPSWars+ZGWarlocks;
    var tanktemp = ZGProtWars+ZGBears
    var healertemp = ZGRestoDruids+ZGHPriests+ZGRestoShamans
    var dpstemp = ZGBalances+ZGFerals+ZGHunters+ZGMages+ZGRogues+ZGSPriests+ZGEleShamans+ZGEnhShamans+ZGDPSWars+ZGWarlocks
    defaultraidmessage("ZG")
    var sendmessagetemp = raidinitmessage + "\n" + "**Please be present 15 minutes before raid time for invites**\n" +
    "To sign up, find your icon for your class **and** spec, and just click it below!\n \n" + 
    "Total members signed right now: " + totallistlength +
    "\n\n" + "__Currently signed roles__" +
    "\n" + "Tanks: " + tanktemp +
    "\n" + "Healers: " + healertemp +
    "\n" + "DPS: " + dpstemp +
    "\n" + "\n" + "\n" +
    bearmessage + protwarmessage + restodruidmessage + hpriestmessage + restoshamanmessage + balancemessage + feralmessage + huntermessage + magemessage + roguemessage + spriestmessage + elemessage + enhmessage + dpswarmessage + warlockmessage + "\n ."
    var sendmessage = sendmessagetemp.replace(/ {2,1000}/g," ")

        ZGPost.edit(sendmessage)


}

async function bwlnumbers() {
if (BWLProtWarlist[0] == "") BWLProtWars = 0; else BWLProtWars = BWLProtWarlist.length;
if (BWLBearlist[0] == "") BWLBears = 0; else BWLBears = BWLBearlist.length;
if (BWLRestoDruidlist[0] == "") BWLRestoDruids = 0; else BWLRestoDruids = BWLRestoDruidlist.length;
if (BWLHPriestlist[0] == "") BWLHPriests = 0; else BWLHPriests = BWLHPriestlist.length;
if (BWLRestoShamanlist[0] == "") BWLRestoShamans = 0; else BWLRestoShamans = BWLRestoShamanlist.length;
if (BWLBalanceDruidlist[0] == "") BWLBalances = 0; else BWLBalances = BWLBalanceDruidlist.length;
if (BWLFeralDruidlist[0] == "") BWLFerals = 0; else BWLFerals = BWLFeralDruidlist.length;
if (BWLHunterlist[0] == "") BWLHunters = 0; else BWLHunters = BWLHunterlist.length;
if (BWLMagelist[0] == "") BWLMages = 0; else BWLMages = BWLMagelist.length;
if (BWLRoguelist[0] == "") BWLRogues = 0; else BWLRogues = BWLRoguelist.length;
if (BWLSPriestlist[0] == "") BWLSPriests = 0; else BWLSPriests = BWLSPriestlist.length;
if (BWLEleShamanlist[0] == "") BWLEleShamans = 0; else BWLEleShamans = BWLEleShamanlist.length;
if (BWLEnhShamanlist[0] == "") BWLEnhShamans = 0; else BWLEnhShamans = BWLEnhShamanlist.length;
if (BWLDPSWarlist[0] == "") BWLDPSWars = 0; else BWLDPSWars = BWLDPSWarlist.length;
if (BWLWarlocklist[0] == "") BWLWarlocks = 0; else BWLWarlocks = BWLWarlocklist.length;
}

async function populateBWLpost() {

    let protwarmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior").toString() + " **Tank Warriors** ("+ BWLProtWars + ")" + "\n"
    let bearmessage = BWLPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid").toString() + " **Tank Druids** ("+ BWLBears + ")" + "\n"
    let restodruidmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid").toString() + " **Healer Druids** ("+ BWLRestoDruids + ")" + "\n"
    let hpriestmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest").toString() + " **Healer Priests** ("+ BWLHPriests + ")" + "\n"
    let restoshamanmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman").toString() + " **Healer Shamans** ("+ BWLRestoShamans+ ")" + "\n"
    let balancemessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid").toString() + " **Balance Druids** ("+ BWLBalances + ")" + "\n"
    let feralmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid").toString() + " **Feral Druids** ("+ BWLFerals + ")" + "\n"
    let huntermessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter").toString() + " **Hunters** ("+ BWLHunters + ")" + "\n"
    let magemessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Mage").toString() + " **Mages** ("+ BWLMages + ")" + "\n"
    let roguemessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue").toString() + " **Rogues** ("+ BWLRogues + ")" + "\n"
    let spriestmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest").toString() + " **Shadow Priests** ("+ BWLSPriests + ")" + "\n"
    let elemessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman").toString() + " **Elemental Shamans** ("+ BWLEleShamans + ")" + "\n"
    let enhmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman").toString() + " **Enhancement Shamans** ("+ BWLEnhShamans + ")" + "\n"
    let dpswarmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior").toString() + " **DPS Warriors** ("+ BWLDPSWars + ")" + "\n"
    let warlockmessage = "\n \n" + BWLPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock").toString() + " **Warlocks** ("+ BWLWarlocks + ")" + "\n"


BWLProtWarlist.forEach((user) => {
        protwarmessage = protwarmessage + user + " \n"
})

BWLBearlist.forEach((user) => {
        bearmessage = bearmessage + user + " \n"
})

BWLRestoDruidlist.forEach((user) => {
    restodruidmessage = restodruidmessage + user + " \n"
})

BWLHPriestlist.forEach((user) => {
    hpriestmessage = hpriestmessage + user + " \n"
})

BWLRestoShamanlist.forEach((user) => {
    restoshamanmessage = restoshamanmessage + user + " \n"
})

BWLBalanceDruidlist.forEach((user) => {
    balancemessage = balancemessage + user + " \n"
})

BWLFeralDruidlist.forEach((user) => {
    feralmessage = feralmessage + user + " \n"
})

BWLHunterlist.forEach((user) => {
    huntermessage = huntermessage + user + " \n"
})

BWLMagelist.forEach((user) => {
    magemessage = magemessage + user + " \n"
})

BWLRoguelist.forEach((user) => {
    roguemessage = roguemessage + user + " \n"
})

BWLSPriestlist.forEach((user) => {
    spriestmessage = spriestmessage + user + " \n"
})

BWLEleShamanlist.forEach((user) => {
    elemessage = elemessage + user + " \n"
})

BWLEnhShamanlist.forEach((user) => {
    enhmessage = enhmessage + user + " \n"
})

BWLDPSWarlist.forEach((user) => {
    dpswarmessage = dpswarmessage + user + " \n"
})

BWLWarlocklist.forEach((user) => {
    warlockmessage = warlockmessage + user + " \n"
})


var totallistlength = BWLProtWars+BWLBears+BWLRestoDruids+BWLHPriests+BWLRestoShamans+BWLBalances+BWLFerals+BWLHunters+BWLMages+BWLRogues+BWLSPriests+BWLEleShamans+BWLEnhShamans+BWLDPSWars+BWLWarlocks;
var tanktemp = BWLProtWars+BWLBears
var healertemp = BWLRestoDruids+BWLHPriests+BWLRestoShamans
var dpstemp = BWLBalances+BWLFerals+BWLHunters+BWLMages+BWLRogues+BWLSPriests+BWLEleShamans+BWLEnhShamans+BWLDPSWars+BWLWarlocks
    defaultraidmessage("BWL")

    var sendmessagetemp = raidinitmessage + "\n" + "**Please be present 15 minutes before raid time for invites**\n" +
    "To sign up, find your icon for your class **and** spec, and just click it below!" +
    "\n \n" + 
    "Total members signed right now: " + totallistlength +
    "\n" + "\n" +
    "__Total signed per role__" +
    "\n" + "Tanks: " + tanktemp +
    "\n" + "Healers: " + healertemp +
    "\n" + "DPS: " + dpstemp +
    "\n" + "\n" + "\n" +
    bearmessage + protwarmessage + restodruidmessage + hpriestmessage + restoshamanmessage + balancemessage + feralmessage + huntermessage + magemessage + roguemessage + spriestmessage + elemessage + enhmessage + dpswarmessage + warlockmessage + "\n ."
    var sendmessage = sendmessagetemp.replace(/ {2,1000}/g," ")
    BWLPost.edit(sendmessage)
    console.log(BWLTime)
}


async function AQFnumbers() {
    if (AQFProtWarlist[0] == "") AQFProtWars = 0; else AQFProtWars = AQFProtWarlist.length;
    if (AQFBearlist[0] == "") AQFBears = 0; else AQFBears = AQFBearlist.length;
    if (AQFRestoDruidlist[0] == "") AQFRestoDruids = 0; else AQFRestoDruids = AQFRestoDruidlist.length;
    if (AQFHPriestlist[0] == "") AQFHPriests = 0; else AQFHPriests = AQFHPriestlist.length;
    if (AQFRestoShamanlist[0] == "") AQFRestoShamans = 0; else AQFRestoShamans = AQFRestoShamanlist.length;
    if (AQFBalanceDruidlist[0] == "") AQFBalances = 0; else AQFBalances = AQFBalanceDruidlist.length;
    if (AQFFeralDruidlist[0] == "") AQFFerals = 0; else AQFFerals = AQFFeralDruidlist.length;
    if (AQFHunterlist[0] == "") AQFHunters = 0; else AQFHunters = AQFHunterlist.length;
    if (AQFMagelist[0] == "") AQFMages = 0; else AQFMages = AQFMagelist.length;
    if (AQFRoguelist[0] == "") AQFRogues = 0; else AQFRogues = AQFRoguelist.length;
    if (AQFSPriestlist[0] == "") AQFSPriests = 0; else AQFSPriests = AQFSPriestlist.length;
    if (AQFEleShamanlist[0] == "") AQFEleShamans = 0; else AQFEleShamans = AQFEleShamanlist.length;
    if (AQFEnhShamanlist[0] == "") AQFEnhShamans = 0; else AQFEnhShamans = AQFEnhShamanlist.length;
    if (AQFDPSWarlist[0] == "") AQFDPSWars = 0; else AQFDPSWars = AQFDPSWarlist.length;
    if (AQFWarlocklist[0] == "") AQFWarlocks = 0; else AQFWarlocks = AQFWarlocklist.length;
    }


    async function AQTnumbers() {
        if (AQTProtWarlist[0] == "") AQTProtWars = 0; else AQTProtWars = AQTProtWarlist.length;
        if (AQTBearlist[0] == "") AQTBears = 0; else AQTBears = AQTBearlist.length;
        if (AQTRestoDruidlist[0] == "") AQTRestoDruids = 0; else AQTRestoDruids = AQTRestoDruidlist.length;
        if (AQTHPriestlist[0] == "") AQTHPriests = 0; else AQTHPriests = AQTHPriestlist.length;
        if (AQTRestoShamanlist[0] == "") AQTRestoShamans = 0; else AQTRestoShamans = AQTRestoShamanlist.length;
        if (AQTBalanceDruidlist[0] == "") AQTBalances = 0; else AQTBalances = AQTBalanceDruidlist.length;
        if (AQTFeralDruidlist[0] == "") AQTFerals = 0; else AQTFerals = AQTFeralDruidlist.length;
        if (AQTHunterlist[0] == "") AQTHunters = 0; else AQTHunters = AQTHunterlist.length;
        if (AQTMagelist[0] == "") AQTMages = 0; else AQTMages = AQTMagelist.length;
        if (AQTRoguelist[0] == "") AQTRogues = 0; else AQTRogues = AQTRoguelist.length;
        if (AQTSPriestlist[0] == "") AQTSPriests = 0; else AQTSPriests = AQTSPriestlist.length;
        if (AQTEleShamanlist[0] == "") AQTEleShamans = 0; else AQTEleShamans = AQTEleShamanlist.length;
        if (AQTEnhShamanlist[0] == "") AQTEnhShamans = 0; else AQTEnhShamans = AQTEnhShamanlist.length;
        if (AQTDPSWarlist[0] == "") AQTDPSWars = 0; else AQTDPSWars = AQTDPSWarlist.length;
        if (AQTWarlocklist[0] == "") AQTWarlocks = 0; else AQTWarlocks = AQTWarlocklist.length;
        }
    
        async function populateAQFpost() {
        
            let protwarmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior").toString() + " **Tank Warriors** ("+ AQFProtWars + ")" + "\n"
            let bearmessage = AQFPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid").toString() + " **Tank Druids** ("+ AQFBears + ")" + "\n"
            let restodruidmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid").toString() + " **Healer Druids** ("+ AQFRestoDruids + ")" + "\n"
            let hpriestmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest").toString() + " **Healer Priests** ("+ AQFHPriests + ")" + "\n"
            let restoshamanmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman").toString() + " **Healer Shamans** ("+ AQFRestoShamans+ ")" + "\n"
            let balancemessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid").toString() + " **Balance Druids** ("+ AQFBalances + ")" + "\n"
            let feralmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid").toString() + " **Feral Druids** ("+ AQFFerals + ")" + "\n"
            let huntermessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter").toString() + " **Hunters** ("+ AQFHunters + ")" + "\n"
            let magemessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Mage").toString() + " **Mages** ("+ AQFMages + ")" + "\n"
            let roguemessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue").toString() + " **Rogues** ("+ AQFRogues + ")" + "\n"
            let spriestmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest").toString() + " **Shadow Priests** ("+ AQFSPriests + ")" + "\n"
            let elemessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman").toString() + " **Elemental Shamans** ("+ AQFEleShamans + ")" + "\n"
            let enhmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman").toString() + " **Enhancement Shamans** ("+ AQFEnhShamans + ")" + "\n"
            let dpswarmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior").toString() + " **DPS Warriors** ("+ AQFDPSWars + ")" + "\n"
            let warlockmessage = "\n \n" + AQFPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock").toString() + " **Warlocks** ("+ AQFWarlocks + ")" + "\n"
        
        
        AQFProtWarlist.forEach((user) => {
                protwarmessage = protwarmessage + user + " \n"
        })
        
        AQFBearlist.forEach((user) => {
                bearmessage = bearmessage + user + " \n"
        })
        
        AQFRestoDruidlist.forEach((user) => {
            restodruidmessage = restodruidmessage + user + " \n"
        })
        
        AQFHPriestlist.forEach((user) => {
            hpriestmessage = hpriestmessage + user + " \n"
        })
        
        AQFRestoShamanlist.forEach((user) => {
            restoshamanmessage = restoshamanmessage + user + " \n"
        })
        
        AQFBalanceDruidlist.forEach((user) => {
            balancemessage = balancemessage + user + " \n"
        })
        
        AQFFeralDruidlist.forEach((user) => {
            feralmessage = feralmessage + user + " \n"
        })
        
        AQFHunterlist.forEach((user) => {
            huntermessage = huntermessage + user + " \n"
        })
        
        AQFMagelist.forEach((user) => {
            magemessage = magemessage + user + " \n"
        })
        
        AQFRoguelist.forEach((user) => {
            roguemessage = roguemessage + user + " \n"
        })
        
        AQFSPriestlist.forEach((user) => {
            spriestmessage = spriestmessage + user + " \n"
        })
        
        AQFEleShamanlist.forEach((user) => {
            elemessage = elemessage + user + " \n"
        })
        
        AQFEnhShamanlist.forEach((user) => {
            enhmessage = enhmessage + user + " \n"
        })
        
        AQFDPSWarlist.forEach((user) => {
            dpswarmessage = dpswarmessage + user + " \n"
        })
        
        AQFWarlocklist.forEach((user) => {
            warlockmessage = warlockmessage + user + " \n"
        })
        
        
        var totallistlength = AQFProtWars+AQFBears+AQFRestoDruids+AQFHPriests+AQFRestoShamans+AQFBalances+AQFFerals+AQFHunters+AQFMages+AQFRogues+AQFSPriests+AQFEleShamans+AQFEnhShamans+AQFDPSWars+AQFWarlocks;
        var tanktemp = AQFProtWars+AQFBears
        var healertemp = AQFRestoDruids+AQFHPriests+AQFRestoShamans
        var dpstemp = AQFBalances+AQFFerals+AQFHunters+AQFMages+AQFRogues+AQFSPriests+AQFEleShamans+AQFEnhShamans+AQFDPSWars+AQFWarlocks
        
            defaultraidmessage("AQF")
        
            var sendmessagetemp = raidinitmessage + "\n" + "**Please be present 15 minutes before raid time for invites**\n" +
            "To sign up, find your icon for your class **and** spec, and just click it below!" +
            "\n \n" + 
            "Total members signed right now: " + totallistlength +
            "\n" + "\n" +
            "__Total signed per role__" +
            "\n" + "Tanks: " + tanktemp +
            "\n" + "Healers: " + healertemp +
            "\n" + "DPS: " + dpstemp +
            "\n" + "\n" + "\n" +
            bearmessage + protwarmessage + restodruidmessage + hpriestmessage + restoshamanmessage + balancemessage + feralmessage + huntermessage + magemessage + roguemessage + spriestmessage + elemessage + enhmessage + dpswarmessage + warlockmessage + "\n ."
            var sendmessage = sendmessagetemp.replace(/ {2,1000}/g," ")
            AQFPost.edit(sendmessage)
            console.log(AQFTime)
        }
    
        async function populateAQTpost() {
        
            let protwarmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "ProtWarrior").toString() + " **Tank Warriors** ("+ AQTProtWars + ")" + "\n"
            let bearmessage = AQTPost.guild.emojis.cache.find(emoji => emoji.name == "BearDruid").toString() + " **Tank Druids** ("+ AQTBears + ")" + "\n"
            let restodruidmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "RestoDruid").toString() + " **Healer Druids** ("+ AQTRestoDruids + ")" + "\n"
            let hpriestmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "HPriest").toString() + " **Healer Priests** ("+ AQTHPriests + ")" + "\n"
            let restoshamanmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "RestoShaman").toString() + " **Healer Shamans** ("+ AQTRestoShamans+ ")" + "\n"
            let balancemessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "BalanceDruid").toString() + " **Balance Druids** ("+ AQTBalances + ")" + "\n"
            let feralmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "KittyDruid").toString() + " **Feral Druids** ("+ AQTFerals + ")" + "\n"
            let huntermessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Hunter").toString() + " **Hunters** ("+ AQTHunters + ")" + "\n"
            let magemessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Mage").toString() + " **Mages** ("+ AQTMages + ")" + "\n"
            let roguemessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Rogue").toString() + " **Rogues** ("+ AQTRogues + ")" + "\n"
            let spriestmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "SPriest").toString() + " **Shadow Priests** ("+ AQTSPriests + ")" + "\n"
            let elemessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "EleShaman").toString() + " **Elemental Shamans** ("+ AQTEleShamans + ")" + "\n"
            let enhmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "EnhShaman").toString() + " **Enhancement Shamans** ("+ AQTEnhShamans + ")" + "\n"
            let dpswarmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "DPSWarrior").toString() + " **DPS Warriors** ("+ AQTDPSWars + ")" + "\n"
            let warlockmessage = "\n \n" + AQTPost.guild.emojis.cache.find(emoji => emoji.name == "Warlock").toString() + " **Warlocks** ("+ AQTWarlocks + ")" + "\n"
        
        
        AQTProtWarlist.forEach((user) => {
                protwarmessage = protwarmessage + user + " \n"
        })
        
        AQTBearlist.forEach((user) => {
                bearmessage = bearmessage + user + " \n"
        })
        
        AQTRestoDruidlist.forEach((user) => {
            restodruidmessage = restodruidmessage + user + " \n"
        })
        
        AQTHPriestlist.forEach((user) => {
            hpriestmessage = hpriestmessage + user + " \n"
        })
        
        AQTRestoShamanlist.forEach((user) => {
            restoshamanmessage = restoshamanmessage + user + " \n"
        })
        
        AQTBalanceDruidlist.forEach((user) => {
            balancemessage = balancemessage + user + " \n"
        })
        
        AQTFeralDruidlist.forEach((user) => {
            feralmessage = feralmessage + user + " \n"
        })
        
        AQTHunterlist.forEach((user) => {
            huntermessage = huntermessage + user + " \n"
        })
        
        AQTMagelist.forEach((user) => {
            magemessage = magemessage + user + " \n"
        })
        
        AQTRoguelist.forEach((user) => {
            roguemessage = roguemessage + user + " \n"
        })
        
        AQTSPriestlist.forEach((user) => {
            spriestmessage = spriestmessage + user + " \n"
        })
        
        AQTEleShamanlist.forEach((user) => {
            elemessage = elemessage + user + " \n"
        })
        
        AQTEnhShamanlist.forEach((user) => {
            enhmessage = enhmessage + user + " \n"
        })
        
        AQTDPSWarlist.forEach((user) => {
            dpswarmessage = dpswarmessage + user + " \n"
        })
        
        AQTWarlocklist.forEach((user) => {
            warlockmessage = warlockmessage + user + " \n"
        })
        
        
        var totallistlength = AQTProtWars+AQTBears+AQTRestoDruids+AQTHPriests+AQTRestoShamans+AQTBalances+AQTFerals+AQTHunters+AQTMages+AQTRogues+AQTSPriests+AQTEleShamans+AQTEnhShamans+AQTDPSWars+AQTWarlocks;
        var tanktemp = AQTProtWars+AQTBears
        var healertemp = AQTRestoDruids+AQTHPriests+AQTRestoShamans
        var dpstemp = AQTBalances+AQTFerals+AQTHunters+AQTMages+AQTRogues+AQTSPriests+AQTEleShamans+AQTEnhShamans+AQTDPSWars+AQTWarlocks
        
            defaultraidmessage("AQT")
        
            var sendmessagetemp = raidinitmessage + "\n" + "**Please be present 15 minutes before raid time for invites**\n" +
            "To sign up, find your icon for your class **and** spec, and just click it below!" +
            "\n \n" + 
            "Total members signed right now: " + totallistlength +
            "\n" + "\n" +
            "__Total signed per role__" +
            "\n" + "Tanks: " + tanktemp +
            "\n" + "Healers: " + healertemp +
            "\n" + "DPS: " + dpstemp +
            "\n" + "\n" + "\n" +
            bearmessage + protwarmessage + restodruidmessage + hpriestmessage + restoshamanmessage + balancemessage + feralmessage + huntermessage + magemessage + roguemessage + spriestmessage + elemessage + enhmessage + dpswarmessage + warlockmessage + "\n ."
            var sendmessage = sendmessagetemp.replace(/ {2,1000}/g," ")
            AQTPost.edit(sendmessage)
            console.log(AQTTime)
        }
    

async function populateraidlists() {
await populateBWLlists().then(async function() {
    await populateMClists()
    await populateZGlists()
    await populateAQFlists()
    await populateAQTlists()
})
}

async function populateMClists(){
    console.log('Populating MC')
    MCmeleelist = [""]
    MCrangedlist = [""]
    MChealerlist = [""]
    MCtanklist = [""]

    let raidmessage = MCPost.toString()
    let raidmessagearray = raidmessage.split("\n")
    var loopvar = "none"
    raidmessagearray.forEach((line) => {
        line.replace(/ {2,100}/i)
        if (line !== undefined) {

            if (line.includes("**Tanks (")) {
                loopvar = "tanks"
            }
            else if (line.includes("**Healers (")) {
                loopvar = "healers"
            }
            else if (line.includes("**Melee DPS (")) {
                loopvar = "melee"
            }
            else if (line.includes("**Ranged DPS (")) {
                loopvar = "ranged"
            }

            else if (line.startsWith("__Backup__")) {
            }

            else if (loopvar == "tanks" && line.length > 2) {
                if (MCtanklist[0] == "") {
                    MCtanklist = [line];
                }
                else {
                    MCtanklist.push(line)
                }
            }

            else if (loopvar == "healers" && line.length > 2) {
                if (MChealerlist[0] == "") {
                    MChealerlist = [line]
                }
                else {
                    MChealerlist.push(line)
                }
            }
            else if (loopvar == "melee" && line.length > 2) {
                if (MCmeleelist[0] == "") {
                    MCmeleelist = [line];
                }
                else {
                    MCmeleelist.push(line)
                }
            }
            else if (loopvar == "ranged" && line.length > 2) {
                if (MCrangedlist[0] == "") {
                    MCrangedlist = [line]
                }
                else {
                    MCrangedlist.push(line)
                }
            }

        }

    })
}

async function populateZGlists(){
    console.log('Populating ZG')
   ZGProtWarlist = [""]
   ZGBearlist = [""]
   ZGRestoDruidlist = [""]
   ZGHPriestlist = [""]
   ZGRestoShamanlist = [""]
   ZGBalanceDruidlist = [""]
   ZGFeralDruidlist = [""]
   ZGHunterlist = [""]
   ZGMagelist = [""]
   ZGRoguelist = [""]
   ZGSPriestlist = [""]
   ZGEleShamanlist = [""]
   ZGEnhShamanlist = [""]
   ZGDPSWarlist = [""]
   ZGWarlocklist = [""]


   let raidmessage = ZGPost.toString()
   let raidmessagearray = raidmessage.split("\n")
   let loopvar = "none"
   await raidmessagearray.forEach((line) => {
    line.replace(/ {2,100}/i)
       if (line !== undefined) {
           if (line.includes("Tank Druids")) {
               loopvar = "bears"
           }
           else if (line.includes("Tank Warriors")) {
               loopvar = "protwars"
           }
           else if (line.includes("Healer Druids")) {
               loopvar = "restodruids"
           }
           else if (line.includes("Healer Priests")) {
               loopvar = "hpriests"
           }
           else if (line.includes("Healer Shamans")) {
               loopvar = "restoshamans"
           }
           else if (line.includes("Balance Druids")) {
               loopvar = "balances"
           }
           else if (line.includes("Feral Druids")) {
               loopvar = "kitties"
           }
           else if (line.includes("Hunters")) {
               loopvar = "hunters"
           }
           else if (line.includes("Mages")) {
               loopvar = "mages"
           }
           else if (line.includes("Rogues")) {
               loopvar = "rogues"
           }
           else if (line.includes("Shadow Priests")) {
               loopvar = "spriests"
           }
           else if (line.includes("Elemental Shamans")) {
               loopvar = "eles"
           }
           else if (line.includes("Enhancement Shamans")) {
               loopvar = "enh"
           }
           else if (line.includes("DPS Warriors")) {
               loopvar = "dpswars"
           }
           else if (line.includes("Warlocks")) {
               loopvar = "warlocks"
           }

           else if (loopvar == "protwars" && line.length > 2) {
               if (ZGProtWarlist[0] == "") {
                   ZGProtWarlist[0] = line;
               }
               else {
                   ZGProtWarlist.push(line)
               }
           }
           else if (loopvar == "bears" && line.length > 2) {
               if (ZGBearlist[0] == "") {
                   ZGBearlist[0] = line;
               }
               else {
                   ZGBearlist.push(line)
               }
           }
           else if (loopvar == "restodruids" && line.length > 2) {
               if (ZGRestoDruidlist[0] == "") {
                   ZGRestoDruidlist[0] = line;
               }
               else {
                   ZGRestoDruidlist.push(line)
               }
           }
           else if (loopvar == "hpriests" && line.length > 2) {
               if (ZGHPriestlist[0] == "") {
                   ZGHPriestlist[0] = line;
               }
               else {
                   ZGHPriestlist.push(line)
               }
           }
           else if (loopvar == "restoshamans" && line.length > 2) {
               if (ZGRestoShamanlist[0] == "") {
                   ZGRestoShamanlist[0] = line;
               }
               else {
                   ZGRestoShamanlist.push(line)
               }
           }
           else if (loopvar == "balances" && line.length > 2) {
               if (ZGBalanceDruidlist[0] == "") {
                   ZGBalanceDruidlist[0] = line;
               }
               else {
                   ZGBalanceDruidlist.push(line)
               }
           }
           else if (loopvar == "kitties" && line.length > 2) {
               if (ZGFeralDruidlist[0] == "") {
                   ZGFeralDruidlist[0] = line;
               }
               else {
                   ZGFeralDruidlist.push(line)
               }
           }
           else if (loopvar == "hunters" && line.length > 2) {
               if (ZGHunterlist[0] == "") {
                   ZGHunterlist[0] = line;
               }
               else {
                   ZGHunterlist.push(line)
               }
           }
           else if (loopvar == "mages" && line.length > 2) {
               if (ZGMagelist[0] == "") {
                   ZGMagelist[0] = line;
               }
               else {
                   ZGMagelist.push(line)
               }
           }
           else if (loopvar == "rogues" && line.length > 2) {
               if (ZGRoguelist[0] == "") {
                   ZGRoguelist[0] = line;
               }
               else {
                   ZGRoguelist.push(line)
               }
           }
           else if (loopvar == "spriests" && line.length > 2) {
               if (ZGSPriestlist[0] == "") {
                   ZGSPriestlist[0] = line;
               }
               else {
                   ZGSPriestlist.push(line)
               }
           }
           else if (loopvar == "eles" && line.length > 2) {
               if (ZGEleShamanlist[0] == "") {
                   ZGEleShamanlist[0] = line;
               }
               else {
                   ZGEleShamanlist.push(line)
               }
           }
           else if (loopvar == "enh" && line.length > 2) {
               if (ZGEnhShamanlist[0] == "") {
                   ZGEnhShamanlist[0] = line;
               }
               else {
                   ZGEnhShamanlist.push(line)
               }
           }
           else if (loopvar == "dpswars" && line.length > 2) {
               if (ZGDPSWarlist[0] == "") {
                   ZGDPSWarlist[0] = line;
               }
               else {
                   ZGDPSWarlist.push(line)
               }
           }
           else if (loopvar == "warlocks" && line.length > 2) {
               if (ZGWarlocklist[0] == "") {
                   ZGWarlocklist[0] = line;
               }
               else {
                   ZGWarlocklist.push(line)
               }
           }
       }

   })
}

 async function populateBWLlists(){
     console.log('Populating BWL')
    BWLProtWarlist = [""]
    BWLBearlist = [""]
    BWLRestoDruidlist = [""]
    BWLHPriestlist = [""]
    BWLRestoShamanlist = [""]
    BWLBalanceDruidlist = [""]
    BWLFeralDruidlist = [""]
    BWLHunterlist = [""]
    BWLMagelist = [""]
    BWLRoguelist = [""]
    BWLSPriestlist = [""]
    BWLEleShamanlist = [""]
    BWLEnhShamanlist = [""]
    BWLDPSWarlist = [""]
    BWLWarlocklist = [""]


    let raidmessage = BWLPost.toString()
    let raidmessagearray = raidmessage.split("\n")
    let loopvar = "none"
    await raidmessagearray.forEach((line) => {
        if (line !== undefined) {
            line.replace(/ {2,100}/i)
            if (line.includes("Tank Druids")) {
                loopvar = "bears"
            }
            else if (line.includes("Tank Warriors")) {
                loopvar = "protwars"
            }
            else if (line.includes("Healer Druids")) {
                loopvar = "restodruids"
            }
            else if (line.includes("Healer Priests")) {
                loopvar = "hpriests"
            }
            else if (line.includes("Healer Shamans")) {
                loopvar = "restoshamans"
            }
            else if (line.includes("Balance Druids")) {
                loopvar = "balances"
            }
            else if (line.includes("Feral Druids")) {
                loopvar = "kitties"
            }
            else if (line.includes("Hunters")) {
                loopvar = "hunters"
            }
            else if (line.includes("Mages")) {
                loopvar = "mages"
            }
            else if (line.includes("Rogues")) {
                loopvar = "rogues"
            }
            else if (line.includes("Shadow Priests")) {
                loopvar = "spriests"
            }
            else if (line.includes("Elemental Shamans")) {
                loopvar = "eles"
            }
            else if (line.includes("Enhancement Shamans")) {
                loopvar = "enh"
            }
            else if (line.includes("DPS Warriors")) {
                loopvar = "dpswars"
            }
            else if (line.includes("Warlocks")) {
                loopvar = "warlocks"
            }

            else if (loopvar == "protwars" && line.length > 2) {
                if (BWLProtWarlist[0] == "") {
                    BWLProtWarlist[0] = line;
                }
                else {
                    BWLProtWarlist.push(line)
                }
            }
            else if (loopvar == "bears" && line.length > 2) {
                if (BWLBearlist[0] == "") {
                    BWLBearlist[0] = line;
                }
                else {
                    BWLBearlist.push(line)
                }
            }
            else if (loopvar == "restodruids" && line.length > 2) {
                if (BWLRestoDruidlist[0] == "") {
                    BWLRestoDruidlist[0] = line;
                }
                else {
                    BWLRestoDruidlist.push(line)
                }
            }
            else if (loopvar == "hpriests" && line.length > 2) {
                if (BWLHPriestlist[0] == "") {
                    BWLHPriestlist[0] = line;
                }
                else {
                    BWLHPriestlist.push(line)
                }
            }
            else if (loopvar == "restoshamans" && line.length > 2) {
                if (BWLRestoShamanlist[0] == "") {
                    BWLRestoShamanlist[0] = line;
                }
                else {
                    BWLRestoShamanlist.push(line)
                }
            }
            else if (loopvar == "balances" && line.length > 2) {
                if (BWLBalanceDruidlist[0] == "") {
                    BWLBalanceDruidlist[0] = line;
                }
                else {
                    BWLBalanceDruidlist.push(line)
                }
            }
            else if (loopvar == "kitties" && line.length > 2) {
                if (BWLFeralDruidlist[0] == "") {
                    BWLFeralDruidlist[0] = line;
                }
                else {
                    BWLFeralDruidlist.push(line)
                }
            }
            else if (loopvar == "hunters" && line.length > 2) {
                if (BWLHunterlist[0] == "") {
                    BWLHunterlist[0] = line;
                }
                else {
                    BWLHunterlist.push(line)
                }
            }
            else if (loopvar == "mages" && line.length > 2) {
                if (BWLMagelist[0] == "") {
                    BWLMagelist[0] = line;
                }
                else {
                    BWLMagelist.push(line)
                }
            }
            else if (loopvar == "rogues" && line.length > 2) {
                if (BWLRoguelist[0] == "") {
                    BWLRoguelist[0] = line;
                }
                else {
                    BWLRoguelist.push(line)
                }
            }
            else if (loopvar == "spriests" && line.length > 2) {
                if (BWLSPriestlist[0] == "") {
                    BWLSPriestlist[0] = line;
                }
                else {
                    BWLSPriestlist.push(line)
                }
            }
            else if (loopvar == "eles" && line.length > 2) {
                if (BWLEleShamanlist[0] == "") {
                    BWLEleShamanlist[0] = line;
                }
                else {
                    BWLEleShamanlist.push(line)
                }
            }
            else if (loopvar == "enh" && line.length > 2) {
                if (BWLEnhShamanlist[0] == "") {
                    BWLEnhShamanlist[0] = line;
                }
                else {
                    BWLEnhShamanlist.push(line)
                }
            }
            else if (loopvar == "dpswars" && line.length > 2) {
                if (BWLDPSWarlist[0] == "") {
                    BWLDPSWarlist[0] = line;
                }
                else {
                    BWLDPSWarlist.push(line)
                }
            }
            else if (loopvar == "warlocks" && line.length > 2) {
                if (BWLWarlocklist[0] == "") {
                    BWLWarlocklist[0] = line;
                }
                else {
                    BWLWarlocklist.push(line)
                }
            }
        }

    })
}


async function populateAQFlists(){
    console.log('Populating AQF')
   AQFProtWarlist = [""]
   AQFBearlist = [""]
   AQFRestoDruidlist = [""]
   AQFHPriestlist = [""]
   AQFRestoShamanlist = [""]
   AQFBalanceDruidlist = [""]
   AQFFeralDruidlist = [""]
   AQFHunterlist = [""]
   AQFMagelist = [""]
   AQFRoguelist = [""]
   AQFSPriestlist = [""]
   AQFEleShamanlist = [""]
   AQFEnhShamanlist = [""]
   AQFDPSWarlist = [""]
   AQFWarlocklist = [""]


   let raidmessage = AQFPost.toString()
   let raidmessagearray = raidmessage.split("\n")
   let loopvar = "none"
   await raidmessagearray.forEach((line) => {
       if (line !== undefined) {
           line.replace(/ {2,100}/i)
           if (line.includes("Tank Druids")) {
               loopvar = "bears"
           }
           else if (line.includes("Tank Warriors")) {
               loopvar = "protwars"
           }
           else if (line.includes("Healer Druids")) {
               loopvar = "restodruids"
           }
           else if (line.includes("Healer Priests")) {
               loopvar = "hpriests"
           }
           else if (line.includes("Healer Shamans")) {
               loopvar = "restoshamans"
           }
           else if (line.includes("Balance Druids")) {
               loopvar = "balances"
           }
           else if (line.includes("Feral Druids")) {
               loopvar = "kitties"
           }
           else if (line.includes("Hunters")) {
               loopvar = "hunters"
           }
           else if (line.includes("Mages")) {
               loopvar = "mages"
           }
           else if (line.includes("Rogues")) {
               loopvar = "rogues"
           }
           else if (line.includes("Shadow Priests")) {
               loopvar = "spriests"
           }
           else if (line.includes("Elemental Shamans")) {
               loopvar = "eles"
           }
           else if (line.includes("Enhancement Shamans")) {
               loopvar = "enh"
           }
           else if (line.includes("DPS Warriors")) {
               loopvar = "dpswars"
           }
           else if (line.includes("Warlocks")) {
               loopvar = "warlocks"
           }

           else if (loopvar == "protwars" && line.length > 2) {
               if (AQFProtWarlist[0] == "") {
                   AQFProtWarlist[0] = line;
               }
               else {
                   AQFProtWarlist.push(line)
               }
           }
           else if (loopvar == "bears" && line.length > 2) {
               if (AQFBearlist[0] == "") {
                   AQFBearlist[0] = line;
               }
               else {
                   AQFBearlist.push(line)
               }
           }
           else if (loopvar == "restodruids" && line.length > 2) {
               if (AQFRestoDruidlist[0] == "") {
                   AQFRestoDruidlist[0] = line;
               }
               else {
                   AQFRestoDruidlist.push(line)
               }
           }
           else if (loopvar == "hpriests" && line.length > 2) {
               if (AQFHPriestlist[0] == "") {
                   AQFHPriestlist[0] = line;
               }
               else {
                   AQFHPriestlist.push(line)
               }
           }
           else if (loopvar == "restoshamans" && line.length > 2) {
               if (AQFRestoShamanlist[0] == "") {
                   AQFRestoShamanlist[0] = line;
               }
               else {
                   AQFRestoShamanlist.push(line)
               }
           }
           else if (loopvar == "balances" && line.length > 2) {
               if (AQFBalanceDruidlist[0] == "") {
                   AQFBalanceDruidlist[0] = line;
               }
               else {
                   AQFBalanceDruidlist.push(line)
               }
           }
           else if (loopvar == "kitties" && line.length > 2) {
               if (AQFFeralDruidlist[0] == "") {
                   AQFFeralDruidlist[0] = line;
               }
               else {
                   AQFFeralDruidlist.push(line)
               }
           }
           else if (loopvar == "hunters" && line.length > 2) {
               if (AQFHunterlist[0] == "") {
                   AQFHunterlist[0] = line;
               }
               else {
                   AQFHunterlist.push(line)
               }
           }
           else if (loopvar == "mages" && line.length > 2) {
               if (AQFMagelist[0] == "") {
                   AQFMagelist[0] = line;
               }
               else {
                   AQFMagelist.push(line)
               }
           }
           else if (loopvar == "rogues" && line.length > 2) {
               if (AQFRoguelist[0] == "") {
                   AQFRoguelist[0] = line;
               }
               else {
                   AQFRoguelist.push(line)
               }
           }
           else if (loopvar == "spriests" && line.length > 2) {
               if (AQFSPriestlist[0] == "") {
                   AQFSPriestlist[0] = line;
               }
               else {
                   AQFSPriestlist.push(line)
               }
           }
           else if (loopvar == "eles" && line.length > 2) {
               if (AQFEleShamanlist[0] == "") {
                   AQFEleShamanlist[0] = line;
               }
               else {
                   AQFEleShamanlist.push(line)
               }
           }
           else if (loopvar == "enh" && line.length > 2) {
               if (AQFEnhShamanlist[0] == "") {
                   AQFEnhShamanlist[0] = line;
               }
               else {
                   AQFEnhShamanlist.push(line)
               }
           }
           else if (loopvar == "dpswars" && line.length > 2) {
               if (AQFDPSWarlist[0] == "") {
                   AQFDPSWarlist[0] = line;
               }
               else {
                   AQFDPSWarlist.push(line)
               }
           }
           else if (loopvar == "warlocks" && line.length > 2) {
               if (AQFWarlocklist[0] == "") {
                   AQFWarlocklist[0] = line;
               }
               else {
                   AQFWarlocklist.push(line)
               }
           }
       }

   })
}

async function populateAQTlists(){
    console.log('Populating AQT')
   AQTProtWarlist = [""]
   AQTBearlist = [""]
   AQTRestoDruidlist = [""]
   AQTHPriestlist = [""]
   AQTRestoShamanlist = [""]
   AQTBalanceDruidlist = [""]
   AQTFeralDruidlist = [""]
   AQTHunterlist = [""]
   AQTMagelist = [""]
   AQTRoguelist = [""]
   AQTSPriestlist = [""]
   AQTEleShamanlist = [""]
   AQTEnhShamanlist = [""]
   AQTDPSWarlist = [""]
   AQTWarlocklist = [""]


   let raidmessage = AQTPost.toString()
   let raidmessagearray = raidmessage.split("\n")
   let loopvar = "none"
   await raidmessagearray.forEach((line) => {
       if (line !== undefined) {
           line.replace(/ {2,100}/i)
           if (line.includes("Tank Druids")) {
               loopvar = "bears"
           }
           else if (line.includes("Tank Warriors")) {
               loopvar = "protwars"
           }
           else if (line.includes("Healer Druids")) {
               loopvar = "restodruids"
           }
           else if (line.includes("Healer Priests")) {
               loopvar = "hpriests"
           }
           else if (line.includes("Healer Shamans")) {
               loopvar = "restoshamans"
           }
           else if (line.includes("Balance Druids")) {
               loopvar = "balances"
           }
           else if (line.includes("Feral Druids")) {
               loopvar = "kitties"
           }
           else if (line.includes("Hunters")) {
               loopvar = "hunters"
           }
           else if (line.includes("Mages")) {
               loopvar = "mages"
           }
           else if (line.includes("Rogues")) {
               loopvar = "rogues"
           }
           else if (line.includes("Shadow Priests")) {
               loopvar = "spriests"
           }
           else if (line.includes("Elemental Shamans")) {
               loopvar = "eles"
           }
           else if (line.includes("Enhancement Shamans")) {
               loopvar = "enh"
           }
           else if (line.includes("DPS Warriors")) {
               loopvar = "dpswars"
           }
           else if (line.includes("Warlocks")) {
               loopvar = "warlocks"
           }

           else if (loopvar == "protwars" && line.length > 2) {
               if (AQTProtWarlist[0] == "") {
                   AQTProtWarlist[0] = line;
               }
               else {
                   AQTProtWarlist.push(line)
               }
           }
           else if (loopvar == "bears" && line.length > 2) {
               if (AQTBearlist[0] == "") {
                   AQTBearlist[0] = line;
               }
               else {
                   AQTBearlist.push(line)
               }
           }
           else if (loopvar == "restodruids" && line.length > 2) {
               if (AQTRestoDruidlist[0] == "") {
                   AQTRestoDruidlist[0] = line;
               }
               else {
                   AQTRestoDruidlist.push(line)
               }
           }
           else if (loopvar == "hpriests" && line.length > 2) {
               if (AQTHPriestlist[0] == "") {
                   AQTHPriestlist[0] = line;
               }
               else {
                   AQTHPriestlist.push(line)
               }
           }
           else if (loopvar == "restoshamans" && line.length > 2) {
               if (AQTRestoShamanlist[0] == "") {
                   AQTRestoShamanlist[0] = line;
               }
               else {
                   AQTRestoShamanlist.push(line)
               }
           }
           else if (loopvar == "balances" && line.length > 2) {
               if (AQTBalanceDruidlist[0] == "") {
                   AQTBalanceDruidlist[0] = line;
               }
               else {
                   AQTBalanceDruidlist.push(line)
               }
           }
           else if (loopvar == "kitties" && line.length > 2) {
               if (AQTFeralDruidlist[0] == "") {
                   AQTFeralDruidlist[0] = line;
               }
               else {
                   AQTFeralDruidlist.push(line)
               }
           }
           else if (loopvar == "hunters" && line.length > 2) {
               if (AQTHunterlist[0] == "") {
                   AQTHunterlist[0] = line;
               }
               else {
                   AQTHunterlist.push(line)
               }
           }
           else if (loopvar == "mages" && line.length > 2) {
               if (AQTMagelist[0] == "") {
                   AQTMagelist[0] = line;
               }
               else {
                   AQTMagelist.push(line)
               }
           }
           else if (loopvar == "rogues" && line.length > 2) {
               if (AQTRoguelist[0] == "") {
                   AQTRoguelist[0] = line;
               }
               else {
                   AQTRoguelist.push(line)
               }
           }
           else if (loopvar == "spriests" && line.length > 2) {
               if (AQTSPriestlist[0] == "") {
                   AQTSPriestlist[0] = line;
               }
               else {
                   AQTSPriestlist.push(line)
               }
           }
           else if (loopvar == "eles" && line.length > 2) {
               if (AQTEleShamanlist[0] == "") {
                   AQTEleShamanlist[0] = line;
               }
               else {
                   AQTEleShamanlist.push(line)
               }
           }
           else if (loopvar == "enh" && line.length > 2) {
               if (AQTEnhShamanlist[0] == "") {
                   AQTEnhShamanlist[0] = line;
               }
               else {
                   AQTEnhShamanlist.push(line)
               }
           }
           else if (loopvar == "dpswars" && line.length > 2) {
               if (AQTDPSWarlist[0] == "") {
                   AQTDPSWarlist[0] = line;
               }
               else {
                   AQTDPSWarlist.push(line)
               }
           }
           else if (loopvar == "warlocks" && line.length > 2) {
               if (AQTWarlocklist[0] == "") {
                   AQTWarlocklist[0] = line;
               }
               else {
                   AQTWarlocklist.push(line)
               }
           }
       }

   })
}


async function addMC(member, WoWc, WoWr) {
    if (WoWr.match(/melee/i)) {
        if (MCmeleelist[0] == "") { MCmeleelist[0] = member + " " + WoWc }
        else {
            MCmeleelist.push(member + " " + WoWc)
        }
        createraidpost("MC")
    }
    if (WoWr.match(/ranged/i)) {
        if (MCrangedlist[0] == "") { MCrangedlist[0] = member + " " + WoWc }
        else {
            MCrangedlist.push(member + " " + WoWc)
        }
        createraidpost("MC")
    }
    if (WoWr.match(/healer/i)) {
        if (MChealerlist[0] == "") { MChealerlist[0] = member + " " + WoWc }
        else {
            MChealerlist.push(member + " " + WoWc)
        }
        createraidpost("MC")
    }
    if (WoWr.match(/tank/i)) {
        if (MCtanklist[0] == "") { MCtanklist[0] = member + " " + WoWc }
        else {
            MCtanklist.push(member + " " + WoWc)
        }
        createraidpost("MC")
    }
}

async function addZG(member, WoWc, WoWr) {
    if (WoWr.match(/tank/i) && WoWc.match(/warrior/i)) {
        if (ZGProtWarlist[0] == "") { ZGProtWarlist[0] = member + " "}
        else {
            ZGProtWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/tank/i) && WoWc.match(/druid/i)) {
        if (ZGBearlist[0] == "") { ZGBearlist[0] = member + " "}
        else {
            ZGBearlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/druid/i)) {
        if (ZGRestoDruidlist[0] == "") { ZGRestoDruidlist[0] = member + " "}
        else {
            ZGRestoDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/priest/i)) {
        if (ZGHPriestlist[0] == "") { ZGHPriestlist[0] = member + " "}
        else {
            ZGHPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/shaman/i)) {
        if (ZGRestoShamanlist[0] == "") { ZGRestoShamanlist[0] = member + " "}
        else {
            ZGRestoShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/druid/i)) {
        if (ZGBalanceDruidlist[0] == "") { ZGBalanceDruidlist[0] = member + " "}
        else {
            ZGBalanceDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/druid/i)) {
        if (ZGFeralDruidlist[0] == "") { ZGFeralDruidlist[0] = member + " "}
        else {
            ZGFeralDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/hunter/i)) {
        if (ZGHunterlist[0] == "") { ZGHunterlist[0] = member + " "}
        else {
            ZGHunterlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/mage/i)) {
        if (ZGMagelist[0] == "") { ZGMagelist[0] = member + " "}
        else {
            ZGMagelist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/rogue/i)) {
        if (ZGRoguelist[0] == "") { ZGRoguelist[0] = member + " "}
        else {
            ZGRoguelist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/priest/i)) {
        if (ZGSPriestlist[0] == "") { ZGSPriestlist[0] = member + " "}
        else {
            ZGSPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/shaman/i)) {
        if (ZGEleShamanlist[0] == "") { ZGEleShamanlist[0] = member + " "}
        else {
            ZGEleShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/shaman/i)) {
        if (ZGEnhShamanlist[0] == "") { ZGEnhShamanlist[0] = member + " "}
        else {
            ZGEnhShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/warrior/i)) {
        if (ZGDPSWarlist[0] == "") { ZGDPSWarlist[0] = member + " "}
        else {
            ZGDPSWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/warlock/i)) {
        if (ZGWarlocklist[0] == "") { ZGWarlocklist[0] = member + " "}
        else {
            ZGWarlocklist.push(member + " ")
        }
    }
    createraidpost("ZG");
}


async function addBWL(member, WoWc, WoWr) {
    if (WoWr.match(/tank/i) && WoWc.match(/warrior/i)) {
        if (BWLProtWarlist[0] == "") { BWLProtWarlist[0] = member + " "}
        else {
            BWLProtWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/tank/i) && WoWc.match(/druid/i)) {
        if (BWLBearlist[0] == "") { BWLBearlist[0] = member + " "}
        else {
            BWLBearlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/druid/i)) {
        if (BWLRestoDruidlist[0] == "") { BWLRestoDruidlist[0] = member + " "}
        else {
            BWLRestoDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/priest/i)) {
        if (BWLHPriestlist[0] == "") { BWLHPriestlist[0] = member + " "}
        else {
            BWLHPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/shaman/i)) {
        if (BWLRestoShamanlist[0] == "") { BWLRestoShamanlist[0] = member + " "}
        else {
            BWLRestoShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/druid/i)) {
        if (BWLBalanceDruidlist[0] == "") { BWLBalanceDruidlist[0] = member + " "}
        else {
            BWLBalanceDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/druid/i)) {
        if (BWLFeralDruidlist[0] == "") { BWLFeralDruidlist[0] = member + " "}
        else {
            BWLFeralDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/hunter/i)) {
        if (BWLHunterlist[0] == "") { BWLHunterlist[0] = member + " "}
        else {
            BWLHunterlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/mage/i)) {
        if (BWLMagelist[0] == "") { BWLMagelist[0] = member + " "}
        else {
            BWLMagelist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/rogue/i)) {
        if (BWLRoguelist[0] == "") { BWLRoguelist[0] = member + " "}
        else {
            BWLRoguelist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/priest/i)) {
        if (BWLSPriestlist[0] == "") { BWLSPriestlist[0] = member + " "}
        else {
            BWLSPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/shaman/i)) {
        if (BWLEleShamanlist[0] == "") { BWLEleShamanlist[0] = member + " "}
        else {
            BWLEleShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/shaman/i)) {
        if (BWLEnhShamanlist[0] == "") { BWLEnhShamanlist[0] = member + " "}
        else {
            BWLEnhShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/warrior/i)) {
        if (BWLDPSWarlist[0] == "") { BWLDPSWarlist[0] = member + " "}
        else {
            BWLDPSWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/warlock/i)) {
        if (BWLWarlocklist[0] == "") { BWLWarlocklist[0] = member + " "}
        else {
            BWLWarlocklist.push(member + " ")
        }
    }
    createraidpost("BWL");
}


async function addAQF(member, WoWc, WoWr) {
    if (WoWr.match(/tank/i) && WoWc.match(/warrior/i)) {
        if (AQFProtWarlist[0] == "") { AQFProtWarlist[0] = member + " "}
        else {
            AQFProtWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/tank/i) && WoWc.match(/druid/i)) {
        if (AQFBearlist[0] == "") { AQFBearlist[0] = member + " "}
        else {
            AQFBearlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/druid/i)) {
        if (AQFRestoDruidlist[0] == "") { AQFRestoDruidlist[0] = member + " "}
        else {
            AQFRestoDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/priest/i)) {
        if (AQFHPriestlist[0] == "") { AQFHPriestlist[0] = member + " "}
        else {
            AQFHPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/shaman/i)) {
        if (AQFRestoShamanlist[0] == "") { AQFRestoShamanlist[0] = member + " "}
        else {
            AQFRestoShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/druid/i)) {
        if (AQFBalanceDruidlist[0] == "") { AQFBalanceDruidlist[0] = member + " "}
        else {
            AQFBalanceDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/druid/i)) {
        if (AQFFeralDruidlist[0] == "") { AQFFeralDruidlist[0] = member + " "}
        else {
            AQFFeralDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/hunter/i)) {
        if (AQFHunterlist[0] == "") { AQFHunterlist[0] = member + " "}
        else {
            AQFHunterlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/mage/i)) {
        if (AQFMagelist[0] == "") { AQFMagelist[0] = member + " "}
        else {
            AQFMagelist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/rogue/i)) {
        if (AQFRoguelist[0] == "") { AQFRoguelist[0] = member + " "}
        else {
            AQFRoguelist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/priest/i)) {
        if (AQFSPriestlist[0] == "") { AQFSPriestlist[0] = member + " "}
        else {
            AQFSPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/shaman/i)) {
        if (AQFEleShamanlist[0] == "") { AQFEleShamanlist[0] = member + " "}
        else {
            AQFEleShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/shaman/i)) {
        if (AQFEnhShamanlist[0] == "") { AQFEnhShamanlist[0] = member + " "}
        else {
            AQFEnhShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/warrior/i)) {
        if (AQFDPSWarlist[0] == "") { AQFDPSWarlist[0] = member + " "}
        else {
            AQFDPSWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/warlock/i)) {
        if (AQFWarlocklist[0] == "") { AQFWarlocklist[0] = member + " "}
        else {
            AQFWarlocklist.push(member + " ")
        }
    }
    createraidpost("AQF");
}


async function addAQT(member, WoWc, WoWr) {
    if (WoWr.match(/tank/i) && WoWc.match(/warrior/i)) {
        if (AQTProtWarlist[0] == "") { AQTProtWarlist[0] = member + " "}
        else {
            AQTProtWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/tank/i) && WoWc.match(/druid/i)) {
        if (AQTBearlist[0] == "") { AQTBearlist[0] = member + " "}
        else {
            AQTBearlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/druid/i)) {
        if (AQTRestoDruidlist[0] == "") { AQTRestoDruidlist[0] = member + " "}
        else {
            AQTRestoDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/priest/i)) {
        if (AQTHPriestlist[0] == "") { AQTHPriestlist[0] = member + " "}
        else {
            AQTHPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/healer/i) && WoWc.match(/shaman/i)) {
        if (AQTRestoShamanlist[0] == "") { AQTRestoShamanlist[0] = member + " "}
        else {
            AQTRestoShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/druid/i)) {
        if (AQTBalanceDruidlist[0] == "") { AQTBalanceDruidlist[0] = member + " "}
        else {
            AQTBalanceDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/druid/i)) {
        if (AQTFeralDruidlist[0] == "") { AQTFeralDruidlist[0] = member + " "}
        else {
            AQTFeralDruidlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/hunter/i)) {
        if (AQTHunterlist[0] == "") { AQTHunterlist[0] = member + " "}
        else {
            AQTHunterlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/mage/i)) {
        if (AQTMagelist[0] == "") { AQTMagelist[0] = member + " "}
        else {
            AQTMagelist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/rogue/i)) {
        if (AQTRoguelist[0] == "") { AQTRoguelist[0] = member + " "}
        else {
            AQTRoguelist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/priest/i)) {
        if (AQTSPriestlist[0] == "") { AQTSPriestlist[0] = member + " "}
        else {
            AQTSPriestlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/shaman/i)) {
        if (AQTEleShamanlist[0] == "") { AQTEleShamanlist[0] = member + " "}
        else {
            AQTEleShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/shaman/i)) {
        if (AQTEnhShamanlist[0] == "") { AQTEnhShamanlist[0] = member + " "}
        else {
            AQTEnhShamanlist.push(member + " ")
        }
    }
    else if (WoWr.match(/melee/i) && WoWc.match(/warrior/i)) {
        if (AQTDPSWarlist[0] == "") { AQTDPSWarlist[0] = member + " "}
        else {
            AQTDPSWarlist.push(member + " ")
        }
    }
    else if (WoWr.match(/ranged/i) && WoWc.match(/warlock/i)) {
        if (AQTWarlocklist[0] == "") { AQTWarlocklist[0] = member + " "}
        else {
            AQTWarlocklist.push(member + " ")
        }
    }
    createraidpost("AQT");
}


async function fixMClists() {

    temptank = MCtanklist
    temphealer = MChealerlist
    tempmelee = MCmeleelist
    tempranged = MCrangedlist

    temptank.forEach((t, index) => { temptank[index] = t.replace(" [B]", "") })
    temphealer.forEach((t, index) => { temphealer[index] = t.replace(" [B]", "") })
    tempmelee.forEach((t, index) => { tempmelee[index] = t.replace(" [B]", "") })
    tempranged.forEach((t, index) => { tempranged[index] = t.replace(" [B]", "") })

    MCtanklist = [""]
    MChealerlist = [""]
    MCmeleelist = [""]
    MCrangedlist = [""]

        listMCraiders()
        listMCtrials()
        listMCusers()
        listMCalts()
        listMCBackups()
}

async function listMCraiders() {
    temptank.forEach((t) => {
        if (checkmembership(t) == "Raider") {
            if (MCtanklist[0] == "") {
                MCtanklist[0] = (t)
            }
            else {
                MCtanklist.push(t)
            }
        }
    })

    temphealer.forEach((t) => {
        if (checkmembership(t) == "Raider") {
            if (MChealerlist[0] == "") {
                MChealerlist[0] = (t)
            }
            else {
                MChealerlist.push(t)
            }
        }
    })

    tempmelee.forEach((t) => {
        if (checkmembership(t) == "Raider") {
            if (MCmeleelist[0] == "") {
                MCmeleelist[0] = (t)
            }
            else {
                MCmeleelist.push(t)
            }
        }
    })

    tempranged.forEach((t) => {
        if (checkmembership(t) == "Raider") {
            if (MCrangedlist[0] == "") {
                MCrangedlist[0] = (t)
            }
            else {
                MCrangedlist.push(t)
            }
        }
    })
}

async function listMCusers() {
    temptank.forEach((t) => {
        if (checkmembership(t) == "User") {
            if (MCtanklist[0] == "") {
                MCtanklist[0] = (t)
            }
            else {
                MCtanklist.push(t)
            }
        }
    })

    temphealer.forEach((t) => {
        if (checkmembership(t) == "User") {
            if (MChealerlist[0] == "") {
                MChealerlist[0] = (t)
            }
            else {
                MChealerlist.push(t)
            }
        }
    })

    tempmelee.forEach((t) => {
        if (checkmembership(t) == "User") {
            if (MCmeleelist[0] == "") {
                MCmeleelist[0] = (t)
            }
            else {
                MCmeleelist.push(t)
            }
        }
    })

    tempranged.forEach((t) => {
        if (checkmembership(t) == "User") {
            if (MCrangedlist[0] == "") {
                MCrangedlist[0] = (t)
            }
            else {
                MCrangedlist.push(t)
            }
        }
    })
}

async function listMCtrials() {
    temptank.forEach((t) => {
        if (checkmembership(t) == "Trial") {
            if (MCtanklist[0] == "") {
                MCtanklist[0] = (t)
            }
            else {
                MCtanklist.push(t)
            }
        }
    })

    temphealer.forEach((t) => {
        if (checkmembership(t) == "Trial") {
            if (MChealerlist[0] == "") {
                MChealerlist[0] = (t)
            }
            else {
                MChealerlist.push(t)
            }
        }
    })

    tempmelee.forEach((t) => {
        if (checkmembership(t) == "Trial") {
            if (MCmeleelist[0] == "") {
                MCmeleelist[0] = (t)
            }
            else {
                MCmeleelist.push(t)
            }
        }
    })

    tempranged.forEach((t) => {
        if (checkmembership(t) == "Trial") {
            if (MCrangedlist[0] == "") {
                MCrangedlist[0] = (t)
            }
            else {
                MCrangedlist.push(t)
            }
        }
    })
}

async function listMCBackups() {
    temptank.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (MCtanklist[0] == "") {
                MCtanklist[0] = (t)
            }
            else {
                MCtanklist.push(t)
            }
        }
    })

    temphealer.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (MChealerlist[0] == "") {
                MChealerlist[0] = (t)
            }
            else {
                MChealerlist.push(t)
            }
        }
    })

    tempmelee.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (MCmeleelist[0] == "") {
                MCmeleelist[0] = (t)
            }
            else {
                MCmeleelist.push(t)
            }
        }
    })

    tempranged.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (MCrangedlist[0] == "") {
                MCrangedlist[0] = (t)
            }
            else {
                MCrangedlist.push(t)
            }
        }
    })
}

async function listMCalts() {
    temptank.forEach((t) => {
        if (checkmembership(t) == "Alt") {
            if (MCtanklist[0] == "") {
                MCtanklist[0] = (t)
            }
            else {
                MCtanklist.push(t)
            }
        }
    })

    temphealer.forEach((t) => {
        if (checkmembership(t) == "Alt") {
            if (MChealerlist[0] == "") {
                MChealerlist[0] = (t)
            }
            else {
                MChealerlist.push(t )
            }
        }
    })

    tempmelee.forEach((t) => {
        if (checkmembership(t) == "Alt") {
            if (MCmeleelist[0] == "") {
                MCmeleelist[0] = (t)
            }
            else {
                MCmeleelist.push(t)
            }
        }
    })

    tempranged.forEach((t) => {
        if (checkmembership(t) == "Alt") {
            if (MCrangedlist[0] == "") {
                MCrangedlist[0] = (t)
            }
            else {
                MCrangedlist.push(t)
            }
        }
    })
}


async function fixZGlists() {

    prottemp = ZGProtWarlist
    beartemp = ZGBearlist
    restodruidtemp = ZGRestoDruidlist
    hpriesttemp = ZGHPriestlist
    restoshamantemp = ZGRestoShamanlist
    balancetemp = ZGBalanceDruidlist
    feraltemp = ZGFeralDruidlist
    huntertemp = ZGHunterlist
    magetemp = ZGMagelist
    roguetemp = ZGRoguelist
    spriesttemp = ZGSPriestlist
    eletemp = ZGEleShamanlist
    enhtemp = ZGEnhShamanlist
    dpswartemp = ZGDPSWarlist
    warlocktemp = ZGWarlocklist

    ZGProtWarlist = [""]
    ZGBearlist = [""]
    ZGRestoDruidlist = [""]
    ZGHPriestlist = [""]
    ZGRestoShamanlist = [""]
    ZGBalanceDruidlist = [""]
    ZGFeralDruidlist = [""]
    ZGHunterlist = [""]
    ZGMagelist = [""]
    ZGRoguelist = [""]
    ZGSPriestlist = [""]
    ZGEleShamanlist = [""]
    ZGEnhShamanlist = [""]
    ZGDPSWarlist = [""]
    ZGWarlocklist = [""]

    prottemp.forEach((t, index) => { prottemp[index] = t.replace(" [B]", "") })
    beartemp.forEach((t, index) => { beartemp[index] = t.replace(" [B]", "") })
    restodruidtemp.forEach((t, index) => { restodruidtemp[index] = t.replace(" [B]", "") })
    hpriesttemp.forEach((t, index) => { hpriesttemp[index] = t.replace(" [B]", "") })
    restoshamantemp.forEach((t, index) => { restoshamantemp[index] = t.replace(" [B]", "") })
    balancetemp.forEach((t, index) => { balancetemp[index] = t.replace(" [B]", "") })
    feraltemp.forEach((t, index) => { feraltemp[index] = t.replace(" [B]", "") })
    huntertemp.forEach((t, index) => { huntertemp[index] = t.replace(" [B]", "") })
    magetemp.forEach((t, index) => { magetemp[index] = t.replace(" [B]", "") })
    roguetemp.forEach((t, index) => { roguetemp[index] = t.replace(" [B]", "") })
    spriesttemp.forEach((t, index) => { spriesttemp[index] = t.replace(" [B]", "") })
    eletemp.forEach((t, index) => { eletemp[index] = t.replace(" [B]", "") })
    enhtemp.forEach((t, index) => { enhtemp[index] = t.replace(" [B]", "") })
    dpswartemp.forEach((t, index) => { dpswartemp[index] = t.replace(" [B]", "") })
    warlocktemp.forEach((t, index) => { warlocktemp[index] = t.replace(" [B]", "") })

await listZGnorms();
}

async function listZGnorms() {
    prottemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGProtWarlist[0] == "") {
                ZGProtWarlist[0] = (t + " ")
            }
            else {
                ZGProtWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGProtWarlist[0] == ""){
                ZGProtWarlist[0] = t + " [B]"
            }else{ZGProtWarlist.push(t + " [B]")}
        }
    })
    
    beartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGBearlist[0] == "") {
                ZGBearlist[0] = (t + " ")
            }
            else {
                ZGBearlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGBearlist[0] == "" && t != ""){
                ZGBearlist[0] = t + " [B]"
            }else{ZGBearlist.push(t + " [B]")}
        }
    })
    
    restodruidtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGRestoDruidlist[0] == "") {
                ZGRestoDruidlist[0] = (t + " ")
            }
            else {
                ZGRestoDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGRestoDruidlist[0] == ""){
                ZGRestoDruidlist[0] = t + " [B]"
            }else{ZGRestoDruidlist.push(t + " [B]")}
        }
    })
    
    hpriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGHPriestlist[0] == "") {
                ZGHPriestlist[0] = (t + " ")
            }
            else {
                ZGHPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGHPriestlist[0] == ""){
                ZGHPriestlist[0] = t + " [B]"
            }else{ZGHPriestlist.push(t + " [B]")}
        }
    })
    
    restoshamantemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGRestoShamanlist[0] == "") {
                ZGRestoShamanlist[0] = (t + " ")
            }
            else {
                ZGRestoShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGRestoShamanlist[0] == ""){
                ZGRestoShamanlist[0] = t + " [B]"
            }else{ZGRestoShamanlist.push(t + " [B]")}
        }
    })
    
    balancetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGBalanceDruidlist[0] == "") {
                ZGBalanceDruidlist[0] = (t + " ")
            }
            else {
                ZGBalanceDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGBalanceDruidlist[0] == ""){
                ZGBalanceDruidlist[0] = t + " [B]"
            }else{ZGBalanceDruidlist.push(t + " [B]")}
        }
    })
    
    feraltemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGFeralDruidlist[0] == "") {
                ZGFeralDruidlist[0] = (t + " ")
            }
            else {
                ZGFeralDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGFeralDruidlist[0] == ""){
                ZGFeralDruidlist[0] = t + " [B]"
            }else{ZGFeralDruidlist.push(t + " [B]")}
        }
    })
    
    huntertemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGHunterlist[0] == "") {
                ZGHunterlist[0] = (t + " ")
            }
            else {
                ZGHunterlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGHunterlist[0] == ""){
                ZGHunterlist[0] = t + " [B]"
            }else{ZGHunterlist.push(t + " [B]")}
        }
    })
    
    magetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGMagelist[0] == "") {
                ZGMagelist[0] = (t + " ")
            }
            else {
                ZGMagelist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGMagelist[0] == ""){
                ZGMagelist[0] = t + " [B]"
            }else{ZGMagelist.push(t + " [B]")}
        }
    })
    
    roguetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGRoguelist[0] == "") {
                ZGRoguelist[0] = (t + " ")
            }
            else {
                ZGRoguelist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGRoguelist[0] == ""){
                ZGRoguelist[0] = t + " [B]"
            }else{ZGRoguelist.push(t + " [B]")}
        }
    })
    
    spriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGSPriestlist[0] == "") {
                ZGSPriestlist[0] = (t + " ")
            }
            else {
                ZGSPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGSPriestlist[0] == ""){
                ZGSPriestlist[0] = t + " [B]"
            }else{ZGSPriestlist.push(t + " [B]")}
        }
    })
    
    eletemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGEleShamanlist[0] == "") {
                ZGEleShamanlist[0] = (t + " ")
            }
            else {
                ZGEleShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGEleShamanlist[0] == ""){
                ZGEleShamanlist[0] = t + " [B]"
            }else{ZGEleShamanlist.push(t + " [B]")}
        }
    })
    
    enhtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGEnhShamanlist[0] == "") {
                ZGEnhShamanlist[0] = (t + " ")
            }
            else {
                ZGEnhShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGEnhShamanlist[0] == ""){
                ZGEnhShamanlist[0] = t + " [B]"
            }else{ZGEnhShamanlist.push(t + " [B]")}
        }
    })
    
    dpswartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGDPSWarlist[0] == "") {
                ZGDPSWarlist[0] = (t + " ")
            }
            else {
                ZGDPSWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGDPSWarlist[0] == ""){
                ZGDPSWarlist[0] = t + " [B] "
            }else{ZGDPSWarlist.push(t + " [B] ")}
        }
    })
    
    warlocktemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (ZGWarlocklist[0] == "") {
                ZGWarlocklist[0] = (t + " ")
            }
            else {
                ZGWarlocklist.push(t + " ")
            }
        }else if (t != ""){
            if(ZGWarlocklist[0] == ""){
                ZGWarlocklist[0] = t + " [B]"
            }else{ZGWarlocklist.push(t + " [B]")}
        }
    })

}

async function listZGBackups() {
    prottemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGProtWarlist[0] == "") {
                ZGProtWarlist[0] = t + " [B]"
            }
            else {
                ZGProtWarlist.push(t + " [B]")
            }
        }
    })
    
    beartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGBearlist[0] == "") {
                ZGBearlist[0] = t + " [B]"
            }
            else {
                ZGBearlist.push(t + " [B]")
            }
        }
    })
    
    restodruidtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGRestoDruidlist[0] == "") {
                ZGRestoDruidlist[0] = t + " [B]"
            }
            else {
                ZGRestoDruidlist.push(t + " [B]")
            }
        }
    })
    
    hpriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGHPriestlist[0] == "") {
                ZGHPriestlist[0] = t + " [B]"
            }
            else {
                ZGHPriestlist.push(t + " [B]")
            }
        }
    })
    
    restoshamantemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGRestoShamanlist[0] == "") {
                ZGRestoShamanlist[0] = t + " [B]"
            }
            else {
                ZGRestoShamanlist.push(t + " [B]")
            }
        }
    })
    
    balancetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGBalanceDruidlist[0] == "") {
                ZGBalanceDruidlist[0] = t + " [B]"
            }
            else {
                ZGBalanceDruidlist.push(t + " [B]")
            }
        }
    })
    
    feraltemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGFeralDruidlist[0] == "") {
                ZGFeralDruidlist[0] = t + " [B]"
            }
            else {
                ZGFeralDruidlist.push(t + " [B]")
            }
        }
    })
    
    huntertemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGHunterlist[0] == "") {
                ZGHunterlist[0] = t + " [B]"
            }
            else {
                ZGHunterlist.push(t + " [B]")
            }
        }
    })
    
    magetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGMagelist[0] == "") {
                ZGMagelist[0] = t + " [B]"
            }
            else {
                ZGMagelist.push(t + " [B]")
            }
        }
    })
    
    roguetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGRoguelist[0] == "") {
                ZGRoguelist[0] = t + " [B]"
            }
            else {
                ZGRoguelist.push(t + " [B]")
            }
        }
    })
    
    spriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGSPriestlist[0] == "") {
                ZGSPriestlist[0] = t + " [B]"
            }
            else {
                ZGSPriestlist.push(t + " [B]")
            }
        }
    })
    
    eletemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGEleShamanlist[0] == "") {
                ZGEleShamanlist[0] = t + " [B]"
            }
            else {
                ZGEleShamanlist.push(t + " [B]")
            }
        }
    })
    
    enhtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGEnhShamanlist[0] == "") {
                ZGEnhShamanlist[0] = t + " [B]"
            }
            else {
                ZGEnhShamanlist.push(t + " [B]")
            }
        }
    })
    
    dpswartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGDPSWarlist[0] == "") {
                ZGDPSWarlist[0] = t + " [B]"
            }
            else {
                ZGDPSWarlist.push(t + " [B]")
            }
        }
    })
    
    warlocktemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (ZGWarlocklist[0] == "") {
                ZGWarlocklist[0] = t + " [B]"
            }
            else {
                ZGWarlocklist.push(t + " [B]")
            }
        }
    })
}

async function fixBWLlists() {

    prottemp = BWLProtWarlist
    beartemp = BWLBearlist
    restodruidtemp = BWLRestoDruidlist
    hpriesttemp = BWLHPriestlist
    restoshamantemp = BWLRestoShamanlist
    balancetemp = BWLBalanceDruidlist
    feraltemp = BWLFeralDruidlist
    huntertemp = BWLHunterlist
    magetemp = BWLMagelist
    roguetemp = BWLRoguelist
    spriesttemp = BWLSPriestlist
    eletemp = BWLEleShamanlist
    enhtemp = BWLEnhShamanlist
    dpswartemp = BWLDPSWarlist
    warlocktemp = BWLWarlocklist

    BWLProtWarlist = [""]
    BWLBearlist = [""]
    BWLRestoDruidlist = [""]
    BWLHPriestlist = [""]
    BWLRestoShamanlist = [""]
    BWLBalanceDruidlist = [""]
    BWLFeralDruidlist = [""]
    BWLHunterlist = [""]
    BWLMagelist = [""]
    BWLRoguelist = [""]
    BWLSPriestlist = [""]
    BWLEleShamanlist = [""]
    BWLEnhShamanlist = [""]
    BWLDPSWarlist = [""]
    BWLWarlocklist = [""]

    prottemp.forEach((t, index) => { prottemp[index] = t.replace(" [B]", "") })
    beartemp.forEach((t, index) => { beartemp[index] = t.replace(" [B]", "") })
    restodruidtemp.forEach((t, index) => { restodruidtemp[index] = t.replace(" [B]", "") })
    hpriesttemp.forEach((t, index) => { hpriesttemp[index] = t.replace(" [B]", "") })
    restoshamantemp.forEach((t, index) => { restoshamantemp[index] = t.replace(" [B]", "") })
    balancetemp.forEach((t, index) => { balancetemp[index] = t.replace(" [B]", "") })
    feraltemp.forEach((t, index) => { feraltemp[index] = t.replace(" [B]", "") })
    huntertemp.forEach((t, index) => { huntertemp[index] = t.replace(" [B]", "") })
    magetemp.forEach((t, index) => { magetemp[index] = t.replace(" [B]", "") })
    roguetemp.forEach((t, index) => { roguetemp[index] = t.replace(" [B]", "") })
    spriesttemp.forEach((t, index) => { spriesttemp[index] = t.replace(" [B]", "") })
    eletemp.forEach((t, index) => { eletemp[index] = t.replace(" [B]", "") })
    enhtemp.forEach((t, index) => { enhtemp[index] = t.replace(" [B]", "") })
    dpswartemp.forEach((t, index) => { dpswartemp[index] = t.replace(" [B]", "") })
    warlocktemp.forEach((t, index) => { warlocktemp[index] = t.replace(" [B]", "") })

await listBWLnorms();
}

async function listBWLnorms() {
    prottemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLProtWarlist[0] == "") {
                BWLProtWarlist[0] = (t + " ")
            }
            else {
                BWLProtWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLProtWarlist[0] == ""){
                BWLProtWarlist[0] = t + " [B]"
            }else{BWLProtWarlist.push(t + " [B]")}
        }
    })
    
    beartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLBearlist[0] == "") {
                BWLBearlist[0] = (t + " ")
            }
            else {
                BWLBearlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLBearlist[0] == "" && t != ""){
                BWLBearlist[0] = t + " [B]"
            }else{BWLBearlist.push(t + " [B]")}
        }
    })
    
    restodruidtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLRestoDruidlist[0] == "") {
                BWLRestoDruidlist[0] = (t + " ")
            }
            else {
                BWLRestoDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLRestoDruidlist[0] == ""){
                BWLRestoDruidlist[0] = t + " [B]"
            }else{BWLRestoDruidlist.push(t + " [B]")}
        }
    })
    
    hpriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLHPriestlist[0] == "") {
                BWLHPriestlist[0] = (t + " ")
            }
            else {
                BWLHPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLHPriestlist[0] == ""){
                BWLHPriestlist[0] = t + " [B]"
            }else{BWLHPriestlist.push(t + " [B]")}
        }
    })
    
    restoshamantemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLRestoShamanlist[0] == "") {
                BWLRestoShamanlist[0] = (t + " ")
            }
            else {
                BWLRestoShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLRestoShamanlist[0] == ""){
                BWLRestoShamanlist[0] = t + " [B]"
            }else{BWLRestoShamanlist.push(t + " [B]")}
        }
    })
    
    balancetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLBalanceDruidlist[0] == "") {
                BWLBalanceDruidlist[0] = (t + " ")
            }
            else {
                BWLBalanceDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLBalanceDruidlist[0] == ""){
                BWLBalanceDruidlist[0] = t + " [B]"
            }else{BWLBalanceDruidlist.push(t + " [B]")}
        }
    })
    
    feraltemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLFeralDruidlist[0] == "") {
                BWLFeralDruidlist[0] = (t + " ")
            }
            else {
                BWLFeralDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLFeralDruidlist[0] == ""){
                BWLFeralDruidlist[0] = t + " [B]"
            }else{BWLFeralDruidlist.push(t + " [B]")}
        }
    })
    
    huntertemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLHunterlist[0] == "") {
                BWLHunterlist[0] = (t + " ")
            }
            else {
                BWLHunterlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLHunterlist[0] == ""){
                BWLHunterlist[0] = t + " [B]"
            }else{BWLHunterlist.push(t + " [B]")}
        }
    })
    
    magetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLMagelist[0] == "") {
                BWLMagelist[0] = (t + " ")
            }
            else {
                BWLMagelist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLMagelist[0] == ""){
                BWLMagelist[0] = t + " [B]"
            }else{BWLMagelist.push(t + " [B]")}
        }
    })
    
    roguetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLRoguelist[0] == "") {
                BWLRoguelist[0] = (t + " ")
            }
            else {
                BWLRoguelist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLRoguelist[0] == ""){
                BWLRoguelist[0] = t + " [B]"
            }else{BWLRoguelist.push(t + " [B]")}
        }
    })
    
    spriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLSPriestlist[0] == "") {
                BWLSPriestlist[0] = (t + " ")
            }
            else {
                BWLSPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLSPriestlist[0] == ""){
                BWLSPriestlist[0] = t + " [B]"
            }else{BWLSPriestlist.push(t + " [B]")}
        }
    })
    
    eletemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLEleShamanlist[0] == "") {
                BWLEleShamanlist[0] = (t + " ")
            }
            else {
                BWLEleShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLEleShamanlist[0] == ""){
                BWLEleShamanlist[0] = t + " [B]"
            }else{BWLEleShamanlist.push(t + " [B]")}
        }
    })
    
    enhtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLEnhShamanlist[0] == "") {
                BWLEnhShamanlist[0] = (t + " ")
            }
            else {
                BWLEnhShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLEnhShamanlist[0] == ""){
                BWLEnhShamanlist[0] = t + " [B]"
            }else{BWLEnhShamanlist.push(t + " [B]")}
        }
    })
    
    dpswartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLDPSWarlist[0] == "") {
                BWLDPSWarlist[0] = (t + " ")
            }
            else {
                BWLDPSWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLDPSWarlist[0] == ""){
                BWLDPSWarlist[0] = t + " [B] "
            }else{BWLDPSWarlist.push(t + " [B] ")}
        }
    })
    
    warlocktemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (BWLWarlocklist[0] == "") {
                BWLWarlocklist[0] = (t + " ")
            }
            else {
                BWLWarlocklist.push(t + " ")
            }
        }else if (t != ""){
            if(BWLWarlocklist[0] == ""){
                BWLWarlocklist[0] = t + " [B]"
            }else{BWLWarlocklist.push(t + " [B]")}
        }
    })

}

async function listBWLBackups() {
    prottemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLProtWarlist[0] == "") {
                BWLProtWarlist[0] = t + " [B]"
            }
            else {
                BWLProtWarlist.push(t + " [B]")
            }
        }
    })
    
    beartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLBearlist[0] == "") {
                BWLBearlist[0] = t + " [B]"
            }
            else {
                BWLBearlist.push(t + " [B]")
            }
        }
    })
    
    restodruidtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLRestoDruidlist[0] == "") {
                BWLRestoDruidlist[0] = t + " [B]"
            }
            else {
                BWLRestoDruidlist.push(t + " [B]")
            }
        }
    })
    
    hpriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLHPriestlist[0] == "") {
                BWLHPriestlist[0] = t + " [B]"
            }
            else {
                BWLHPriestlist.push(t + " [B]")
            }
        }
    })
    
    restoshamantemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLRestoShamanlist[0] == "") {
                BWLRestoShamanlist[0] = t + " [B]"
            }
            else {
                BWLRestoShamanlist.push(t + " [B]")
            }
        }
    })
    
    balancetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLBalanceDruidlist[0] == "") {
                BWLBalanceDruidlist[0] = t + " [B]"
            }
            else {
                BWLBalanceDruidlist.push(t + " [B]")
            }
        }
    })
    
    feraltemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLFeralDruidlist[0] == "") {
                BWLFeralDruidlist[0] = t + " [B]"
            }
            else {
                BWLFeralDruidlist.push(t + " [B]")
            }
        }
    })
    
    huntertemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLHunterlist[0] == "") {
                BWLHunterlist[0] = t + " [B]"
            }
            else {
                BWLHunterlist.push(t + " [B]")
            }
        }
    })
    
    magetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLMagelist[0] == "") {
                BWLMagelist[0] = t + " [B]"
            }
            else {
                BWLMagelist.push(t + " [B]")
            }
        }
    })
    
    roguetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLRoguelist[0] == "") {
                BWLRoguelist[0] = t + " [B]"
            }
            else {
                BWLRoguelist.push(t + " [B]")
            }
        }
    })
    
    spriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLSPriestlist[0] == "") {
                BWLSPriestlist[0] = t + " [B]"
            }
            else {
                BWLSPriestlist.push(t + " [B]")
            }
        }
    })
    
    eletemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLEleShamanlist[0] == "") {
                BWLEleShamanlist[0] = t + " [B]"
            }
            else {
                BWLEleShamanlist.push(t + " [B]")
            }
        }
    })
    
    enhtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLEnhShamanlist[0] == "") {
                BWLEnhShamanlist[0] = t + " [B]"
            }
            else {
                BWLEnhShamanlist.push(t + " [B]")
            }
        }
    })
    
    dpswartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLDPSWarlist[0] == "") {
                BWLDPSWarlist[0] = t + " [B]"
            }
            else {
                BWLDPSWarlist.push(t + " [B]")
            }
        }
    })
    
    warlocktemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (BWLWarlocklist[0] == "") {
                BWLWarlocklist[0] = t + " [B]"
            }
            else {
                BWLWarlocklist.push(t + " [B]")
            }
        }
    })
}


async function fixAQFlists() {

    prottemp = AQFProtWarlist
    beartemp = AQFBearlist
    restodruidtemp = AQFRestoDruidlist
    hpriesttemp = AQFHPriestlist
    restoshamantemp = AQFRestoShamanlist
    balancetemp = AQFBalanceDruidlist
    feraltemp = AQFFeralDruidlist
    huntertemp = AQFHunterlist
    magetemp = AQFMagelist
    roguetemp = AQFRoguelist
    spriesttemp = AQFSPriestlist
    eletemp = AQFEleShamanlist
    enhtemp = AQFEnhShamanlist
    dpswartemp = AQFDPSWarlist
    warlocktemp = AQFWarlocklist

    AQFProtWarlist = [""]
    AQFBearlist = [""]
    AQFRestoDruidlist = [""]
    AQFHPriestlist = [""]
    AQFRestoShamanlist = [""]
    AQFBalanceDruidlist = [""]
    AQFFeralDruidlist = [""]
    AQFHunterlist = [""]
    AQFMagelist = [""]
    AQFRoguelist = [""]
    AQFSPriestlist = [""]
    AQFEleShamanlist = [""]
    AQFEnhShamanlist = [""]
    AQFDPSWarlist = [""]
    AQFWarlocklist = [""]

    prottemp.forEach((t, index) => { prottemp[index] = t.replace(" [B]", "") })
    beartemp.forEach((t, index) => { beartemp[index] = t.replace(" [B]", "") })
    restodruidtemp.forEach((t, index) => { restodruidtemp[index] = t.replace(" [B]", "") })
    hpriesttemp.forEach((t, index) => { hpriesttemp[index] = t.replace(" [B]", "") })
    restoshamantemp.forEach((t, index) => { restoshamantemp[index] = t.replace(" [B]", "") })
    balancetemp.forEach((t, index) => { balancetemp[index] = t.replace(" [B]", "") })
    feraltemp.forEach((t, index) => { feraltemp[index] = t.replace(" [B]", "") })
    huntertemp.forEach((t, index) => { huntertemp[index] = t.replace(" [B]", "") })
    magetemp.forEach((t, index) => { magetemp[index] = t.replace(" [B]", "") })
    roguetemp.forEach((t, index) => { roguetemp[index] = t.replace(" [B]", "") })
    spriesttemp.forEach((t, index) => { spriesttemp[index] = t.replace(" [B]", "") })
    eletemp.forEach((t, index) => { eletemp[index] = t.replace(" [B]", "") })
    enhtemp.forEach((t, index) => { enhtemp[index] = t.replace(" [B]", "") })
    dpswartemp.forEach((t, index) => { dpswartemp[index] = t.replace(" [B]", "") })
    warlocktemp.forEach((t, index) => { warlocktemp[index] = t.replace(" [B]", "") })

await listAQFnorms();
}

async function listAQFnorms() {
    prottemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFProtWarlist[0] == "") {
                AQFProtWarlist[0] = (t + " ")
            }
            else {
                AQFProtWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFProtWarlist[0] == ""){
                AQFProtWarlist[0] = t + " [B]"
            }else{AQFProtWarlist.push(t + " [B]")}
        }
    })
    
    beartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFBearlist[0] == "") {
                AQFBearlist[0] = (t + " ")
            }
            else {
                AQFBearlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFBearlist[0] == "" && t != ""){
                AQFBearlist[0] = t + " [B]"
            }else{AQFBearlist.push(t + " [B]")}
        }
    })
    
    restodruidtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFRestoDruidlist[0] == "") {
                AQFRestoDruidlist[0] = (t + " ")
            }
            else {
                AQFRestoDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFRestoDruidlist[0] == ""){
                AQFRestoDruidlist[0] = t + " [B]"
            }else{AQFRestoDruidlist.push(t + " [B]")}
        }
    })
    
    hpriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFHPriestlist[0] == "") {
                AQFHPriestlist[0] = (t + " ")
            }
            else {
                AQFHPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFHPriestlist[0] == ""){
                AQFHPriestlist[0] = t + " [B]"
            }else{AQFHPriestlist.push(t + " [B]")}
        }
    })
    
    restoshamantemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFRestoShamanlist[0] == "") {
                AQFRestoShamanlist[0] = (t + " ")
            }
            else {
                AQFRestoShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFRestoShamanlist[0] == ""){
                AQFRestoShamanlist[0] = t + " [B]"
            }else{AQFRestoShamanlist.push(t + " [B]")}
        }
    })
    
    balancetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFBalanceDruidlist[0] == "") {
                AQFBalanceDruidlist[0] = (t + " ")
            }
            else {
                AQFBalanceDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFBalanceDruidlist[0] == ""){
                AQFBalanceDruidlist[0] = t + " [B]"
            }else{AQFBalanceDruidlist.push(t + " [B]")}
        }
    })
    
    feraltemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFFeralDruidlist[0] == "") {
                AQFFeralDruidlist[0] = (t + " ")
            }
            else {
                AQFFeralDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFFeralDruidlist[0] == ""){
                AQFFeralDruidlist[0] = t + " [B]"
            }else{AQFFeralDruidlist.push(t + " [B]")}
        }
    })
    
    huntertemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFHunterlist[0] == "") {
                AQFHunterlist[0] = (t + " ")
            }
            else {
                AQFHunterlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFHunterlist[0] == ""){
                AQFHunterlist[0] = t + " [B]"
            }else{AQFHunterlist.push(t + " [B]")}
        }
    })
    
    magetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFMagelist[0] == "") {
                AQFMagelist[0] = (t + " ")
            }
            else {
                AQFMagelist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFMagelist[0] == ""){
                AQFMagelist[0] = t + " [B]"
            }else{AQFMagelist.push(t + " [B]")}
        }
    })
    
    roguetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFRoguelist[0] == "") {
                AQFRoguelist[0] = (t + " ")
            }
            else {
                AQFRoguelist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFRoguelist[0] == ""){
                AQFRoguelist[0] = t + " [B]"
            }else{AQFRoguelist.push(t + " [B]")}
        }
    })
    
    spriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFSPriestlist[0] == "") {
                AQFSPriestlist[0] = (t + " ")
            }
            else {
                AQFSPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFSPriestlist[0] == ""){
                AQFSPriestlist[0] = t + " [B]"
            }else{AQFSPriestlist.push(t + " [B]")}
        }
    })
    
    eletemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFEleShamanlist[0] == "") {
                AQFEleShamanlist[0] = (t + " ")
            }
            else {
                AQFEleShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFEleShamanlist[0] == ""){
                AQFEleShamanlist[0] = t + " [B]"
            }else{AQFEleShamanlist.push(t + " [B]")}
        }
    })
    
    enhtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFEnhShamanlist[0] == "") {
                AQFEnhShamanlist[0] = (t + " ")
            }
            else {
                AQFEnhShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFEnhShamanlist[0] == ""){
                AQFEnhShamanlist[0] = t + " [B]"
            }else{AQFEnhShamanlist.push(t + " [B]")}
        }
    })
    
    dpswartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFDPSWarlist[0] == "") {
                AQFDPSWarlist[0] = (t + " ")
            }
            else {
                AQFDPSWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFDPSWarlist[0] == ""){
                AQFDPSWarlist[0] = t + " [B] "
            }else{AQFDPSWarlist.push(t + " [B] ")}
        }
    })
    
    warlocktemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQFWarlocklist[0] == "") {
                AQFWarlocklist[0] = (t + " ")
            }
            else {
                AQFWarlocklist.push(t + " ")
            }
        }else if (t != ""){
            if(AQFWarlocklist[0] == ""){
                AQFWarlocklist[0] = t + " [B]"
            }else{AQFWarlocklist.push(t + " [B]")}
        }
    })

}

async function fixAQTlists() {

    prottemp = AQTProtWarlist
    beartemp = AQTBearlist
    restodruidtemp = AQTRestoDruidlist
    hpriesttemp = AQTHPriestlist
    restoshamantemp = AQTRestoShamanlist
    balancetemp = AQTBalanceDruidlist
    feraltemp = AQTFeralDruidlist
    huntertemp = AQTHunterlist
    magetemp = AQTMagelist
    roguetemp = AQTRoguelist
    spriesttemp = AQTSPriestlist
    eletemp = AQTEleShamanlist
    enhtemp = AQTEnhShamanlist
    dpswartemp = AQTDPSWarlist
    warlocktemp = AQTWarlocklist

    AQTProtWarlist = [""]
    AQTBearlist = [""]
    AQTRestoDruidlist = [""]
    AQTHPriestlist = [""]
    AQTRestoShamanlist = [""]
    AQTBalanceDruidlist = [""]
    AQTFeralDruidlist = [""]
    AQTHunterlist = [""]
    AQTMagelist = [""]
    AQTRoguelist = [""]
    AQTSPriestlist = [""]
    AQTEleShamanlist = [""]
    AQTEnhShamanlist = [""]
    AQTDPSWarlist = [""]
    AQTWarlocklist = [""]

    prottemp.forEach((t, index) => { prottemp[index] = t.replace(" [B]", "") })
    beartemp.forEach((t, index) => { beartemp[index] = t.replace(" [B]", "") })
    restodruidtemp.forEach((t, index) => { restodruidtemp[index] = t.replace(" [B]", "") })
    hpriesttemp.forEach((t, index) => { hpriesttemp[index] = t.replace(" [B]", "") })
    restoshamantemp.forEach((t, index) => { restoshamantemp[index] = t.replace(" [B]", "") })
    balancetemp.forEach((t, index) => { balancetemp[index] = t.replace(" [B]", "") })
    feraltemp.forEach((t, index) => { feraltemp[index] = t.replace(" [B]", "") })
    huntertemp.forEach((t, index) => { huntertemp[index] = t.replace(" [B]", "") })
    magetemp.forEach((t, index) => { magetemp[index] = t.replace(" [B]", "") })
    roguetemp.forEach((t, index) => { roguetemp[index] = t.replace(" [B]", "") })
    spriesttemp.forEach((t, index) => { spriesttemp[index] = t.replace(" [B]", "") })
    eletemp.forEach((t, index) => { eletemp[index] = t.replace(" [B]", "") })
    enhtemp.forEach((t, index) => { enhtemp[index] = t.replace(" [B]", "") })
    dpswartemp.forEach((t, index) => { dpswartemp[index] = t.replace(" [B]", "") })
    warlocktemp.forEach((t, index) => { warlocktemp[index] = t.replace(" [B]", "") })

await listAQTnorms();
}

async function listAQTnorms() {
    prottemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTProtWarlist[0] == "") {
                AQTProtWarlist[0] = (t + " ")
            }
            else {
                AQTProtWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTProtWarlist[0] == ""){
                AQTProtWarlist[0] = t + " [B]"
            }else{AQTProtWarlist.push(t + " [B]")}
        }
    })
    
    beartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTBearlist[0] == "") {
                AQTBearlist[0] = (t + " ")
            }
            else {
                AQTBearlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTBearlist[0] == "" && t != ""){
                AQTBearlist[0] = t + " [B]"
            }else{AQTBearlist.push(t + " [B]")}
        }
    })
    
    restodruidtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTRestoDruidlist[0] == "") {
                AQTRestoDruidlist[0] = (t + " ")
            }
            else {
                AQTRestoDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTRestoDruidlist[0] == ""){
                AQTRestoDruidlist[0] = t + " [B]"
            }else{AQTRestoDruidlist.push(t + " [B]")}
        }
    })
    
    hpriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTHPriestlist[0] == "") {
                AQTHPriestlist[0] = (t + " ")
            }
            else {
                AQTHPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTHPriestlist[0] == ""){
                AQTHPriestlist[0] = t + " [B]"
            }else{AQTHPriestlist.push(t + " [B]")}
        }
    })
    
    restoshamantemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTRestoShamanlist[0] == "") {
                AQTRestoShamanlist[0] = (t + " ")
            }
            else {
                AQTRestoShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTRestoShamanlist[0] == ""){
                AQTRestoShamanlist[0] = t + " [B]"
            }else{AQTRestoShamanlist.push(t + " [B]")}
        }
    })
    
    balancetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTBalanceDruidlist[0] == "") {
                AQTBalanceDruidlist[0] = (t + " ")
            }
            else {
                AQTBalanceDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTBalanceDruidlist[0] == ""){
                AQTBalanceDruidlist[0] = t + " [B]"
            }else{AQTBalanceDruidlist.push(t + " [B]")}
        }
    })
    
    feraltemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTFeralDruidlist[0] == "") {
                AQTFeralDruidlist[0] = (t + " ")
            }
            else {
                AQTFeralDruidlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTFeralDruidlist[0] == ""){
                AQTFeralDruidlist[0] = t + " [B]"
            }else{AQTFeralDruidlist.push(t + " [B]")}
        }
    })
    
    huntertemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTHunterlist[0] == "") {
                AQTHunterlist[0] = (t + " ")
            }
            else {
                AQTHunterlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTHunterlist[0] == ""){
                AQTHunterlist[0] = t + " [B]"
            }else{AQTHunterlist.push(t + " [B]")}
        }
    })
    
    magetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTMagelist[0] == "") {
                AQTMagelist[0] = (t + " ")
            }
            else {
                AQTMagelist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTMagelist[0] == ""){
                AQTMagelist[0] = t + " [B]"
            }else{AQTMagelist.push(t + " [B]")}
        }
    })
    
    roguetemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTRoguelist[0] == "") {
                AQTRoguelist[0] = (t + " ")
            }
            else {
                AQTRoguelist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTRoguelist[0] == ""){
                AQTRoguelist[0] = t + " [B]"
            }else{AQTRoguelist.push(t + " [B]")}
        }
    })
    
    spriesttemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTSPriestlist[0] == "") {
                AQTSPriestlist[0] = (t + " ")
            }
            else {
                AQTSPriestlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTSPriestlist[0] == ""){
                AQTSPriestlist[0] = t + " [B]"
            }else{AQTSPriestlist.push(t + " [B]")}
        }
    })
    
    eletemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTEleShamanlist[0] == "") {
                AQTEleShamanlist[0] = (t + " ")
            }
            else {
                AQTEleShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTEleShamanlist[0] == ""){
                AQTEleShamanlist[0] = t + " [B]"
            }else{AQTEleShamanlist.push(t + " [B]")}
        }
    })
    
    enhtemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTEnhShamanlist[0] == "") {
                AQTEnhShamanlist[0] = (t + " ")
            }
            else {
                AQTEnhShamanlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTEnhShamanlist[0] == ""){
                AQTEnhShamanlist[0] = t + " [B]"
            }else{AQTEnhShamanlist.push(t + " [B]")}
        }
    })
    
    dpswartemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTDPSWarlist[0] == "") {
                AQTDPSWarlist[0] = (t + " ")
            }
            else {
                AQTDPSWarlist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTDPSWarlist[0] == ""){
                AQTDPSWarlist[0] = t + " [B] "
            }else{AQTDPSWarlist.push(t + " [B] ")}
        }
    })
    
    warlocktemp.forEach((t) => {
        t = t.replace(/ {1,1000}/g, "")
        if (checkmembership(t)) {
            if (AQTWarlocklist[0] == "") {
                AQTWarlocklist[0] = (t + " ")
            }
            else {
                AQTWarlocklist.push(t + " ")
            }
        }else if (t != ""){
            if(AQTWarlocklist[0] == ""){
                AQTWarlocklist[0] = t + " [B]"
            }else{AQTWarlocklist.push(t + " [B]")}
        }
    })

}

async function listAQFBackups() {
    prottemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFProtWarlist[0] == "") {
                AQFProtWarlist[0] = t + " [B]"
            }
            else {
                AQFProtWarlist.push(t + " [B]")
            }
        }
    })
    
    beartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFBearlist[0] == "") {
                AQFBearlist[0] = t + " [B]"
            }
            else {
                AQFBearlist.push(t + " [B]")
            }
        }
    })
    
    restodruidtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFRestoDruidlist[0] == "") {
                AQFRestoDruidlist[0] = t + " [B]"
            }
            else {
                AQFRestoDruidlist.push(t + " [B]")
            }
        }
    })
    
    hpriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFHPriestlist[0] == "") {
                AQFHPriestlist[0] = t + " [B]"
            }
            else {
                AQFHPriestlist.push(t + " [B]")
            }
        }
    })
    
    restoshamantemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFRestoShamanlist[0] == "") {
                AQFRestoShamanlist[0] = t + " [B]"
            }
            else {
                AQFRestoShamanlist.push(t + " [B]")
            }
        }
    })
    
    balancetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFBalanceDruidlist[0] == "") {
                AQFBalanceDruidlist[0] = t + " [B]"
            }
            else {
                AQFBalanceDruidlist.push(t + " [B]")
            }
        }
    })
    
    feraltemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFFeralDruidlist[0] == "") {
                AQFFeralDruidlist[0] = t + " [B]"
            }
            else {
                AQFFeralDruidlist.push(t + " [B]")
            }
        }
    })
    
    huntertemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFHunterlist[0] == "") {
                AQFHunterlist[0] = t + " [B]"
            }
            else {
                AQFHunterlist.push(t + " [B]")
            }
        }
    })
    
    magetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFMagelist[0] == "") {
                AQFMagelist[0] = t + " [B]"
            }
            else {
                AQFMagelist.push(t + " [B]")
            }
        }
    })
    
    roguetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFRoguelist[0] == "") {
                AQFRoguelist[0] = t + " [B]"
            }
            else {
                AQFRoguelist.push(t + " [B]")
            }
        }
    })
    
    spriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFSPriestlist[0] == "") {
                AQFSPriestlist[0] = t + " [B]"
            }
            else {
                AQFSPriestlist.push(t + " [B]")
            }
        }
    })
    
    eletemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFEleShamanlist[0] == "") {
                AQFEleShamanlist[0] = t + " [B]"
            }
            else {
                AQFEleShamanlist.push(t + " [B]")
            }
        }
    })
    
    enhtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFEnhShamanlist[0] == "") {
                AQFEnhShamanlist[0] = t + " [B]"
            }
            else {
                AQFEnhShamanlist.push(t + " [B]")
            }
        }
    })
    
    dpswartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFDPSWarlist[0] == "") {
                AQFDPSWarlist[0] = t + " [B]"
            }
            else {
                AQFDPSWarlist.push(t + " [B]")
            }
        }
    })
    
    warlocktemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQFWarlocklist[0] == "") {
                AQFWarlocklist[0] = t + " [B]"
            }
            else {
                AQFWarlocklist.push(t + " [B]")
            }
        }
    })
}

async function listAQTBackups() {
    prottemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTProtWarlist[0] == "") {
                AQTProtWarlist[0] = t + " [B]"
            }
            else {
                AQTProtWarlist.push(t + " [B]")
            }
        }
    })
    
    beartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTBearlist[0] == "") {
                AQTBearlist[0] = t + " [B]"
            }
            else {
                AQTBearlist.push(t + " [B]")
            }
        }
    })
    
    restodruidtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTRestoDruidlist[0] == "") {
                AQTRestoDruidlist[0] = t + " [B]"
            }
            else {
                AQTRestoDruidlist.push(t + " [B]")
            }
        }
    })
    
    hpriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTHPriestlist[0] == "") {
                AQTHPriestlist[0] = t + " [B]"
            }
            else {
                AQTHPriestlist.push(t + " [B]")
            }
        }
    })
    
    restoshamantemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTRestoShamanlist[0] == "") {
                AQTRestoShamanlist[0] = t + " [B]"
            }
            else {
                AQTRestoShamanlist.push(t + " [B]")
            }
        }
    })
    
    balancetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTBalanceDruidlist[0] == "") {
                AQTBalanceDruidlist[0] = t + " [B]"
            }
            else {
                AQTBalanceDruidlist.push(t + " [B]")
            }
        }
    })
    
    feraltemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTFeralDruidlist[0] == "") {
                AQTFeralDruidlist[0] = t + " [B]"
            }
            else {
                AQTFeralDruidlist.push(t + " [B]")
            }
        }
    })
    
    huntertemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTHunterlist[0] == "") {
                AQTHunterlist[0] = t + " [B]"
            }
            else {
                AQTHunterlist.push(t + " [B]")
            }
        }
    })
    
    magetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTMagelist[0] == "") {
                AQTMagelist[0] = t + " [B]"
            }
            else {
                AQTMagelist.push(t + " [B]")
            }
        }
    })
    
    roguetemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTRoguelist[0] == "") {
                AQTRoguelist[0] = t + " [B]"
            }
            else {
                AQTRoguelist.push(t + " [B]")
            }
        }
    })
    
    spriesttemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTSPriestlist[0] == "") {
                AQTSPriestlist[0] = t + " [B]"
            }
            else {
                AQTSPriestlist.push(t + " [B]")
            }
        }
    })
    
    eletemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTEleShamanlist[0] == "") {
                AQTEleShamanlist[0] = t + " [B]"
            }
            else {
                AQTEleShamanlist.push(t + " [B]")
            }
        }
    })
    
    enhtemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTEnhShamanlist[0] == "") {
                AQTEnhShamanlist[0] = t + " [B]"
            }
            else {
                AQTEnhShamanlist.push(t + " [B]")
            }
        }
    })
    
    dpswartemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTDPSWarlist[0] == "") {
                AQTDPSWarlist[0] = t + " [B]"
            }
            else {
                AQTDPSWarlist.push(t + " [B]")
            }
        }
    })
    
    warlocktemp.forEach((t) => {
        if (checkmembership(t) == "Backup") {
            if (AQTWarlocklist[0] == "") {
                AQTWarlocklist[0] = t + " [B]"
            }
            else {
                AQTWarlocklist.push(t + " [B]")
            }
        }
    })
}


function checkmembership(membername) {
    if(membername.length > 1){
    var memberrole = "Backup"
    bot.guilds.cache.find(g => g.name == "Hellscream").members.cache.forEach((member) => {
            if (membername.startsWith(member.displayName)) {
                if (member.roles.cache.some(r => raiderclassification.includes(r.name))) {
                    memberrole = "Raider"
                } else if (member.roles.cache.some(r => userclassification.includes(r.name))){
                    memberrole = "User"
                } else if (member.roles.cache.some(r => trialclassification.includes(r.name))){
                    memberrole = "Trial"
                } else if (membername.match(/\[Alt\]/i)){
                    memberrole = "Alt"
                } else if (membername.match(/\[B\]/i)) {
                    memberrole = "Backup"
                } else (memberrole = "Backup")
            }
        })
    return memberrole
}
}


async function removeraid(raid, user) {
user = user.replace('','')
user = user.replace('[B]','')
    if (raid.match(/mc/i)) {
        MCmeleelist.forEach((member, index) => {
            if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
                MCmeleelist.splice(index, 1)
            }
        })
        MCrangedlist.forEach((member, index) => {
            if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
                MCrangedlist.splice(index, 1)
            }
        })

        MChealerlist.forEach((member, index) => {
            if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
                MChealerlist.splice(index, 1)
            }
        })

        MCtanklist.forEach((member, index) => {
            if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
                MCtanklist.splice(index, 1)
            }
        })
        createraidpost(raid)   
    }
    else if (raid.match(/ZG/i)) {
        splicefromzg(user).then(async function() {
            createraidpost(raid)})
    }
    else if (raid.match(/BWL/i)) {
        splicefrombwl(user).then(async function() {
            createraidpost(raid)})
    }
    else if (raid.match(/AQF/i)) {
        splicefromAQF(user).then(async function() {
            createraidpost(raid)})
    }
    else if (raid.match(/AQT/i)) {
        splicefromAQT(user).then(async function() {
            createraidpost(raid)})
    }

}

async function splicefrombwl(user){
    BWLProtWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLProtWarlist.splice(index, 1)
        }
    })
    BWLBearlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLBearlist.splice(index, 1)
        }
    })
    BWLRestoDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLRestoDruidlist.splice(index, 1)
        }
    })
    BWLHPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLHPriestlist.splice(index, 1)
        }
    })
    BWLRestoShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLRestoShamanlist.splice(index, 1)
        }
    })
    BWLBalanceDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLBalanceDruidlist.splice(index, 1)
        }
    })
    BWLFeralDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLFeralDruidlist.splice(index, 1)
        }
    })
    BWLHunterlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLHunterlist.splice(index, 1)
        }
    })
    BWLMagelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLMagelist.splice(index, 1)
        }
    })
    BWLRoguelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLRoguelist.splice(index, 1)
        }
    })
    BWLSPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLSPriestlist.splice(index, 1)
        }
    })
    BWLEleShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLEleShamanlist.splice(index, 1)
        }
    })
    BWLEnhShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLEnhShamanlist.splice(index, 1)
        }
    })
    BWLDPSWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            BWLDPSWarlist.splice(index, 1)
        }
    })
    BWLWarlocklist.forEach((member, index) => {
        if (member.startsWith(user) || member.startsWith("[B]" + user)) {
            BWLWarlocklist.splice(index, 1)
        }
    })
}


async function splicefromAQF(user){
    AQFProtWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFProtWarlist.splice(index, 1)
        }
    })
    AQFBearlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFBearlist.splice(index, 1)
        }
    })
    AQFRestoDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFRestoDruidlist.splice(index, 1)
        }
    })
    AQFHPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFHPriestlist.splice(index, 1)
        }
    })
    AQFRestoShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFRestoShamanlist.splice(index, 1)
        }
    })
    AQFBalanceDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFBalanceDruidlist.splice(index, 1)
        }
    })
    AQFFeralDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFFeralDruidlist.splice(index, 1)
        }
    })
    AQFHunterlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFHunterlist.splice(index, 1)
        }
    })
    AQFMagelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFMagelist.splice(index, 1)
        }
    })
    AQFRoguelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFRoguelist.splice(index, 1)
        }
    })
    AQFSPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFSPriestlist.splice(index, 1)
        }
    })
    AQFEleShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFEleShamanlist.splice(index, 1)
        }
    })
    AQFEnhShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFEnhShamanlist.splice(index, 1)
        }
    })
    AQFDPSWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQFDPSWarlist.splice(index, 1)
        }
    })
    AQFWarlocklist.forEach((member, index) => {
        if (member.startsWith(user) || member.startsWith("[B]" + user)) {
            AQFWarlocklist.splice(index, 1)
        }
    })
}


async function splicefromAQT(user){
    AQTProtWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTProtWarlist.splice(index, 1)
        }
    })
    AQTBearlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTBearlist.splice(index, 1)
        }
    })
    AQTRestoDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTRestoDruidlist.splice(index, 1)
        }
    })
    AQTHPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTHPriestlist.splice(index, 1)
        }
    })
    AQTRestoShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTRestoShamanlist.splice(index, 1)
        }
    })
    AQTBalanceDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTBalanceDruidlist.splice(index, 1)
        }
    })
    AQTFeralDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTFeralDruidlist.splice(index, 1)
        }
    })
    AQTHunterlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTHunterlist.splice(index, 1)
        }
    })
    AQTMagelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTMagelist.splice(index, 1)
        }
    })
    AQTRoguelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTRoguelist.splice(index, 1)
        }
    })
    AQTSPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTSPriestlist.splice(index, 1)
        }
    })
    AQTEleShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTEleShamanlist.splice(index, 1)
        }
    })
    AQTEnhShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTEnhShamanlist.splice(index, 1)
        }
    })
    AQTDPSWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            AQTDPSWarlist.splice(index, 1)
        }
    })
    AQTWarlocklist.forEach((member, index) => {
        if (member.startsWith(user) || member.startsWith("[B]" + user)) {
            AQTWarlocklist.splice(index, 1)
        }
    })
}




async function splicefromzg(user){
    ZGProtWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGProtWarlist.splice(index, 1)
        }
    })
    ZGBearlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGBearlist.splice(index, 1)
        }
    })
    ZGRestoDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGRestoDruidlist.splice(index, 1)
        }
    })
    ZGHPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGHPriestlist.splice(index, 1)
        }
    })
    ZGRestoShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGRestoShamanlist.splice(index, 1)
        }
    })
    ZGBalanceDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGBalanceDruidlist.splice(index, 1)
        }
    })
    ZGFeralDruidlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGFeralDruidlist.splice(index, 1)
        }
    })
    ZGHunterlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGHunterlist.splice(index, 1)
        }
    })
    ZGMagelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGMagelist.splice(index, 1)
        }
    })
    ZGRoguelist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGRoguelist.splice(index, 1)
        }
    })
    ZGSPriestlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGSPriestlist.splice(index, 1)
        }
    })
    ZGEleShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGEleShamanlist.splice(index, 1)
        }
    })
    ZGEnhShamanlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGEnhShamanlist.splice(index, 1)
        }
    })
    ZGDPSWarlist.forEach((member, index) => {
        if (member.startsWith(user + " ") || member.startsWith("[B]" + user + " ") || member.startsWith("[Alt]" + user + " ")) {
            ZGDPSWarlist.splice(index, 1)
        }
    })
    ZGWarlocklist.forEach((member, index) => {
        if (member.startsWith(user) || member.startsWith("[B]" + user)) {
            ZGWarlocklist.splice(index, 1)
        }
    })
}

function defaultraidmessage(raidn) {
    if (raidn.match(/mc/i)) {
        raidinitmessage = "__**Molten Core Signup List | " + MCWeekday + " " + MCdate + " at " + MCTime + "**__"
    }
    else if (raidn.match(/ZG/i)) {
        raidinitmessage = "__**Zul\'Gurub Signup List | " + ZGWeekday + " " + ZGdate + " at " + ZGTime + "**__"
    }
    else if (raidn.match(/BWL/i)) {
        raidinitmessage = "__**Blackwing Lair Signup List | " + BWLWeekday + " " + BWLdate + " at " + BWLTime + "**__"
    }
    else if (raidn.match(/AQF/i)) {
        raidinitmessage = "__**Temple of Ahn'Qiraj (40) Signup List | " + AQFWeekday + " " + AQFdate + " at " + AQFTime + "**__"
    }
    else if (raidn.match(/AQT/i)) {
        raidinitmessage = "__**Ruins of Ahn'Qiraj (20) Signup List | " + AQTWeekday + " " + AQTdate + " at " + AQTTime + "**__"
    }
    else {
        defaultoutput.send("Something went wrong setting default messages")
    }
}

async function getraidposts() {
                await bot.channels.cache.find(output => output.name == "molten-core").messages.fetch({ limit: 100 }).then(messages => {
                    if (messages.size > 0) {
                        if (messages.last().author == bot.user) {
                            MCPost = messages.last()
                        }
                        else { channel.send("I'm not the first to post here, please fix!") }
                    } else { channel.send("MC raidpost is broken, please fix") }
                })

                await bot.channels.cache.find(output => output.name == "zul-gurub").messages.fetch({ limit: 100 }).then(messages => {
                    if (messages.size > 0) {
                        if (messages.last().author == bot.user) {
                            ZGPost = messages.last()
                        }
                        else { channel.send("I'm not the first to post here, please fix!") }
                    } else { channel.send("ZG raidpost is broken, please fix") }
                })
                
                await bot.channels.cache.find(output => output.name == "bwl").messages.fetch({ limit: 100 }).then(messages => {
                    if (messages.size > 0) {
                        if (messages.last().author == bot.user) {
                            BWLPost = messages.last()
                        }
                        else { channel.send("I'm not the first to post here, please fix!") }
                    } else { channel.send("BWL raidpost is broken, please fix") }
                })
                await bot.channels.cache.find(output => output.name == "aq40").messages.fetch({ limit: 100 }).then(messages => {
                    if (messages.size > 0) {
                        if (messages.last().author == bot.user) {
                            AQFPost = messages.last()
                        }
                        else { channel.send("I'm not the first to post here, please fix!") }
                    } else { channel.send("AQ40 raidpost is broken, please fix") }
                })
                await bot.channels.cache.find(output => output.name == "aq20").messages.fetch({ limit: 100 }).then(messages => {
                    if (messages.size > 0) {
                        if (messages.last().author == bot.user) {
                            AQTPost = messages.last()
                        }
                        else { channel.send("I'm not the first to post here, please fix!") }
                    } else { channel.send("AQ20 raidpost is broken, please fix") }
                })
}

async function assignmember(reaction, user) {
    let found = false
    let tempo = '\\[B\\]' + reaction.message.guild.member(user).displayName
    let tempo2 = '\\[Alt\\]' + reaction.message.guild.member(user).displayName
    if (reaction.message == MCPost && ((MCPost.content.toString().match(tempo2) && reaction.emoji.name == 'Backup') || (MCPost.content.toString().match(tempo) && reaction.emoji.name == 'Alt'))){
        user.send('You can\'t have both alt and backup status, remove your other status first')
    }
    else if (reaction.emoji.name == 'Alt' && reaction.message == MCPost){
        if (MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            MCtanklist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = MCtanklist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MCtanklist.splice(index,1)
                MCtanklist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                MCtanklist[index] = MCtanklist[index].replace('[Alt]','')
            }})

            
            MChealerlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = MChealerlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MChealerlist.splice(index,1)
                MChealerlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found = true
                MChealerlist[index] = MChealerlist[index].replace('[Alt]','')
            }})

            
            MCrangedlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = MCrangedlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MCrangedlist.splice(index,1)
                MCrangedlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found = true
                MCrangedlist[index] = MCrangedlist[index].replace('[Alt]','')
            }})

            
            MCmeleelist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = MCmeleelist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MCmeleelist.splice(index,1)
                MCmeleelist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found = true
                MCmeleelist[index] = MCmeleelist[index].replace('[Alt]','')
            }})
        } else {user.send('You need to assign yourself a role first - Try again after signing up')}
       
        createraidpost("MC")

    } else if (reaction.emoji.name == 'Backup' && reaction.message == MCPost){
        if (MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            MCtanklist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName)){
                let suffix = MCtanklist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MCtanklist[index] = '[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix
            }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName)){
                MCtanklist[index] = MCtanklist[index].replace('[B]','')
            }})

            
            MChealerlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName)){
                let suffix = MChealerlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MChealerlist[index] = '[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix
            }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName)){
                MChealerlist[index] = MChealerlist[index].replace('[B]','')
            }})

            
            MCrangedlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName)){
                let suffix = MCrangedlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MCrangedlist[index] = '[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix
            }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName)){
                MCrangedlist[index] = MCrangedlist[index].replace('[B]','')
            }})

            
            MCmeleelist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName)){
                let suffix = MCmeleelist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                MCmeleelist[index] = '[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix
            }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName)){
                MCmeleelist[index] = MCmeleelist[index].replace('[B]','')
            }})
        } else {user.send('You need to assign yourself a role first - Try again after signing up')}
        
        createraidpost("MC")
    } 
    if (reaction.message == ZGPost && ((ZGPost.content.toString().match(tempo2) && reaction.emoji.name == 'Backup') || (ZGPost.content.toString().match(tempo) && reaction.emoji.name == 'Alt'))){
        user.send('You can\'t have both alt and backup status, remove your other status first')
    }
    else if (reaction.emoji.name == 'Alt' && reaction.message == ZGPost){
        if (ZGPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            ZGProtWarlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGProtWarlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGProtWarlist.splice(index,1)
                ZGProtWarlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGProtWarlist[index] = ZGProtWarlist[index].replace('[Alt]','')
            }})
            
            ZGBalanceDruidlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGBalanceDruidlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGBalanceDruidlist.splice(index,1)
                ZGBalanceDruidlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGBalanceDruidlist[index] = ZGBalanceDruidlist[index].replace('[Alt]','')
            }})
            
            ZGHPriestlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGHPriestlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGHPriestlist.splice(index,1)
                ZGHPriestlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGHPriestlist[index] = ZGHPriestlist[index].replace('[Alt]','')
            }})
            
            ZGRestoShamanlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGRestoShamanlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGRestoShamanlist.splice(index,1)
                ZGRestoShamanlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGRestoShamanlist[index] = ZGRestoShamanlist[index].replace('[Alt]','')
            }})
            
            ZGDPSWarlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGDPSWarlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGDPSWarlist.splice(index,1)
                ZGDPSWarlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGDPSWarlist[index] = ZGDPSWarlist[index].replace('[Alt]','')
            }})
            
            ZGRoguelist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGRoguelist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGRoguelist.splice(index,1)
                ZGRoguelist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGRoguelist[index] = ZGRoguelist[index].replace('[Alt]','')
            }})
            
            ZGWarlocklist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGWarlocklist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGWarlocklist.splice(index,1)
                ZGWarlocklist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGWarlocklist[index] = ZGWarlocklist[index].replace('[Alt]','')
            }})
            
            ZGHunterlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGHunterlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGHunterlist.splice(index,1)
                ZGHunterlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGHunterlist[index] = ZGHunterlist[index].replace('[Alt]','')
            }})
            
            ZGMagelist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGMagelist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGMagelist.splice(index,1)
                ZGMagelist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGMagelist[index] = ZGMagelist[index].replace('[Alt]','')
            }})
            
            ZGBearlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGBearlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGBearlist.splice(index,1)
                ZGBearlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGBearlist[index] = ZGBearlist[index].replace('[Alt]','')
            }})
            
            ZGRestoDruidlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGRestoDruidlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGRestoDruidlist.splice(index,1)
                ZGRestoDruidlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGRestoDruidlist[index] = ZGRestoDruidlist[index].replace('[Alt]','')
            }})
            
            ZGFeralDruidlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGFeralDruidlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGFeralDruidlist.splice(index,1)
                ZGFeralDruidlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGFeralDruidlist[index] = ZGFeralDruidlist[index].replace('[Alt]','')
            }})
            
            ZGSPriestlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGSPriestlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGSPriestlist.splice(index,1)
                ZGSPriestlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGSPriestlist[index] = ZGSPriestlist[index].replace('[Alt]','')
            }})
            
            ZGEleShamanlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGEleShamanlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGEleShamanlist.splice(index,1)
                ZGEleShamanlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGEleShamanlist[index] = ZGEleShamanlist[index].replace('[Alt]','')
            }})
            
            ZGEnhShamanlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                found = true
                let suffix = ZGEnhShamanlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                ZGEnhShamanlist.splice(index,1)
                ZGEnhShamanlist.push('[Alt]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
            }else if(t.startsWith('[Alt]' + reaction.message.guild.member(user).displayName) && found == false){
                found == true
                ZGEnhShamanlist[index] = ZGEnhShamanlist[index].replace('[Alt]','')
            }})
        } else {user.send('You need to assign yourself a role first - Try again after signing up')}
       
        createraidpost("ZG")
    }
        else if (reaction.emoji.name == 'Backup' && reaction.message == ZGPost){
            if (ZGPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
                ZGProtWarlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGProtWarlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGProtWarlist.splice(index,1)
                    ZGProtWarlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGProtWarlist[index] = ZGProtWarlist[index].replace('[B]','')
                }})
                
                ZGBalanceDruidlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGBalanceDruidlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGBalanceDruidlist.splice(index,1)
                    ZGBalanceDruidlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGBalanceDruidlist[index] = ZGBalanceDruidlist[index].replace('[B]','')
                }})
                
                ZGHPriestlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGHPriestlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGHPriestlist.splice(index,1)
                    ZGHPriestlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGHPriestlist[index] = ZGHPriestlist[index].replace('[B]','')
                }})
                
                ZGRestoShamanlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGRestoShamanlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGRestoShamanlist.splice(index,1)
                    ZGRestoShamanlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGRestoShamanlist[index] = ZGRestoShamanlist[index].replace('[B]','')
                }})
                
                ZGDPSWarlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGDPSWarlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGDPSWarlist.splice(index,1)
                    ZGDPSWarlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGDPSWarlist[index] = ZGDPSWarlist[index].replace('[B]','')
                }})
                
                ZGRoguelist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGRoguelist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGRoguelist.splice(index,1)
                    ZGRoguelist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGRoguelist[index] = ZGRoguelist[index].replace('[B]','')
                }})
                
                ZGWarlocklist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGWarlocklist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGWarlocklist.splice(index,1)
                    ZGWarlocklist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGWarlocklist[index] = ZGWarlocklist[index].replace('[B]','')
                }})
                
                ZGHunterlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGHunterlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGHunterlist.splice(index,1)
                    ZGHunterlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGHunterlist[index] = ZGHunterlist[index].replace('[B]','')
                }})
                
                ZGMagelist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGMagelist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGMagelist.splice(index,1)
                    ZGMagelist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGMagelist[index] = ZGMagelist[index].replace('[B]','')
                }})
                
                ZGBearlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGBearlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGBearlist.splice(index,1)
                    ZGBearlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGBearlist[index] = ZGBearlist[index].replace('[B]','')
                }})
                
                ZGRestoDruidlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGRestoDruidlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGRestoDruidlist.splice(index,1)
                    ZGRestoDruidlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGRestoDruidlist[index] = ZGRestoDruidlist[index].replace('[B]','')
                }})
                
                ZGFeralDruidlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGFeralDruidlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGFeralDruidlist.splice(index,1)
                    ZGFeralDruidlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGFeralDruidlist[index] = ZGFeralDruidlist[index].replace('[B]','')
                }})
                
                ZGSPriestlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGSPriestlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGSPriestlist.splice(index,1)
                    ZGSPriestlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGSPriestlist[index] = ZGSPriestlist[index].replace('[B]','')
                }})
                
                ZGEleShamanlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGEleShamanlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGEleShamanlist.splice(index,1)
                    ZGEleShamanlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGEleShamanlist[index] = ZGEleShamanlist[index].replace('[B]','')
                }})
                
                ZGEnhShamanlist.forEach((t,index) => {if (t.startsWith(reaction.message.guild.member(user).displayName) && found == false){
                    found = true
                    let suffix = ZGEnhShamanlist[index].replace(reaction.message.guild.member(user).displayName + ' ','')
                    ZGEnhShamanlist.splice(index,1)
                    ZGEnhShamanlist.push('[B]' + reaction.message.guild.member(user).displayName + ' ' + suffix)
                }else if(t.startsWith('[B]' + reaction.message.guild.member(user).displayName) && found == false){
                    found == true
                    ZGEnhShamanlist[index] = ZGEnhShamanlist[index].replace('[B]','')
                }})
            
        } else {user.send('You need to assign yourself a role first - Try again after signing up')}
        
        createraidpost("ZG")
}
    else if (reaction.message == MCPost || reaction.message == ZGPost || reaction.message == BWLPost || reaction.message == AQFPost || reaction.message == AQTPost) {
        var raidername = reaction.message.guild.member(user).displayName
        let WoWclass
        let WoWrole
        console.log(reaction.emoji.name)
        if (reaction.emoji.name == "BalanceDruid") {
            WoWclass = "Druid"
            WoWrole = "Ranged"
        }
        else if (reaction.emoji.name == "ProtWarrior") {
            WoWclass = "Warrior"
            WoWrole = "Tank"
        }
        else if (reaction.emoji.name == "SPriest") {
            WoWclass = "Priest"
            WoWrole = "Ranged"
        }
        else if (reaction.emoji.name == "Rogue") {
            WoWclass = "Rogue"
            WoWrole = "Melee"
        }
        else if (reaction.emoji.name == "EleShaman") {
            WoWclass = "Shaman"
            WoWrole = "Ranged"
        }
        else if (reaction.emoji.name == "Hunter") {
            WoWclass = "Hunter"
            WoWrole = "Ranged"
        }
        else if (reaction.emoji.name == "Mage") {
            WoWclass = "Mage"
            WoWrole = "Ranged"
        }
        else if (reaction.emoji.name == "HPriest") {
            WoWclass = "Priest"
            WoWrole = "Healer"
        }
        else if (reaction.emoji.name == "Warlock") {
            WoWclass = "Warlock"
            WoWrole = "Ranged"
        }
        else if (reaction.emoji.name == "EnhShaman") {
            WoWclass = "Shaman"
            WoWrole = "Melee"
        }
        else if (reaction.emoji.name == "RestoShaman") {
            WoWclass = "Shaman"
            WoWrole = "Healer"
        }
        else if (reaction.emoji.name == "BearDruid") {
            WoWclass = "Druid"
            WoWrole = "Tank"
        }
        else if (reaction.emoji.name == "KittyDruid") {
            WoWclass = "Druid"
            WoWrole = "Melee"
        }
        else if (reaction.emoji.name == "DPSWarrior") {
            WoWclass = "Warrior"
            WoWrole = "Melee"
        }
        else if (reaction.emoji.name == "RestoDruid") {
            WoWclass = "Druid"
            WoWrole = "Healer"
        }

        if (reaction.message == MCPost) {
            if (reaction.emoji.name != "RemoveMe" && !MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")) {
                addMC(raidername, WoWclass, WoWrole)
                botlog(raidername + " is assigned to MC as " + WoWclass.toLowerCase() + ", role " + WoWrole.toLowerCase())
            }
            else if (reaction.emoji.name == "RemoveMe" && MCPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
                removeraid("mc", raidername)
                botlog(raidername + " is unassigned from Molten Core")
            }
        }
        else if (reaction.message == ZGPost) {
            if (reaction.emoji.name != "RemoveMe" && !ZGPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")) {
                addZG(raidername, WoWclass, WoWrole)
                botlog(raidername + " is assigned to ZG as " + WoWclass.toLowerCase() + ", role " + WoWrole.toLowerCase())
            }
            else if (reaction.emoji.name == "RemoveMe" && ZGPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
                removeraid("ZG", raidername)
                botlog(raidername + " is unassigned from ZG")
            }
        } 
            else if (reaction.message == BWLPost) {
                if (reaction.emoji.name != "RemoveMe" && !BWLPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")) {
                    addBWL(raidername, WoWclass, WoWrole)
                    botlog(raidername + " is assigned to BWL as " + WoWclass.toLowerCase() + ", role " + WoWrole.toLowerCase())
                }
                else if (reaction.emoji.name == "RemoveMe" && BWLPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
                    removeraid("BWL", raidername)
                    botlog(raidername + " is unassigned from BWL")
                }
        }
        else if (reaction.message == AQFPost) {
            if (reaction.emoji.name != "RemoveMe" && !AQFPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")) {
                addAQF(raidername, WoWclass, WoWrole)
                botlog(raidername + " is assigned to AQF as " + WoWclass.toLowerCase() + ", role " + WoWrole.toLowerCase())
            }
            else if (reaction.emoji.name == "RemoveMe" && AQFPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
                removeraid("AQF", raidername)
                botlog(raidername + " is unassigned from AQF")
            }
    }
    else if (reaction.message == AQTPost) {
        if (reaction.emoji.name != "RemoveMe" && !AQTPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")) {
            addAQT(raidername, WoWclass, WoWrole)
            botlog(raidername + " is assigned to AQT as " + WoWclass.toLowerCase() + ", role " + WoWrole.toLowerCase())
        }
        else if (reaction.emoji.name == "RemoveMe" && AQTPost.content.toString().match(reaction.message.guild.member(user).displayName + " ")){
            removeraid("AQT", raidername)
            botlog(raidername + " is unassigned from AQT")
        }
}
    }
}

async function makeGiveaway(args){
    
    if(args.match(/\d{1,2}\/\d{1,2}\-\d{2,4}\s\d{2}:\d{2}/i)){
    var tempday = args.replace(/\/.*/i,"")
    var giftday = tempday

    var tempmonth = args.replace(/.*\//i,"");
    var tempmonth2 = tempmonth.replace(/\-.*/i,"")
    var giftmonth = tempmonth2

    var tempyear = args.replace(/.*?-/i,"")
    var tempyear2 = tempyear.replace(/\s\d{2}:.*/i,"")
    if(tempyear2.length > 3){
        tempyear2 = tempyear2.replace(/.{2}/,"")
    }
    var giftyear = "20"+tempyear2

    var temptime = args.replace(/.*\-\d{2,4}\s/i,"")
    var temptime2 = temptime.replace(/[^\d{1,2}:\d{1,2}].*/i,"")
    var gifttime = temptime2

    var tempitem = args.replace(/.*\d{2}:\d{2}\s/i,"")
    var giftitem =  tempitem.replace("  "," ")

    var expirationdate = new Date(giftyear+"-"+giftmonth+"-"+giftday+" "+gifttime);
    var today = new Date();

    var timer = expirationdate-today
    if(timer > 0){

    bot.channels.cache.find(output => output.name == "giveaway").send('** @everyone NEW GIVEAWAY STARTED FOR '+ giftitem + "**" + "\nJust react with " + bot.guilds.cache.find(g => g.name == 'Hellscream').emojis.cache.find(e => e.name == 'Giveaway').toString() + " below to join the draw!" + "\nGiveaway expires " + giftday.toString() + "\/" + giftmonth.toString() + "-" + giftyear.toString() + " " + gifttime.toString()).then(sent =>{
        let id = sent.id
        sent.react(sent.guild.emojis.cache.find(emoji => emoji.name == "Giveaway"))
            setTimeout(gawinner, timer, id, giftitem)
            
    })}else{defaultoutput.send('You can\'t make a giveaway into the past!')}
    
}
}

async function gawinner(messageID, item){
    let winner = 0
    let entry = [""]
    await bot.channels.cache.find(x => x.name == "giveaway").messages.fetch(messageID).then(async function(r){
        await r.reactions.cache.forEach(r => {
            if(r.emoji.name == "Giveaway"){
            r.users.cache.forEach(u => {
                console.log(u)
                if(entry[0] == "" && bot.guilds.cache.find(g => g.name == "Hellscream").member(u)){
                    entry[0] = bot.guilds.cache.find(g => g.name == "Hellscream").member(u).displayName
                }else if(bot.guilds.cache.find(g => g.name == "Hellscream").member(u)){
                entry.push(bot.guilds.cache.find(g => g.name == "Hellscream").member(u).displayName)
                }
            })
        }
        })
        if(entry.length > 1){
        winner = Math.floor(Math.random()*entry.length)
        while(winner == 0 && entry.length > 1) winner = Math.floor(Math.random()*entry.length)
        bot.channels.cache.find(x => x.name == "giveaway").send(entry[winner] + " is the winner of " + item + "!")
        bot.channels.cache.find(c => c.name == "giveaway").messages.fetch(messageID).then(m => m.edit('@everyone \nGiveaway is done! Nothing more to see here'))
        }else{
        bot.channels.cache.find(x => x.name == "giveaway").send("@everyone \nNo one is the winner of " + item + "! Apparently no one wants it")
        bot.channels.cache.find(c => c.name == "giveaway").messages.fetch(messageID).then(m => m.edit('Giveaway is done! Nothing more to see here'))
        }
    })
}

async function getGiveaways(){
    var gachannel = bot.channels.cache.find(x => x.name == "giveaway")
    await gachannel.messages.fetch({ limit: 50 }).then(async messages => {
    await messages.forEach(msg => {
            if(msg.content.match(/\d{1,2}\/\d{1,2}\-\d{2,4}\s\d{2}:\d{2}/i) && msg.author == bot.user){
                var tempday = msg.content.replace(/.*\n.*expires\s/i,"")
                var tempday2 = tempday.replace(/\/.*/i,"")
                var giftday = tempday2
        
                var tempmonth = msg.content.replace(/.*\n.*\//i,"");
                var tempmonth2 = tempmonth.replace(/\-.*/i,"")
                tempmonth = tempmonth2.match(/[\d{1,2}]/)
                var giftmonth = tempmonth
        
                var tempyear = msg.content.replace(/.*\n.*-/i,"")
                var tempyear2 = tempyear.replace(/\s\d{2}:.*/i,"")
                if(tempyear2.length > 3){
                    tempyear2 = tempyear2.replace(/.{2}/,"")
                }
                var giftyear = "20"+tempyear2
        
                var temptime = msg.content.replace(/.*\n.*\-\d*\s/i,"")
                var temptime2 = temptime.replace(/\s[^\d].*/i,"")
                var gifttime = temptime2
        
                var tempitem = msg.content.replace(/.*FOR /i,"")
                var tempitem2 = tempitem.replace(/\*\*\n.*\n.*/i,"")
                var giftitem =  tempitem2
        var expirationdate = new Date(giftyear+"-"+giftmonth+"-"+giftday+" "+gifttime);
        expirationdate.setFullYear(giftyear)
        giftmonth++
        expirationdate.setMonth(giftmonth)
        expirationdate.setDate(giftday)
        var gifthour = gifttime.replace(/:\d\d/i, "")
        var giftmin = gifttime.replace(/\d\d:/i, "")
        expirationdate.setHours(gifthour)
        expirationdate.setMinutes(giftmin)
        var today = new Date();
                console.log(expirationdate)
        var timer = expirationdate-today
        console.log("Year = " + giftyear)
        console.log("Month = " + giftmonth)
        console.log("Date = " + giftday)
        console.log("Hour = " + gifthour)
        console.log("Minute = " + giftmin)
        setTimeout(gawinner,2000,msg.id,giftitem)
        
        }
    })
})

}

function openMC() {
    MCraidsign = true;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Molten Core are now open!")
    var todaytime = new Date()
    var MCofftime = new Date()
    MCofftime = nextDate(MCday)
    MCofftime.setHours(18)
    MCofftime.setMinutes(0)
    MCofftime.setSeconds(0)
    MCofftime = MCofftime - todaytime
        if(MCofftime > 0 && MCoffactive == false){
            setTimeout(closeMC, MCofftime)
        }else if(MCoffactive == true) {
        console.log('MCoff timer is already active')}
        else{console.log('Something went wrong with closeMC')}
}

function openZG() {
    ZGraidsign = true;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for ZG are now open!")
}

function openBWL() {
    BWLraidsign = true;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Blackwing Lair are now open!")
}

function openAQF() {
    AQFraidsign = true;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Temple of Ahn'Qiraj (40) are now open!")
}

function closeMC() {
    MCraidsign = false;
    MCoffactive = false;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Molten Core are now not allowed!")
}

function closeZG() {
    ZGraidsign = false;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for ZG are now not allowed!")
}

function closeBWL() {
    BWLraidsign = false;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Blackwing Lair are now not allowed!")
}

function closeAQF() {
    AQFraidsign = false;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Temple of Ahn'Qiraj (40) are now not allowed!")
}

function openAQT() {
    AQTraidsign = true;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Temple of Ahn'Qiraj (20) are now open!")
}

function closeAQT() {
    AQTraidsign = false;
    bot.channels.cache.find(output => output.name == "raid-signup").send("@everyone Raid signups for Temple of Ahn'Qiraj (20) are now not allowed!")
}

async function makeinvites(raid, returnuser){
    await populateraidlists;
    if (raid.match(/mc/i)){
        
        MChealerlist.forEach(h => {
            h.replace('\n', '')
        })
        MCtanklist.forEach(h => {
            h.replace('\n', '')
        })
        MCrangedlist.forEach(h => {
            h.replace('\n', '')
        })
        MCmeleelist.forEach(h => {
            h.replace('\n', '')
        })

        var invitemacro = ['__**MC invite macros**__\n\n'];


        
        let c=0
        invitemacro.push('**Tanks**:\n')
        await MCtanklist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            if(c == MCmaxtank+1){
                invitemacro.push('\n__Backups:__')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Healers**:\n')
        await MChealerlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            if(c == MCmaxhealer+1){
                invitemacro.push('\n__Backups:__')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })


        c = 0
        invitemacro.push('\n\n**Melee**:\n')
        await MCmeleelist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            if(c == MCmaxmelee+1){
                invitemacro.push('\n__Backups:__')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c = 0
        invitemacro.push('\n\n**Ranged**:\n')
        await MCrangedlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            if(c == MCmaxranged+1){
                invitemacro.push('\n__Backups:__')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })


        invitemacro.forEach((h, index) => {
            var classfilter = /mage|hunter|warlock|druid|rogue|priest|warrior|shaman/i
            invitemacro[index] = h.replace(classfilter,'')
        })
        returnuser.send(invitemacro)

    }else if (raid.match(/bwl/i)){
        var invitemacro = ['__**BWL invite macros**__\n\n'];
        let BWLhealerlist = [...BWLRestoDruidlist, ...BWLHPriestlist, ...BWLRestoShamanlist]
        let BWLmeleelist = [...BWLFeralDruidlist, ...BWLRoguelist, ...BWLEnhShamanlist, ...BWLDPSWarlist]
        let BWLtanklist = [...BWLBearlist, ...BWLProtWarlist]
        let BWLrangedlist = [...BWLBalanceDruidlist, ...BWLHunterlist, ...BWLMagelist, ...BWLSPriestlist, ...BWLEleShamanlist, ...BWLWarlocklist]

        BWLhealerlist.forEach(h => {
            h.replace('\n', '')
        })
        BWLtanklist.forEach(h => {
            h.replace('\n', '')
        })
        BWLrangedlist.forEach(h => {
            h.replace('\n', '')
        })
        BWLmeleelist.forEach(h => {
            h.replace('\n', '')
        })

        let c=0
        invitemacro.push('**Tanks**:\n')
        await BWLtanklist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })


        c=0
        invitemacro.push('\n\n**Healers**:\n')
        await BWLhealerlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Melee**:\n')
        await BWLmeleelist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Ranged**:\n')
        await BWLrangedlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        
        returnuser.send(invitemacro)
    }else if (raid.match(/zg/i)){
        var invitemacro = ['__**ZG invite macros**__\n\n'];
        let ZGhealerlist = [...ZGRestoDruidlist, ...ZGHPriestlist, ...ZGRestoShamanlist]
        let ZGmeleelist = [...ZGFeralDruidlist, ...ZGRoguelist, ...ZGEnhShamanlist, ...ZGDPSWarlist]
        let ZGtanklist = [...ZGBearlist, ...ZGProtWarlist]
        let ZGrangedlist = [...ZGBalanceDruidlist, ...ZGHunterlist, ...ZGMagelist, ...ZGSPriestlist, ...ZGEleShamanlist, ...ZGWarlocklist]

        ZGhealerlist.forEach(h => {
            h.replace('\n', '')
        })
        ZGtanklist.forEach(h => {
            h.replace('\n', '')
        })
        ZGrangedlist.forEach(h => {
            h.replace('\n', '')
        })
        ZGmeleelist.forEach(h => {
            h.replace('\n', '')
        })

        let c=0
        invitemacro.push('**Tanks**:\n')
        await ZGtanklist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })


        c=0
        invitemacro.push('\n\n**Healers**:\n')
        await ZGhealerlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Melee**:\n')
        await ZGmeleelist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Ranged**:\n')
        await ZGrangedlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        
        returnuser.send(invitemacro)

    }else if (raid.match(/aqf/i)){
        var invitemacro = ['__**AQ40 invite macros**__\n\n'];
        let AQFhealerlist = [...AQFRestoDruidlist, ...AQFHPriestlist, ...AQFRestoShamanlist]
        let AQFmeleelist = [...AQFFeralDruidlist, ...AQFRoguelist, ...AQFEnhShamanlist, ...AQFDPSWarlist]
        let AQFtanklist = [...AQFBearlist, ...AQFProtWarlist]
        let AQFrangedlist = [...AQFBalanceDruidlist, ...AQFHunterlist, ...AQFMagelist, ...AQFSPriestlist, ...AQFEleShamanlist, ...AQFWarlocklist]

        AQFhealerlist.forEach(h => {
            h.replace('\n', '')
        })
        AQFtanklist.forEach(h => {
            h.replace('\n', '')
        })
        AQFrangedlist.forEach(h => {
            h.replace('\n', '')
        })
        AQFmeleelist.forEach(h => {
            h.replace('\n', '')
        })

        let c=0
        invitemacro.push('**Tanks**:\n')
        await AQFtanklist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })


        c=0
        invitemacro.push('\n\n**Healers**:\n')
        await AQFhealerlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Melee**:\n')
        await AQFmeleelist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Ranged**:\n')
        await AQFrangedlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        
        returnuser.send(invitemacro)
    }else if (raid.match(/AQT/i)){
        var invitemacro = ['__**AQ20 invite macros**__\n\n'];
        let AQThealerlist = [...AQTRestoDruidlist, ...AQTHPriestlist, ...AQTRestoShamanlist]
        let AQTmeleelist = [...AQTFeralDruidlist, ...AQTRoguelist, ...AQTEnhShamanlist, ...AQTDPSWarlist]
        let AQTtanklist = [...AQTBearlist, ...AQTProtWarlist]
        let AQTrangedlist = [...AQTBalanceDruidlist, ...AQTHunterlist, ...AQTMagelist, ...AQTSPriestlist, ...AQTEleShamanlist, ...AQTWarlocklist]

        AQThealerlist.forEach(h => {
            h.replace('\n', '')
        })
        AQTtanklist.forEach(h => {
            h.replace('\n', '')
        })
        AQTrangedlist.forEach(h => {
            h.replace('\n', '')
        })
        AQTmeleelist.forEach(h => {
            h.replace('\n', '')
        })

        let c=0
        invitemacro.push('**Tanks**:\n')
        await AQTtanklist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })


        c=0
        invitemacro.push('\n\n**Healers**:\n')
        await AQThealerlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Melee**:\n')
        await AQTmeleelist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        c=0
        invitemacro.push('\n\n**Ranged**:\n')
        await AQTrangedlist.forEach(h => {
            if (h.length > 2){
            c = c+1
            if(c % 14 === 0 && c != 0){
                invitemacro.push('\n')
            }
            invitemacro.push('/inv' + ' ' + h)
        }
        })

        
        returnuser.send(invitemacro)
    }
}

async function setopentimer(raidn){
var today = new Date()
var timersetting = new Date()
var timer = 00
if(today.getHours() < 20){
timersetting.setDate(today.getDate())
timersetting.setHours(20)
timersetting.setMinutes(00)
timersetting.setSeconds(00)
timer = timersetting - today

}else if(today.getHours() >= 20){
    timersetting.setDate(today.getDate()+1)
    timersetting.setHours(20)
    timersetting.setMinutes(00)
    timersetting.setSeconds(00)
    timer = timersetting - today
}
if(MConactive == false && raidn.match(/mc/i)){
setTimeout(openMC, timer)
}else if(BWLonactive == false && raidn.match(/BWL/i)){
setTimeout(openBWL, timer)
}else if(ZGonactive == false && raidn.match(/ZG/i)){
setTimeout(openZG, timer)
}else if(AQFonactive == false && raidn.match(/AQF/i)){
    setTimeout(openAQF, timer)
    }else if(AQTonactive == false && raidn.match(/AQT/i)){
        setTimeout(openAQT, timer)
        }

}

function defaultMClist() {
    MCtanklist = ["Ragehoof Warrior"]
    MChealerlist = [""]
    MCmeleelist = ["Enthrallis Rogue", "Happyneal Warrior"]
    MCrangedlist = ["Seamara Hunter", "Butterskotch Druid", "Ravonix Mage"]
}

function defaultZGlist() {
    ZGProtWarlist = [""]
    ZGBalanceDruidlist = ["Butterskotch "]
    ZGHPriestlist = [""]
    ZGRestoShamanlist = [""]
    ZGDPSWarlist = ["Happyneal "]
    ZGRoguelist = [""]
    ZGWarlocklist = ["Badazz "]
    ZGHunterlist = ["Seamara "]
    ZGMagelist = [""]
    ZGBearlist = [""]
    ZGRestoDruidlist = [""]
    ZGFeralDruidlist = [""]
    ZGSPriestlist = [""]
    ZGEleShamanlist = [""]
    ZGEnhShamanlist = [""]
}

function defaultBWLlist() {
    BWLProtWarlist = ["Ragehoof "]
    BWLBalanceDruidlist = ["Butterskotch "]
    BWLHPriestlist = ["Ophidium "]
    BWLRestoShamanlist = [""]
    BWLDPSWarlist = ["Happyneal "]
    BWLRoguelist = ["Enthrallis "]
    BWLWarlocklist = ["Badazz "]
    BWLHunterlist = ["Seamara "]
    BWLMagelist = ["Ravonix "]
    BWLBearlist = ["Woof "]
    BWLRestoDruidlist = [""]
    BWLFeralDruidlist = [""]
    BWLSPriestlist = [""]
    BWLEleShamanlist = [""]
    BWLEnhShamanlist = [""]
/*     BWLProtWarlist = ["Tylvid", "Ragehoof", "Harrak"]
    BWLBalanceDruidlist = ["Butterskotch"]
    BWLHPriestlist = ["Exigus", "Fetimus", "Ophidium", "Urmel"]
    BWLRestoShamanlist = [Rophe", "Durek", "Morjan"]
    BWLDPSWarlist = ["Happyneal", "Elfenjagd", "Ahnaar", "Deadlyfang", "Psolokrator", "Jakko", "Ichirga", "Kelthal", "Gromagrim"]
    BWLRoguelist = ["Enthrallis", "Enthrallis", "Razeria", "Umtiti"]
    BWLWarlocklist = ["Ggjustice", "Badazz", "Runningbeer"]
    BWLHunterlist = ["Seamara", "Lionard", "Eskanor", "Flyingrat"]
    BWLMagelist = ["Ravonix", "Iceolated", "Biemless", "Soulrider"]
    BWLBearlist = ["Woof"]
    BWLRestoDruidlist = ["Sneezecheese", "Brainboi"]
    BWLFeralDruidlist = ["Chandelly"]
    BWLSPriestlist = ["Possumo"]
    BWLEleShamanlist = ["Exid"]
    BWLEnhShamanlist = ["Mushin"] */
}


function defaultAQFlist() {
    AQFProtWarlist = ["Ragehoof ", "Harrak "]
    AQFBalanceDruidlist = [""]
    AQFHPriestlist = ["Ophidium "]
    AQFRestoShamanlist = [""]
    AQFDPSWarlist = ["Happyneal "]
    AQFRoguelist = ["Enthrallis "]
    AQFWarlocklist = ["Badazz "]
    AQFHunterlist = ["Seamara "]
    AQFMagelist = ["Ravonix "]
    AQFBearlist = ["Woof "]
    AQFRestoDruidlist = [""]
    AQFFeralDruidlist = [""]
    AQFSPriestlist = [""]
    AQFEleShamanlist = [""]
    AQFEnhShamanlist = [""]
}

function defaultAQTlist() {
    AQTProtWarlist = ["Ragehoof "]
    AQTBalanceDruidlist = [""]
    AQTHPriestlist = ["Ophidium "]
    AQTRestoShamanlist = [""]
    AQTDPSWarlist = ["Happyneal "]
    AQTRoguelist = ["Enthrallis "]
    AQTWarlocklist = ["Badazz "]
    AQTHunterlist = ["Seamara "]
    AQTMagelist = ["Ravonix "]
    AQTBearlist = ["Woof "]
    AQTRestoDruidlist = [""]
    AQTFeralDruidlist = [""]
    AQTSPriestlist = [""]
    AQTEleShamanlist = [""]
    AQTEnhShamanlist = [""]
}

bot.login(auth.token);