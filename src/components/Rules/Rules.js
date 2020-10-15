import React from 'react';
import bg1 from '../../media/bg/RustLighthouse01-01.svg'
import bg2 from '../../media/bg/RustLighthouse02-01.svg'
import bg3 from '../../media/bg/RustLighthouse03-01.svg'
import bg4 from '../../media/bg/RustLighthouse04-01.svg' 

class Rules extends React.Component {   
    constructor(props) {
        super(props); 
    } 
    
    componentDidMount = () => {
        window.scrollTo(0,0); 
        let width = document.documentElement.clientWidth;
        this.setState({isMobile: (width < 600)}) 

        window.addEventListener('scroll', this.handleScroll);
    }
    
    
    render(){
        return (
        <div className="Rules">
     New Specific Guidelines for Teams and Communities (alliances)

1) Max team size is 4. No exceptions. There is no limit to how many teams may ally with one another.
2) Within each base/compound may only exist 1 team - we count by beds not by door authorization. 

1. No KOS. This a Limited PVP - No Kill on Sight ("KOS") Server.
If you want to PVP you can fire one warning shot in the direction of the player. Do not shoot at a player, just in their direction. This is a warning shot, NOT a warning wound. If the player turns and returns said shot (again NOT making contact) PVP is on. If the player wants nothing to do with you, don't fire 10 other shots. THEY DON'T WANT TO PVP.

PVP/KOS Zones:-MilitaryTunnels -Airfield -TrainYard -WaterTreatment -PowerPlant -LaunchSite -Satellite -Excavator All -Quarries -SewerBranch -Harbors -OilRig -CargoShip -Airdrops -lockedcrates -attackheli -crashsites and any -raids/counter raids.

PVP ends as soon as crate or the box has been collected and that person has left the area(1 square surrounding airdrop in all directions). OIL RIG and CARGOSHIP are ALWAYS PVP. PLEASE DO NOT CHASE PLAYERS IN ORDER TO KILL THEM AND STEAL THEIR LOOT. An easy way to tell if the timed crate has been collected is to press G (map) and check if it disappeared from the map. PVP for Attack Helicopter Crates stops when the explosion marker has disappeared on the map. BradleyAPC crates are always PVP due to them being at the launch site.

All puzzle monuments: KOS areas include any square that has part of the monument in it.

Quarry areas ARE PVP, however it is just the quarry not the whole square.

 

2. Raiding is allowed

If you are online raiding you can kill the occupants of the base. Occupants of the base can also kill you. Killing on sight is appropriate if the intent is there for the destruction to begin (i.e you have rockets / c4 / satchels and will place them on the door wall immediately following the kill). Be aware that anyone can come and counter raid you and steal your supplies. You are fair game while in the raided base, while trying to leave the raided base, or immediate area with the loot. People can and often will camp outside in order to wait for you leave with the raided items and can follow you back to your base. You are not safe until you are inside your own base.

Helis ARE NOT raid material, do not use them to crash into a player's base and call it a raid. Also do not lure attack heli into destroy another player's base.

 

3. While raiding is allowed on this server do not do the following:

A: Locking players out of their base once the raid is over. (If you put down doors/locks leave a note with the new code OR remove the locks/leave unlocked.) ***This includes stealing bases ***

B: Locking the TC. If you place a new TC leave it unlocked once the raid is over. Do not wall off TC.

C: Foundation wiping.

D: Walling off player's bags or leaving your own placed bag in the raided base.

4. No door camping and make claims that you are "raiding". If you are door camping with no raiding supplies, you are not raiding, you are just being a jerk.

5. No trap bases. Trap bases consist of a fake base you are not living in to lure/kill other players.

You MAY have traps in your own base! As long as it's within base walls/high external walls it is fine. 

 

6. ALL SAMS Sites must be labeled on the map with a vending machine. Ex: SAMS Site! No Fly Zone!

 7.This is a NOOB server. People come here because they are learning how to play or just generally want to get away from the toxicity of other servers.

A: Have respect for all players, if you are being toxic and we have proof you will be muted, kicked, or banned.

B: Do not raid within the first 24 hours of the wipe.

C: Do not raid "noob" bases, if it is still thatch/twig leave it alone. If you live in a compound and raid a 2x1, or a 4 man group raids a solo we're not going to be happy. If someone has a starter base and did not lock their doors leave them alone or inform them in chat.

D: Do not place any traps/land mines out in the open anywhere. All things that can hurt/kill have to be within your own high walls/base. 

 

ONLY Admins speak with authority, do not make claims for admins based on that authority. Basically do not speak for us, we will make the decisions on actions needed to be taken. We understand this is Rust but it is a learning/chill server. BE NICE sometimes! :smiling_imp:

 

 

Stealing / KOS Situations
A: If someone catches you stealing THEIR things they are allowed to kill you. This can include furnace mats, helis, horses, cars (keep them locked) even things out of a recycler they're using.

B: If you walk into someone's base or compound uninvited, again, THEY can kill you.
        </div>
        )
    }
}

export default Rules;
