<p><b>README untuk Soal Nomor 2 Balance Brancket</b>
<hr/>
<b>Masalah Kurung Seimbang<b>

Proyek ini berisi solusi untuk menentukan apakah sebuah string yang berisi kurung seimbang atau tidak. String kurung yang seimbang terdiri dari pasangan kurung buka dan tutup, di mana setiap kurung buka memiliki pasangan kurung tutup dari jenis yang sama, dan kurung-kurung tersebut bersarang dengan benar.

<b>Pernyataan Masalah</b>
Diberikan sebuah string yang berisi berbagai jenis kurung, termasuk tanda kurung biasa (), kurung siku [], dan kurung kurawal {}, tentukan apakah string tersebut seimbang. Kurung-kurung tersebut bisa dipisahkan oleh spasi atau tidak.

Contoh
Input: { [ ( ) ] }

<b>Output: YES</b>
Penjelasan: Setiap kurung seimbang, dengan setiap kurung buka memiliki pasangan kurung tutup dari jenis yang sama.
Input: { [ ( ] ) }

<b>Output: NO</b>
Penjelasan: String { [ ( ] ) } tidak seimbang karena karakter yang terkurung oleh kurung kurawal {}, yaitu [ ( ].
Input: { ( ( [ ] ) [ ] ) [ ] }

<b>Output: YES</b>
Penjelasan: Setiap kurung seimbang, dengan setiap kurung buka memiliki pasangan kurung tutup dari jenis yang sama, meskipun struktur kurung tidak teratur.
Solusi
Fungsi isBalanced menerima sebuah string sebagai input dan mengembalikan YES jika string tersebut seimbang, dan NO jika tidak.

</p>
