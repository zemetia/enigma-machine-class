# enigma-machine-class

This is the Encryption class-object that I had been created inspired from the enigma machine encrytor
Form Germany while WW2 for enycrypting message ofc bruh:V

this is a build-in encryption. Then you can make much of "rotors" that makes your encrypt more powerfull
This is javascript version.

# how to use
 
 import the module from your html or NodeJS or whatever it is.. 
 
```html
<script src="./enigma-machine.js"></script>

<script>
  const enigma = new Enigma();
</script>
```

NodeJS
```js
const enigmaModule = require("enigma-machine.js")
```
or use import
```js
import {Enigma} from "enigma-machine.js"
```
then init the object into variable generally

# fiture 
there is a fitures in this Enigma Machine Encryption module
```js
//while Initializing
let enigmaMachine = new Enigma(set)
// u can use your set of character

//building the Encrpytion
enigmaMachine.addRotor(set,shift)
//u can write Manually the set of chars and give 'em shifting
//u also can add the rotors as much as you want bruh


enigmaMachine.autoAddRotor(shift)
//automatically create set that shuffled

enigmaMachine.autoAddSetOfRotors(amount, shiftMode, shift?)
//automatically add that many rotors (as amount)
//shift mode:
        //1. rs = random shifting (default)
        //2. cs = constant shifting
        //3. is = increasing shifting
//shift is use when we use the "cs" aka constant shift mode

enigmaMachine.popRotor()
//popping the last rotor

enigmaMachine.removeAllRotors()
//ofc as the fuckin function name

enigmaMachine.editRotor(index,set,shift)
//editing the rotor at the index

enigmaMachine.encrypt(text)
//encrypting your text/data

enigmaMachine.decrypt(code)
//decrypting your enigmaMachine encrypt

enigmaMachine.shuffle(array)
//maybe u want u use this function? my pleassure

enigmaMachine.export()
//exporting the settings of rotors that u have been created before
//(with encrpytion) then your setting is not editable outside of enigmaMachine module

enigmaMachine.import(code)
//importing the setting that u exported before

enigmaMachine.exportJSON()
//export ur setting with JSON

enigmaMachine.importJSON(jsonCode)
//import your setting bruh ofcourse
```
