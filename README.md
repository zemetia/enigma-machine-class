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

# export-code-example
//first method of import
```js
'?Zo-:C7"K5P\\X(dR#[Qxe1b!ufm|UcOt.g?&)`/wFlT@>^skGI{8EYj$qM%+J62yB=]0v,r3aA~n ;SVWH<\'p9hLND*i4}_z5pd563z&p@,$E~.Wi eT;kwH8VAm/If{x+#t!Dvno3:\\QZjC(]MhbY2F[_"0GK=`Pr6<7aNBd|Xl*S5O>}s%-y\'R?^Uq19)J4cLgu1&w#b="@Pqk/+hR1p].l\\G40mic%Yf_Wt2JF7M;x~5AL>SuK?C&jd}6U-*^9<8n\'Q|ezTEv$aD!ZNVr3 HB)[o(yg:XO{I,s`4{012wUyM(o0Q3qc\\NTAO{6)\'/j;!e9x4:$?ZtkHrsGKF+]*52aC&IRPW}"%u@1S~Yz-gn|ipLd<_^DX,V8B`=bv.h>ml7f[ JE#4E9899{eGI`s32 =CJrB_$~X;)nO?Pcy<Yp*hwNR@}.M|W0LU5a[(%+7\\u]-fHVdK&m"8:Dz1g4ZjTAl^okQiq6vxFS#\'E/!,>tb5500149)+V*o]j.s8F2/vJ\\DxTMgNqA&e|?;EZcw_($zaH0L[p"m}yi,<P-S1r4!n%{^Yl7f6=@R~\'5dOkKI#X`QuC>:G tBWb3hU52uy76:qv*hQ\\prkI>_aX1/^JxW.;$y0Sgfo&U<)mdO=~A\'Bc,"|#?D+!LY`2l F(H45RZCwT]us8PnKtz[jeE-{9MVN%37G@}6bi1pZ97SVAv*1H\\Y$M@cXD6?U-&KRJeq~dPl/{:Ij|,=gW#h]0(ku>w"yzf)F8.x%n2\'pBmr;Nis+aC5E}G4L _^[TtQ!3<b`oO2wfD-{|RrptM6Y,VAq8%]z)\'}d&`O!ImXHinyN;2+lxb?W7_Q voPJc*3<SuheUK~C1LT:/f=wF"akE@4#ZB$g^5(sj>90\\G.[3ol4[-o`8;37P~Cs_)wdH|b&RE} ].uBD+1$J^{r"hnQyGN#KX/OT,F*p>=jfY:AeZm?IkLqlUS4\\v%@az9(g0\'tVc2WM6!<xi55[.q05s@}[_8Z/.O0ng?4)kby~Cl]Mh*Pe`2uBJ{"pH+GwiUqQvz<jARt\'cVfa>D&X3mr7o-x,$|dT9!56^ILYEF %SK=1N\\(:W;#1!/o*M)BF2={Y^h8E_z"JGUS>n|e+LA6!g%i@mv7OfslIQ&PCy~rN\'[(Zx\\}t? V`-.pb:5W3K]wa#T90RqHd,D$j4c1k;<Xu3ps]RMf]C!\\^z/$*,Z6"j`P%_umkBb=xL<KXdUq>-13&8J0hrAi(HwnQc}YE?~t@4W:pe2NS7o\'{l.9vyIF)T#5OGsa[;Dg|+V 1jkF]|A:J}1yW.RjYIuc,< N8B+TVg-Lh*bvf&\\txz5Q?@Omp/d\'2ewoK(H=#Ul7nE{6;0[C9aqZ`!_G^P)%X4SiD>"rs~3$M56gr2eoSw}9+\\iyv1Y/J>r`$pDGzOL*6](_?IfMtWXZ)N8&{;E!:%"xlmVKas.UAnFHP[ |ug,=Bec^#qh34-<7~5djR2kQ\'Tb@C01U\'p|tlZ$D{71,Q.w+~><)r0BCLkdO= H2]o98-46gh5jNsx:^}VGnKq@/i*Xm"P%c#bYzJ;_U`Iv\\EyaMSfu3!A(&TWeR?F[4.002VfKbIx#7j)H%W1YT/CUm+!lendu*MhOF=_"~`-s\'g2<[wc{@pBG,|>:XPQ]$E^39\\qvk5y;o?R&t.8Sz}ZA0D(6 irLJaN441703x4F3_z5]^O!S<w&7[q~N;Wb2vd|G} TA0@sCcikDE.,I"jnLJra+?6Z9X`f=:R>)*\'u(/YVyBM#%eQlhg\\tK-{8$1UpHPmo26oJwf~]TSAU`$g2!WM+4lrLm9XR{#0y3PQD:o\'O1V)-}<*bkdC8vq%aFj|hc"&/>5=N6B;I_YteGKs.i?n(z\\u ,E@p7Zx^H[5as143J`]dcNf+e?ZQ@ BHD|.l$j8i{M\'[o%*OaUW5L>v1kz:(GR6V^FmqsI,tXE&p"-Yg9\\<3Kw/2y;h0~b!)_r=C}PuAnT7#Sx43E3[*m7>GYebE)Ksg^\\U`.2%z@q#x5;B={}h$A8[y+(cfuPN1TW:jOL at,oJR|Sk6Ddr_3XwM&]Zp\'-0~lQC/VvI94!<"?FnHi1WA_]cVqR~=?k3CnDW.}-gPBuQ wXf\\8TF\'721zNHpSmJ>Zxs/a+Io$ihybtKG#j0,"4Er*&|^6{Y:U5!<[`(Ol9Med;L@)%v217wf[ClF:b]P*M=HrQ1Rgx527_`()6v0n%USkN#ciXW^pu>}@~m$ZIz;a9L"eq,j{8|Jy d?VDT-oE!YO.3stGBKA/+\'<4\\&h1G,mwS]^%rx 4aPAl\'.@V3=X+Uny6?k[_}h0Bd>:/MT#|gp-f1Zq&`{vjzo(b"Hs!K52JI)7<9CtNDeOLQRFE\\*8c;WG~Y$ui4i716RgJ- fFWlky@jCo!A:tc&Ds%?`"2h7/Hb{IKqGSPdz]=iTpuMN9$B8~;*3Z\'VnO56<_Q.+0L,|w^ea)vrx[UXYEm4#1>(}\\1yVl3LK#zwv|u!WCe.r5[7D 0/&f,{P@Gih]x_SH(IE\\nQaJ)oOk4`9-U=mj6AZ\'tc1g+;^?<XF~Y*b>TsRp:M8B%dN}y2q$"3-#[]|Hc%>i6PVxg~d`@Nwv5oItrLlGy<8Mfp(E_W\\JFSYQ9}"*Xu)/;,a[z.12 ?n!qOCRk3-e0b&K{T=Z4DBU+j$\'#A:7sh^m2b/v80fklaehRVU ,C!SW?9(TG@Ziz+K*\\5%Ot6;d\'j3Iy]#HF}BuEg`r^_:PQn1|XM/{~J42>xDp").Asc[o$LN7bmY&-=<wq40d/qbNaJ-IG\'1f*8&PFk=i(Hrd3c4[;nwV ?B}A)x26>ZeS<L:5sgW`qm"l%oY$uvy,C\\Q9E@R_!7{]+|.X^~KUjphMTOz#Dt/01lk!2yn/~(6F }+wrag?*fI#cSH5bpC:i1N&;9@lj<,sde._vAL\'XET$"tuWMGq`oVKm^{\\hx)]DUQ>|RB%Z[-70Pz4O3Y=8J1?1;Mmv5<~) B.:aARgo4-}|+*c{=@UuHIJtTlyGQCw\'0&!`K$3Xdx#P8>pD/VfbF^s"%OEkrj6]SeN9_[?qW,nzL(i2hZ7\\Y2af&TNpd\\0K>/E[c~5]Z+$Ueb81s:rgx_HC-=D)2`a@zo^OfjAXv?k4;<}V.,hw#YmQ6Sli(B%9L |FJGIM37u\'R*Pqnty!{W"3865}8AO{KSUkje^%<#VhzMvG`:W,PC|6;\\XLT47gq*\'NlbH.+yQiJ@x5Zado>BtFRw0D1E(9)cm~]p3$-[fIus!_=&"?/2Y rn42$54Bh)S`EcY%Vs>Aa+N(PJ?d9&\'* \\/1Hekb_M=l4gL7{!R]wX:ftr~iDmU"QG,I;n25qujCZW.OFK@}$6xy#Tv3o^|8-p0z[<3o6639.H+P5nx D$\\X4`"EO]~L7Bsur)_,y{dq<Q@tC6Fo:=S>(g^Ge1*?#hz}0!A2NlafWwRTj%UmVKi|\';pZ-J[v/M&YcbkI83r03B$]U.10LW7y,N\\Y)lpA"K5b+/sVH48rcmw~oi?QZ2*(9&-Fz6[q@T{R|`D_^<fuxk}J=C eGO3#dtgSP\'!I;v:Mna>jXh%E2[q`yi)kR7%g$b}f*GUWz#[ wjAKY52pF-I8M/4Z:s+|cXCQVlt?(\\HJT.!E@mO{&Nx9da^vSq_1>3LB\'6hon]De,;~"Pr<0u=1=:R^9-IW{FZQ<,wjkGKB+]i!CX8qo)\\zgUrm%*5V31t.x@2Ypeun_fNSy4#$b"avALh \'6H[O7Ec~0;D=`&TM}|sJ(l?Pd/>4et2e3*ib Etmr~9B5A=N%1PqKk6$O-IQZDXCu[&7s;"fwJ8:WnYUV\'c._#}2d)ogR@|</,(^\\j?H0`>GayLl]zepTFv{S4!x+Mh4setp>t4V/Z6?-od{xnj;:0g(T&A5m1,<$9S|p\'+#e]izh!uw82[=Fyk._qa~G}37INPEY`OK s\\vLM%QDRBUcblCrW"f@^X)HJ*5s-002;hM_$k`FW:u95BlNeAi3|%={2[<!?QGnpmCRKdT]x\\zw,Y.OcX"EI+}SqPvyj&-7bZtH~oL@80U>D*a)4VrJs#\'g^16/f (1y4^SCEde@}9upnL{#wy=a|:01si*t!>,B]mxFN%h$k;J~V c.oXIAf)D`6Y&zR\\_\'l8<"j2?3/Ub[M5TvgH-ZrQ7OP(q+GWK4z3\\e7"H9U^30D%e-dZG/ua(Mt{pqKB|g.CiQ2s>$[T,VSnEb~rm&8X5\'1yRJc;fIl+z4P<oW?)=!*F6:Lh v]wY`_@\\kjAx#}ON4i\'5u\' TL?[~ixyho@_9c"YqbaPn!=El4H08SG|V-R\\vek>;t3,wNpmW#Q%F6Dz$^A5`U/B.dZrKj}2uC1&IOXg:{(]+J<7fM*)s4P534*8xcQP]U)z$Gt2AWh;B|o.RMTv 1mj=,\\>KbI:E~4g-fqs%L!y^+Y}au0#59<&rXO@HnJ_?iweD3F7l"[/S6`ZdN(\'Cp{kV40332+R f[pZ97e6ot<G;(\\qj,L>|bdu%])rzIY^U$PFykWwH#hM&Q8g3asm*_"v:4J}-E=~.VTKX{!\'/5S10xAn@?iB`D2ONcCl1=ng4-^GH>NLbB_S)=uQzJ5|\'MC`O*]{30"lt(i1&F~w r@;$+<shKoZX6a7eDVxmI!8U:EjkY[yf.q}R/9WPpv2A#,c?T\\d%36u9W"F.:V%;(S051?xw+f\\8_}!c\'A]3{ gh@m~><-9JOukUID=CG$q[bN^tz6`M/|)d2sKyLZPRrTneHEa4BjlvQp&o,i#*Y7X2;\\%Q4q7,H0L=~s3AVb([Ck6/c|S\'ezPG"i>)]IhvdJguBr:*O@;}_!8x\\faTD1R9wE^?`M mtN2Kn<Yo#5{+WlpUj$&-ZXyF.4i2433AuS./k#Zn!L=f$-"a]Kw@^t<%miU?(GsJNr\\Rq*B,:)l[Ixhz`Y15bgF~e>2Od_&W9Dvyc;7 {o\'4VX}QH+P6MpC8|j0ET5d4102'
```


//JSON import (same settings)
```js
'[{"set":"Zo-:C7\\"K5P\\\\X(dR#[Qxe1b!ufm|UcOt.g?&)`/wFlT@>^skGI{8EYj$qM%+J62yB=]0v,r3aA~n ;SVWH<\'p9hLND*i4}_z","shift":62},{"set":"z&p@,$E~.Wi eT;kwH8VAm/If{x+#t!Dvno3:\\\\QZjC(]MhbY2F[_\\"0GK=`Pr6<7aNBd|Xl*S5O>}s%-y\'R?^Uq19)J4cLgu","shift":54},{"set":"w#b=\\"@Pqk/+hR1p].l\\\\G40mic%Yf_Wt2JF7M;x~5AL>SuK?C&jd}6U-*^9<8n\'Q|ezTEv$aD!ZNVr3 HB)[o(yg:XO{I,s`","shift":73},{"set":"wUyM(o0Q3qc\\\\NTAO{6)\'/j;!e9x4:$?ZtkHrsGKF+]*52aC&IRPW}\\"%u@1S~Yz-gn|ipLd<_^DX,V8B`=bv.h>ml7f[ JE#","shift":88},{"set":"9{eGI`s32 =CJrB_$~X;)nO?Pcy<Yp*hwNR@}.M|W0LU5a[(%+7\\\\u]-fHVdK&m\\"8:Dz1g4ZjTAl^okQiq6vxFS#\'E/!,>tb","shift":10},{"set":"9)+V*o]j.s8F2/vJ\\\\DxTMgNqA&e|?;EZcw_($zaH0L[p\\"m}yi,<P-S1r4!n%{^Yl7f6=@R~\'5dOkKI#X`QuC>:G tBWb3hU","shift":50},{"set":":qv*hQ\\\\prkI>_aX1/^JxW.;$y0Sgfo&U<)mdO=~A\'Bc,\\"|#?D+!LY`2l F(H45RZCwT]us8PnKtz[jeE-{9MVN%37G@}6bi","shift":21},{"set":"Z97SVAv*1H\\\\Y$M@cXD6?U-&KRJeq~dPl/{:Ij|,=gW#h]0(ku>w\\"yzf)F8.x%n2\'pBmr;Nis+aC5E}G4L _^[TtQ!3<b`oO","shift":41},{"set":"D-{|RrptM6Y,VAq8%]z)\'}d&`O!ImXHinyN;2+lxb?W7_Q voPJc*3<SuheUK~C1LT:/f=wF\\"akE@4#ZB$g^5(sj>90\\\\G.[","shift":57},{"set":"[-o`8;37P~Cs_)wdH|b&RE} ].uBD+1$J^{r\\"hnQyGN#KX/OT,F*p>=jfY:AeZm?IkLqlUS4\\\\v%@az9(g0\'tVc2WM6!<xi5","shift":82},{"set":"s@}[_8Z/.O0ng?4)kby~Cl]Mh*Pe`2uBJ{\\"pH+GwiUqQvz<jARt\'cVfa>D&X3mr7o-x,$|dT9!56^ILYEF %SK=1N\\\\(:W;#","shift":48},{"set":"/o*M)BF2={Y^h8E_z\\"JGUS>n|e+LA6!g%i@mv7OfslIQ&PCy~rN\'[(Zx\\\\}t? V`-.pb:5W3K]wa#T90RqHd,D$j4c1k;<Xu","shift":70},{"set":"RMf]C!\\\\^z/$*,Z6\\"j`P%_umkBb=xL<KXdUq>-13&8J0hrAi(HwnQc}YE?~t@4W:pe2NS7o\'{l.9vyIF)T#5OGsa[;Dg|+V ","shift":31},{"set":"kF]|A:J}1yW.RjYIuc,< N8B+TVg-Lh*bvf&\\\\txz5Q?@Omp/d\'2ewoK(H=#Ul7nE{6;0[C9aqZ`!_G^P)%X4SiD>\\"rs~3$M","shift":66},{"set":"oSw}9+\\\\iyv1Y/J>r`$pDGzOL*6](_?IfMtWXZ)N8&{;E!:%\\"xlmVKas.UAnFHP[ |ug,=Bec^#qh34-<7~5djR2kQ\'Tb@C0","shift":66},{"set":"\'p|tlZ$D{71,Q.w+~><)r0BCLkdO= H2]o98-46gh5jNsx:^}VGnKq@/i*Xm\\"P%c#bYzJ;_U`Iv\\\\EyaMSfu3!A(&TWeR?F[","shift":45},{"set":"VfKbIx#7j)H%W1YT/CUm+!lendu*MhOF=_\\"~`-s\'g2<[wc{@pBG,|>:XPQ]$E^39\\\\qvk5y;o?R&t.8Sz}ZA0D(6 irLJaN4","shift":11},{"set":"x4F3_z5]^O!S<w&7[q~N;Wb2vd|G} TA0@sCcikDE.,I\\"jnLJra+?6Z9X`f=:R>)*\'u(/YVyBM#%eQlhg\\\\tK-{8$1UpHPmo","shift":26},{"set":"Jwf~]TSAU`$g2!WM+4lrLm9XR{#0y3PQD:o\'O1V)-}<*bkdC8vq%aFj|hc\\"&/>5=N6B;I_YteGKs.i?n(z\\\\u ,E@p7Zx^H[","shift":59},{"set":"J`]dcNf+e?ZQ@ BHD|.l$j8i{M\'[o%*OaUW5L>v1kz:(GR6V^FmqsI,tXE&p\\"-Yg9\\\\<3Kw/2y;h0~b!)_r=C}PuAnT7#Sx4","shift":87},{"set":"*m7>GYebE)Ksg^\\\\U`.2%z@q#x5;B={}h$A8[y+(cfuPN1TW:jOL at,oJR|Sk6Ddr_3XwM&]Zp\'-0~lQC/VvI94!<\\"?FnHi","shift":61},{"set":"A_]cVqR~=?k3CnDW.}-gPBuQ wXf\\\\8TF\'721zNHpSmJ>Zxs/a+Io$ihybtKG#j0,\\"4Er*&|^6{Y:U5!<[`(Ol9Med;L@)%v","shift":8},{"set":"wf[ClF:b]P*M=HrQ1Rgx527_`()6v0n%USkN#ciXW^pu>}@~m$ZIz;a9L\\"eq,j{8|Jy d?VDT-oE!YO.3stGBKA/+\'<4\\\\&h","shift":77},{"set":",mwS]^%rx 4aPAl\'.@V3=X+Uny6?k[_}h0Bd>:/MT#|gp-f1Zq&`{vjzo(b\\"Hs!K52JI)7<9CtNDeOLQRFE\\\\*8c;WG~Y$ui","shift":33},{"set":"RgJ- fFWlky@jCo!A:tc&Ds%?`\\"2h7/Hb{IKqGSPdz]=iTpuMN9$B8~;*3Z\'VnO56<_Q.+0L,|w^ea)vrx[UXYEm4#1>(}\\\\","shift":17},{"set":"Vl3LK#zwv|u!WCe.r5[7D 0/&f,{P@Gih]x_SH(IE\\\\nQaJ)oOk4`9-U=mj6AZ\'tc1g+;^?<XF~Y*b>TsRp:M8B%dN}y2q$\\"","shift":82},{"set":"]|Hc%>i6PVxg~d`@Nwv5oItrLlGy<8Mfp(E_W\\\\JFSYQ9}\\"*Xu)/;,a[z.12 ?n!qOCRk3-e0b&K{T=Z4DBU+j$\'#A:7sh^m","shift":85},{"set":"v80fklaehRVU ,C!SW?9(TG@Ziz+K*\\\\5%Ot6;d\'j3Iy]#HF}BuEg`r^_:PQn1|XM/{~J42>xDp\\").Asc[o$LN7bmY&-=<wq","shift":84},{"set":"bNaJ-IG\'1f*8&PFk=i(Hrd3c4[;nwV ?B}A)x26>ZeS<L:5sgW`qm\\"l%oY$uvy,C\\\\Q9E@R_!7{]+|.X^~KUjphMTOz#Dt/0","shift":33},{"set":"k!2yn/~(6F }+wrag?*fI#cSH5bpC:i1N&;9@lj<,sde._vAL\'XET$\\"tuWMGq`oVKm^{\\\\hx)]DUQ>|RB%Z[-70Pz4O3Y=8J","shift":94},{"set":"1;Mmv5<~) B.:aARgo4-}|+*c{=@UuHIJtTlyGQCw\'0&!`K$3Xdx#P8>pD/VfbF^s\\"%OEkrj6]SeN9_[?qW,nzL(i2hZ7\\\\Y","shift":53},{"set":"&TNpd\\\\0K>/E[c~5]Z+$Ueb81s:rgx_HC-=D)2`a@zo^OfjAXv?k4;<}V.,hw#YmQ6Sli(B%9L |FJGIM37u\'R*Pqnty!{W\\"","shift":19},{"set":"}8AO{KSUkje^%<#VhzMvG`:W,PC|6;\\\\XLT47gq*\'NlbH.+yQiJ@x5Zado>BtFRw0D1E(9)cm~]p3$-[fIus!_=&\\"?/2Y rn","shift":62},{"set":"Bh)S`EcY%Vs>Aa+N(PJ?d9&\'* \\\\/1Hekb_M=l4gL7{!R]wX:ftr~iDmU\\"QG,I;n25qujCZW.OFK@}$6xy#Tv3o^|8-p0z[<","shift":32},{"set":"39.H+P5nx D$\\\\X4`\\"EO]~L7Bsur)_,y{dq<Q@tC6Fo:=S>(g^Ge1*?#hz}0!A2NlafWwRTj%UmVKi|\';pZ-J[v/M&YcbkI8","shift":18},{"set":"B$]U.10LW7y,N\\\\Y)lpA\\"K5b+/sVH48rcmw~oi?QZ2*(9&-Fz6[q@T{R|`D_^<fuxk}J=C eGO3#dtgSP\'!I;v:Mna>jXh%E","shift":34},{"set":"`yi)kR7%g$b}f*GUWz#[ wjAKY52pF-I8M/4Z:s+|cXCQVlt?(\\\\HJT.!E@mO{&Nx9da^vSq_1>3LB\'6hon]De,;~\\"Pr<0u=","shift":11},{"set":":R^9-IW{FZQ<,wjkGKB+]i!CX8qo)\\\\zgUrm%*5V31t.x@2Ypeun_fNSy4#$b\\"avALh \'6H[O7Ec~0;D=`&TM}|sJ(l?Pd/>","shift":46},{"set":"3*ib Etmr~9B5A=N%1PqKk6$O-IQZDXCu[&7s;\\"fwJ8:WnYUV\'c._#}2d)ogR@|</,(^\\\\j?H0`>GayLl]zepTFv{S4!x+Mh","shift":77},{"set":">t4V/Z6?-od{xnj;:0g(T&A5m1,<$9S|p\'+#e]izh!uw82[=Fyk._qa~G}37INPEY`OK s\\\\vLM%QDRBUcblCrW\\"f@^X)HJ*","shift":38},{"set":";hM_$k`FW:u95BlNeAi3|%={2[<!?QGnpmCRKdT]x\\\\zw,Y.OcX\\"EI+}SqPvyj&-7bZtH~oL@80U>D*a)4VrJs#\'g^16/f (","shift":17},{"set":"4^SCEde@}9upnL{#wy=a|:01si*t!>,B]mxFN%h$k;J~V c.oXIAf)D`6Y&zR\\\\_\'l8<\\"j2?3/Ub[M5TvgH-ZrQ7OP(q+GWK","shift":77},{"set":"7\\"H9U^30D%e-dZG/ua(Mt{pqKB|g.CiQ2s>$[T,VSnEb~rm&8X5\'1yRJc;fIl+z4P<oW?)=!*F6:Lh v]wY`_@\\\\kjAx#}ON","shift":77},{"set":"\' TL?[~ixyho@_9c\\"YqbaPn!=El4H08SG|V-R\\\\vek>;t3,wNpmW#Q%F6Dz$^A5`U/B.dZrKj}2uC1&IOXg:{(]+J<7fM*)s","shift":81},{"set":"*8xcQP]U)z$Gt2AWh;B|o.RMTv 1mj=,\\\\>KbI:E~4g-fqs%L!y^+Y}au0#59<&rXO@HnJ_?iweD3F7l\\"[/S6`ZdN(\'Cp{kV","shift":8},{"set":"+R f[pZ97e6ot<G;(\\\\qj,L>|bdu%])rzIY^U$PFykWwH#hM&Q8g3asm*_\\"v:4J}-E=~.VTKX{!\'/5S10xAn@?iB`D2ONcCl","shift":11},{"set":"ng4-^GH>NLbB_S)=uQzJ5|\'MC`O*]{30\\"lt(i1&F~w r@;$+<shKoZX6a7eDVxmI!8U:EjkY[yf.q}R/9WPpv2A#,c?T\\\\d%","shift":33},{"set":"W\\"F.:V%;(S051?xw+f\\\\8_}!c\'A]3{ gh@m~><-9JOukUID=CG$q[bN^tz6`M/|)d2sKyLZPRrTneHEa4BjlvQp&o,i#*Y7X","shift":58},{"set":"%Q4q7,H0L=~s3AVb([Ck6/c|S\'ezPG\\"i>)]IhvdJguBr:*O@;}_!8x\\\\faTD1R9wE^?`M mtN2Kn<Yo#5{+WlpUj$&-ZXyF.","shift":28},{"set":"3AuS./k#Zn!L=f$-\\"a]Kw@^t<%miU?(GsJNr\\\\Rq*B,:)l[Ixhz`Y15bgF~e>2Od_&W9Dvyc;7 {o\'4VX}QH+P6MpC8|j0ET","shift":34}]'
```
