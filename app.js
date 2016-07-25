Vue.filter('marked', function(value){
  return marked(value)
})


new Vue({
  el: '#app',
  data: {
    about: []
  },
  filters: {
    marked: marked
  },
  created: function(){
    this.fetchMyData();
  },
  methods: {
    fetchMyData: function(){
      $.getJSON('https://api.airtable.com/v0/appNOtPfC2oY5GcGt/Pages?api_key=keyRTLlrVS02vC3Vx', function(data){
        this.about = data.records[0].fields;
      }.bind(this));
    }
  },
});
 


// {"records":[{"id":"recx071HiO9JW3poj","fields":{"title":"Our Leadership","body_content":"\n![](https://dl.airtable.com/b8qaM6ysSeaCtF5J1VrT_Untitled%20design.jpg)\n\n## Our Pastor &amp; Family\n\nRyan Hayden has served as pastor at Bible Baptist since November 2011. Prior to coming to Bible Baptist, Ryan served as a Christian school teacher, assistant pastor, and camp director at Fairview Baptist ministries in Athens, TN. Ryan is a graduate of Crown College, in Knoxville, TN and has been working towards a master degree from Pensacola Christian College. Ryan grew up in New Hampshire and northeast Virginia.\n\nPastor Hayden enjoys preaching expository messages and taking a hands on approach to children's ministry. He publishes a regular podcast called \"The Foolishness of Preaching\" where he interviews a pastor or preacher about their preaching. He often says his greatest privilege (besides his own family) is getting to serve the people at Bible Baptist.\n\nPastor Hayden is joined in the ministry by his wife Amanda and three children: Audrey (7), Molly (5) and Noah (3).\n\nWhen not ministering, Pastor Hayden enjoys reading, blogging, cooking pizza in his outdoor pizza oven, designing websites and spending time with his family.\n\nYou can follow Pastor Hayden on twitter or facebook and read his blog and check out his design work at pastorryanhayden.com.\n\n---\n\n## Our Youth Pastor\n\nAdam McCaslin recently came on as the youth pastor at Bible Baptist. Brother Adam grew up in Northwest Georgia. He has degrees from both Crown College and Crown Seminar and has years of experience working in children's and youth ministry. Adam directs our youth group, our youth and children's Sunday School teachers, and our Patch the Pirate Club program.","featured_image":[{"id":"att0KZmrsS1hGnKtp","url":"https://dl.airtable.com/SZGGxhlnRE2XYsrMpR6m_leadership_header.jpg","filename":"leadership_header.jpg","size":400123,"type":"image/jpeg","thumbnails":{"small":{"url":"https://dl.airtable.com/Uxn1ua3fRHusy72ZJirp_small_leadership_header.jpg","width":64,"height":36},"large":{"url":"https://dl.airtable.com/Ks8HJn1RWykHurqbjNIe_large_leadership_header.jpg","width":512,"height":512}}}],"updated_at":"2016-06-24","published":true,"ten_minutes":0,"updated_or_created_ten_minutes":0},"createdTime":"2016-05-13T16:18:06.000Z"}]}

// {"title":"Our Leadership","body_content":"\n![](https://dl.airtable.com/b8qaM6ysSeaCtF5J1VrT_Untitled%20design.jpg)\n\n## Our Pastor &amp; Family\n\nRyan Hayden has served as pastor at Bible Baptist since November 2011. Prior to coming to Bible Baptist, Ryan served as a Christian school teacher, assistant pastor, and camp director at Fairview Baptist ministries in Athens, TN. Ryan is a graduate of Crown College, in Knoxville, TN and has been working towards a master degree from Pensacola Christian College. Ryan grew up in New Hampshire and northeast Virginia.\n\nPastor Hayden enjoys preaching expository messages and taking a hands on approach to children's ministry. He publishes a regular podcast called \"The Foolishness of Preaching\" where he interviews a pastor or preacher about their preaching. He often says his greatest privilege (besides his own family) is getting to serve the people at Bible Baptist.\n\nPastor Hayden is joined in the ministry by his wife Amanda and three children: Audrey (7), Molly (5) and Noah (3).\n\nWhen not ministering, Pastor Hayden enjoys reading, blogging, cooking pizza in his outdoor pizza oven, designing websites and spending time with his family.\n\nYou can follow Pastor Hayden on twitter or facebook and read his blog and check out his design work at pastorryanhayden.com.\n\n---\n\n## Our Youth Pastor\n\nAdam McCaslin recently came on as the youth pastor at Bible Baptist. Brother Adam grew up in Northwest Georgia. He has degrees from both Crown College and Crown Seminar and has years of experience working in children's and youth ministry. Adam directs our youth group, our youth and children's Sunday School teachers, and our Patch the Pirate Club program.","featured_image":[{"id":"att0KZmrsS1hGnKtp","url":"https://dl.airtable.com/SZGGxhlnRE2XYsrMpR6m_leadership_header.jpg","filename":"leadership_header.jpg","size":400123,"type":"image/jpeg","thumbnails":{"small":{"url":"https://dl.airtable.com/Uxn1ua3fRHusy72ZJirp_small_leadership_header.jpg","width":64,"height":36},"large":{"url":"https://dl.airtable.com/Ks8HJn1RWykHurqbjNIe_large_leadership_header.jpg","width":512,"height":512}}}],"updated_at":"2016-06-24","published":true,"ten_minutes":0,"updated_or_created_ten_minutes":0}