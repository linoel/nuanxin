Posts = new Mongo.Collection('Posts');

Posts.attachSchema(new SimpleSchema({

  items: {
          label: "服药卡",
          type: Array,
          optional: true,
          minCount: 1,
          maxCount: 10
       },
       "items.$": {
          type: Object
       },
       "items.$.datebegin": {
         label: "起始时间",
         type: Date,
          optional: true,
       },

       "items.$.dateend": {
         label: "停止时间",
         type: Date,
          optional: true,
       },

       "items.$.item": {
         label: "药品名",
         type: String,
         allowedValues: [
         "奥氮平",
         "百忧解",
         "养脑清血",
         "来士普",
         "阿斯匹林",
          ],
          optional: true,
       },

       "items.$.times": {
         label: "频次",
          type: String,
          allowedValues: [
            "每晚一次",
            "每早一次",
            "每日两次",
            "每日三次",
            "隔日一次",
           ],
           optional: true,
       },

       "items.$.tablet": {
         label: "片剂",
          type: String,
          allowedValues: [
            "半片",
            "一片",
            "1.5片",
            "2片",
            "3片",
           ],
           optional: true,
       },

       "items.$.liq": {
         label: "液剂",
          type: String,
          allowedValues: [
            "1ml",
            "2ml",
            "3ml",
            "4ml",
            "5ml",
            "10ml",
            "20ml",
           ],
           optional: true,
       },

}));
