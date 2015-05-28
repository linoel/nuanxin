Meteor.startup(function() {
  var users = [
    {
      emails: [{
        address: 'nick@exygen.io',
        verified: false,
        primary: true
      }],
      profile: {
        name: 'nickw'
      },
      services: {
        'meteor-developer': {
          id: '2jefqB8rsQ2q3TuRW',
          username: 'nickw',
          emails: [{
            address: 'nick@exygen.io',
            verified: false,
            primary: true
          }]
        }
      }
    }
  ];

  var products = [
    {
      url: 'https://respond.ly/',
      name: '抑郁症',
      tagline: '抑郁症是一种常见的心境障碍，可由各种原因引起',
      commentill: '疾病简介\n抑郁症是一种常见的心境障碍，可由各种原因引起，以显著而持久的心境低落为主要临床特征，且心境低落与其处境不相称，严重者可出现自杀念头和行为;多数病例  有反复发作的倾向，每次发作大多数可以缓解，部分可有残留症状或转为慢性。所谓单相抑郁症是相对于双相抑郁症而言，指患者只有抑郁发作，从未有无躁狂或者轻躁狂发作。抑郁症至少有 10 ％的患者可出现躁狂发作，此时应诊断为双相障碍。另外我们常说的抑郁症，其实是指临床上的重症抑郁症（major depression），人群中有16%的人在一生的某个时期会受其影响。患抑郁症除了付出严重的感情和社会代价之外，经济代价也是巨大的。据世界卫生组织统计,抑郁症已成为世界第4大疾患,预计到2020年,可能成为仅次于冠心病的第二大疾病。',
    },
    {
      url: 'http://versoapp.com/',
      name: '发作性睡病',
      tagline: '是一种原因不明的慢性睡眠障碍，临床上以不可抗拒的短期睡眠发作为特点',
      commentill: '发作性睡病（narcolepsy）是一种原因不明的慢性睡眠障碍，临床上以不可抗拒的短期睡眠发作为特点，多于儿童或青年期起病。往往伴有猝倒发作、睡眠瘫痪、睡眠幻觉等其他症状，合称为发作性睡病四联症。发作性睡病一词，由Gelineau于1880年首创，因此本病又称Gelineau综合征。',
    },

  ];

  if (Meteor.users.find({}).count() === 0) {
    _(users).each(function (user) {
      Meteor.users.insert(user);
    });
  }

  var author = Meteor.users.find().fetch()[0];
  if (Products.find({}).count() === 0) {
    _(products).each(function (product) {
      Products.insert({
        userId: author._id,
        url: product.url,
        name: product.name,
        tagline: product.tagline,
        commentill: product.commentill,
        createdAt: new Date()
      });
    });
  }
});
