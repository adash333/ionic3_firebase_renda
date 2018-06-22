# ionic3_firebase_renda

このページは、以下のサイトのMonaca+NiftyCloudMobileBackendアプリを参考に、ionic3アプリ作成の練習を行っているものです。

src/environments/environment.ts は、ご自身で作成して、ご自身のfirebaseのAPIキーその他をコピペしてください。

```javascript:environment.ts
// <>となっている部分は、自分のapiKeyを入力
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

作成中です。


【Monaca問題集】『オンラインランキング機能を作ってみよう！「連打ゲーム」』
https://github.com/NIFCloud-mbaas/MonacaFirstApp
