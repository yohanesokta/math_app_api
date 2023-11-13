# API [ math app ]

kenapa dibikin ? , kebutuhan untuk membuat aplikasi ku agar bisa membuat soal dan membacanya serta menampung beberapa user yang mengakses beserta score yang dimiliki

## API Reference

#### Get all items

```http
  GET /api/get
```

tidak ada request kusus untuk routes ini

#### Get One Soal Item

```http
  GET /api/get/soal{token}
```

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `token`   | `string` | **Required** token soal |

#### Cek Token

```http
  GET /api/validation/token{token}
```

| Parameter | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `token`   | `string` | **Required** token soal |

ini untuk pengecekan token sudah dipakai belum karena token dibuat untuk bisa dimodifikasi

## FUNGSI PEMBUATAN

#### Create Data Soal (Document)

```http
  GET /api/create
```

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `nama`    | `string` | **Required**. Nama untuk Soal ! |
| `token`   | `string` | **Required**. token soal        |
| `link`    | `string` | **Required**. link video        |
| `owner`   | `string` | **Required**. owner soal        |

Document ini berisi soal yang digunakan sebagai document utama yang akan diambil

##

#### Create materi (Document->materi)

```http
  GET /api/create/materi
```

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `isi`     | `string` | **Required**. isi Soal   |
| `token`   | `string` | **Required**. token soal |
| `image`   | `string` | **Not Required**. Images |

Document ini berisi isi materi yang berada di Document Soal ( bingung gak ? 😁)

##

#### Create Penilaian Soal (Document->materi)

```http
  GET /api/create/soal
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `isi`     | `string` | **Required**. isi Soal Penilaian    |
| `token`   | `string` | **Required**. token soal            |
| `image`   | `string` | **Not Required**. Images            |
| `ans1`    | `string` | **Required**. kemungkinan jawaban 1 |
| `ans2`    | `string` | **Required**. kemungkinan jawaban 2 |
| `ans3`    | `string` | **Required**. kemungkinan jawaban 3 |
| `ans4`    | `string` | **Required**. kemungkinan jawaban 4 |
| `key`     | `string` | **Required**. kunci jawaban         |

Document ini berisi Penilaian materi yang memiliki soal imgae dan jawaban serta kunci jawaban nya ( tambah bingung gak ? 😁)

## END GAME (❁´◡`❁)

Saya memberitahukan bahwa api ini dibikin untuk aplikasi saya yaitu [Math_APP](https://github.com/yohanesokta/math_app-main) jadi tidak terdapat error ketika kalian salah memasukan input atau apapun
