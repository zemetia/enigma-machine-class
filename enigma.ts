
const standardSet: string[] = [
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,./;:\'\"-_+=()!@#$%^&*\\`~?<>[]|{}",
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",
    "0123456789-=qwertyuiop[]\\asdfghjkl;\'zxcvbnm.,/`~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<> ?",
]

interface Rotors {
    "set": string,
    "shift": number
}

interface Plug {
    "from": string,
    "to": string;
}

class EnigmaMachine{
    rotors: Rotors[];
    plugs: Plug[];
    set: string;
    reflector: string;

    constructor(set: string){
        this.set = set;
        this.rotors = Array<Rotors>();
        this.plugs = Array<Plug>();
        this.reflector = this.shuffle(this.set);
    }

    addRotor(set: string, shift: number): void {
        if(set.length != this.set.length || shift > set.length)
            return ;

        this.rotors.push(
            {
                "set":set, 
                "shift":shift
            }
        );
    }

    autoAddRotor(shift = 0){
        const randSet: string = this.shuffle(this.set);

        this.rotors.push(
            {
                "set":randSet, 
                "shift":shift
            }
        );
    }

    autoAddSetOfRotors(amount: number, shiftMode: string, shift: number){
        //shift mode:
        //1. rs = random shifting (default)
        //2. cs = constant shifting
        //3. is = increasing shifting
        let shiftFinal: number;
        var setCount = this.set.length;
        for (var i = 0; i < amount; i++){

            if (shiftMode.toLowerCase() == "rs")
                shiftFinal = Math.floor(Math.random()*setCount);
            else if (shiftMode.toLowerCase() == "cs")
                shiftFinal = shift;
            else
                shiftFinal = Math.floor(Math.random()*setCount);
            
            this.autoAddRotor(shiftFinal);
        }
    }

    popRotor(){
        this.rotors.pop();
    }

    removeAllRotors(){
        this.rotors = Array<Rotors>();
    }

    editRotor(index: number, set: string, shift: number){
        this.rotors[index].set = set;
        this.rotors[index].shift = shift;
    }

    crypt(alphabet: string, back: number){

        // add reflector
        // add spinning/increasing shifter
        // add plug

        let shift: number;

        const rotorsCount: number = this.rotors.length;
        const setCount: number = this.set.length;

        if(back){
            for (var i = rotorsCount - 1; i >= 0; i--){
                shift = ((2*setCount) - this.rotors[i].shift) % setCount;
                alphabet = this.set[(this.rotors[i].set.indexOf(alphabet) + shift) % setCount];
                }
        } else {
            for (var i = 0; i < rotorsCount; i++){
                shift = this.rotors[i].shift % setCount;
                alphabet = this.rotors[i].set[(this.set.indexOf(alphabet) + shift) % setCount];
            }
        }

        return alphabet;
    }

    process(alphabet: string) {
        // (plug) 1 2 3 reflector 3 2 1 (plug)
        const setCount: number = this.set.length;
        let rotors: Rotors[];
        let shift: number;

        rotors = this.rotors;
        rotors.forEach((rotor: Rotors, index: number) => {
            shift = rotor.shift % setCount;
            alphabet = rotor.set[(this.set.indexOf(alphabet) + shift) % setCount];
        })

        alphabet = this.reflector[this.set.indexOf(alphabet)]

        rotors = this.rotors.reverse();
        rotors.forEach((rotor: Rotors, index: number) => {
            shift = rotor.shift % setCount;
            alphabet = rotor.set[(this.set.indexOf(alphabet) + shift) % setCount];
        })

        return alphabet;

    }

    addPlug(a: string, b: string) {
        //pass
    }

    encrypt(text){
        let encrypted: string = "";
        text.split('').forEach((alphabet: string) => {encrypted += this.crypt(alphabet, 0)});
        return encrypted;
    }

    decrypt(text){
        let decrypted: string = "";
        text.split('').forEach((alphabet: string) => {decrypted += this.crypt(alphabet, 1)});
        return decrypted;
    }

    shuffle(text: string) {
        var array = text.split("");
        let currentIndex = array.length, randomIndex;
      
        while (currentIndex != 0) {

          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array.join("");
      }

    async export(randomShift = 5){
        let setCount = this.set.length;
        let exportReturn = this.set[setCount - 1];

        for (var dataIndex in this.rotors){
            let data = this.rotors[dataIndex];
            exportReturn += data.set;
            var shift = data.shift % setCount;
            var shiftSet = Math.floor(Math.random() * randomShift) + 1;

            exportReturn += this.set[shiftSet];

            for( var i = 1; i < shiftSet; i++){
                var shiftRandomDecreasor = Math.floor(Math.random() * (shift-1));
                shift -= shiftRandomDecreasor;
                exportReturn += this.set[shiftRandomDecreasor];
            }

            exportReturn += this.set[shift];
        }

        return exportReturn;
    }

    async import(code){
        //make substr(start length)
        let setCount = this.set.length;
        let set, shift, nextShift;
        if (code[0] != this.set[setCount - 1])
            return false 

        for (var i = 1; i < code.length; i++){
            shift = 0;
            set = code.substr(i, setCount);
            i += setCount;
            nextShift = this.set.indexOf(code[i]);

            for (var j = 1; j <= nextShift; j++)
                shift += this.set.indexOf(code[i+j]);
            i += nextShift;

            this.rotors.push({"set":set,"shift":shift});
        }
    }
    exportJSON(){
        return JSON.stringify(this.rotors);
    }

    importJSON(code, add = 0){
        if(!add)
            this.rotors = JSON.parse(code);
        else
            this.rotors.push(JSON.parse(code));
    }
}