module.exports = {
  avgs: ['80+', '90+', '100+', '110+'],
  abord_time: ['2017', '2018', '2019'],
  activity: ['一段经历', '两段经历', '多余两段以上'],
  scientific: {
    title: '科学定位，7步突破雅思高分',
    steps: ['全真考试模拟', '制定学习计划', '正课学习', '作业批改', '月考测试', '服务管控', '考前模考'],
    ct1: {
      topImg: require('../../../img/other/yupei/table-title.png'),
      tbs: {
        thead: [{ txt: '听力 6分', href: '#tl' }, { txt: '阅读 5分', href: '#yd' }, { txt: '写作 4分', href: '#xz' }, { txt: '口语 4分', href: '#ky' }],
        tdList: [
          {
            key: 'tl',
            list: [
              ['词汇', '不达标', '学生词汇量少，高中词汇水平，导致有很多生词听不出来'],
              ['语法', '达标', '学生对很多语法知识点掌握不好，导致长句子听不出来'],
              ['解题思路', '不达标', '没有看懂题干，找不到答案相关的句子，不会做题目预测'],
              ['逻辑', '达标', '不会根据句子结构及逻辑连词判断句子结构'],
              ['考点', '达标', '学生没有了解过十大场景基本考点，导致不会边听边判断考点。'],
              ['背景知识', '不达标', '由于对学科知识掌握不全，在听听力的时候，导致有的学科理解困难.'],
            ],
          },
          {
            key: 'yd',
            list: [
              ['词汇', '不达标', '学生词汇量少，高中词汇水平，导致有很多生词听不出来'],
              ['语法', '不达标', '基础语法不牢固，知识点不全，如非限定定语从句和九种状语从句'],
              ['长难句', '不达标', '无法判断句子成分，断句错误，指代不明，导致理解困难'],
              ['逻辑', '达标', '有些逻辑理解错误，比如把result from理解成导致'],
              ['解题思路', '达标', '没有看懂题干，找不到答案相关的句子，不会做题目预测'],
              ['背景知识', '不达标', '由于对学科知识掌握不全，在听听力的时候，导致有的学科理解困难.'],
              ['速度', '达标', '在看文章的时候，生词和长难句较多，同时不会详略得当的读文章'],
            ],
          },
          {
            key: 'xz',
            list: [
              ['论证', '达标', '写作只写了两段，论点之间没有紧密联系'],
              ['文法', '达标', '语法错误较多，没有使用同义词替换'],
              ['逻辑', '达标', '两个论点之间关系不紧密'],
              ['结构', '达标', '结构错误，字数不足'],
            ],
          },
          {
            key: 'ky',
            list: [
              ['语音', '达标', '辅音发音不准，比如字母r、l发不出来，语音语调有问题'],
              ['词汇', '不达标', '用词比较单一，没有进行同义词的替换'],
              ['语法', '达标', '句子结构简单'],
              ['思路', '不达标', '不会用详细的例子解释论点'],
            ],
          },
        ],
      },
    },
    ct2: {
      title: '李同学雅思学习整体规划',
      tbs: {
        thead: [{ txt: `基础阶段<br />12月初-1月底`, href: '#jc' }, { txt: `强化阶段<br />2月初-4月底`, href: '#qh' }, { txt: `冲刺阶段<br />5月初-5月底`, href: '#cc' }],  //  eslint-disable-line
        tdList: [
          {
            key: 'jc',
            list: [
              ['上课内容', '课后自主完成'],
              ['听力', 'section1考点+必考题型', 'task1 听力', '每天跟读至少1小时'],
              ['语法', '词法+句法+复杂句', 'task2 阅读', '精读三个段落，反思语法'],
              ['', '', 'task3 词汇', '背诵高中词汇每天1个list'],
              ['', '', 'task4 口语', '背诵妙语连珠每天1个话题'],
            ],
          },
          {
            key: 'qh',
            list: [
              ['上课内容', '课后自主完成'],
              ['听力', '十大场景+五大题型', 'task1 听力', '套题练习一套+每天跟读至少1小时'],
              ['阅读', '十大题型技巧', 'task2 阅读', '套题练习一套+精读一篇文章'],
              ['写作', '大小作文文章结构讲解', 'task3 写作', '每周两套作文赏析+模仿写作+修改'],
              ['口语', '口语回答思路拓展+素材积累', 'task4 口语', '课堂素材背诵【微信语音发群】'],
              ['', '', 'task5 词汇', '背诵四级词汇，每天1个list'],
            ],
          },
          {
            key: 'cc',
            list: [
              ['上课内容', '课后自主完成'],
              ['听力', '考点+场景+题型综合训练', 'task1 听力', '套题练习一套+每天跟读至少1小时'],
              ['阅读', 'OG套题讲解+文章逻辑分析', 'task2 阅读', '套题练习一套+精读一篇文章'],
              ['写作', '高分词汇+高分句式补充', 'task3 写作', '高分词汇+句式+范文赏析背诵'],
              ['口语', '口语话题整合+预测题库对练', 'task4 口语', '预测题库话题【微信语音发群】'],
              ['', '', 'task5 词汇', '背诵六级词汇，每天1个list'],
            ],
          },
        ],
      },
    },
    ct5: `<tbody>
                    <tr>
                      <td>记录</td>
                      <td>考试/测试日期</td>
                      <td>总分</td>
                      <td>听力</td>
                      <td>阅读</td>
                      <td>写作</td>
                      <td>口语</td>
                      <td>词汇</td>
                      <td>语法</td>
                    </tr>
                    <tr>
                      <td>模考1</td>
                      <td>5月30日</td>
                      <td>4.5</td>
                      <td>5</td>
                      <td>5</td>
                      <td>4</td>
                      <td>4</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>月考1</td>
                      <td>6月30日</td>
                      <td>4.42</td>
                      <td>5</td>
                      <td>5</td>
                      <td>4</td>
                      <td>3.5</td>
                      <td>5</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>月考2</td>
                      <td>7月30日</td>
                      <td>5.13</td>
                      <td>6</td>
                      <td>6</td>
                      <td>4.5</td>
                      <td>4</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>月考3</td>
                      <td>8月30日</td>
                      <td>5.38</td>
                      <td>6</td>
                      <td>6.5</td>
                      <td>5</td>
                      <td>4</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>月考4</td>
                      <td>9月30日</td>
                      <td>5.88</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>5.5</td>
                      <td>4.5</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>月考5</td>
                      <td>10月30日</td>
                      <td>6.13</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>5.5</td>
                      <td>5.5</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>真实1</td>
                      <td>11月19日</td>
                      <td>6.0</td>
                      <td>6</td>
                      <td>7</td>
                      <td>6</td>
                      <td>5.5</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>真实2</td>
                      <td>12月3日</td>
                      <td>6.5</td>
                      <td>6.5</td>
                      <td>7</td>
                      <td>6</td>
                      <td>6</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>`,
    ct6: `<tbody>
                    <tr>
                      <td>课程内容</td>
                      <td style={{ width: '140px' }}>课堂表现</td>
                      <td>课上知识掌握率</td>
                      <td>课下作业</td>
                      <td>作业完成率</td>
                      <td style={{ width: '80px' }}>问题点</td>
                      <td>改进计划</td>
                    </tr>
                    <tr>
                      <td>饼图全面解析</td>
                      <td>积极互动，会思考</td>
                      <td>90%</td>
                      <td>剑4test1写作</td>
                      <td>60%</td>
                      <td>词汇基础不过关，技巧难应用</td>
                      <td>调整督导计划，加大词汇力度</td>
                    </tr>
                    <tr>
                      <td>线图全面解析</td>
                      <td>犯困了，中间休息了10分钟状态才基本回来</td>
                      <td>70%</td>
                      <td>课件作业完成</td>
                      <td>70%</td>
                      <td>作业完成欠佳，课上知识不能练习熟练</td>
                      <td>1.家长帮忙督促2.循序渐进添加作业量，有个适应过程</td>
                    </tr>
                    <tr>
                      <td>表格全面解析</td>
                      <td>迟到半小时，上课状态不好，沟通后了解前天晚上忙作品集，休息没有保障，注意休息</td>
                      <td>30%</td>
                      <td>复习课件+词汇背诵</td>
                      <td>80%</td>
                      <td>课上效率不够高效</td>
                      <td>调整作息，保证效率</td>
                    </tr>
                    <tr>
                      <td>柱图全面解析</td>
                      <td>准备六级考试，课下雅思精力有些分散，课上还是很好的</td>
                      <td>95%</td>
                      <td>混合图图形写作</td>
                      <td>90%</td>
                      <td>课下自主复习量不足</td>
                      <td>班主任老师加大督导力度</td>
                    </tr>
                  </tbody>`,
  },

  analysis: {
    title: '顺顺语培优秀案例解析',
    datas: [
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '吴同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '雅思学时', t2: '50小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '1个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高1分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '7.5分' },
        ],
        bottom: {
          h4: '【顺顺语培：扎扎实实帮助学生提高每一分】',
          p: '吴同学，高三高考结束，雅思从未接触，经过老师专业测评后，细致分析了吴同学雅思学习的短板，报名了顺顺雅思一对一50小时雅思核心技巧课程及冲刺点拨课程。授课老师白老师和刘老师合带学生，各个击破学生弱点，针对写作和口语的中国学生老大难问题进行了大批量的批改工作。最终吴同学第1次考试总分7分！考试结束后老师进一步给同学查漏补缺，半个月后第2次成功刷到7.5分。高中生7.5分不是梦！',
          img: require('../../../img/other/yupei/1.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '曹同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '托福学时', t2: '60小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '3个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '25' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '116' },
        ],
        bottom: {
          h4: '【顺顺语培：没有不可能！】',
          p: '今年大二在读的曹同学已经经历过4次考试，自己也准备了很长时间，取得了91分的成绩，但是梦想去TOP10的名校要求她必须达到110分以上，走了很多家机构跟很多的老师接触之后都没有让他满意，成绩也没有提升。经过同学推荐来到顺顺语培，高端名师根据她的情况针对性地制定适合她的学习方法，学习任务和答题技巧，顺顺语培，我们有数据和实力保证你学习效率最大化！最终成绩114！还有什么不可能！',
          img: require('../../../img/other/yupei/2.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '柯同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '雅思学时', t2: '30小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '1个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高0.5分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '6.5分' },
        ],
        bottom: {
          h4: '【教师寄语】',
          p: '柯同学就读于北京师范大学，基于多次雅思考试总分6分，但口语和写作5-5.5分。来到顺顺后，我针对学生写作的问题进行了文章文体结构的梳理，并进行大量的批改和二次批改；口语部分柯同学本身流利度和发音不错，但针对口语考官仍然不愿意给出6分的问题，我站在考官角度给同学分析了考官想听到的考点，并经过一一练习，最终双双上到6分。出题点就是考点，考点就是我们的讲课点，讲课点就是考试中的得分点~~~',
          img: require('../../../img/other/yupei/3.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '何同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '托福学时', t2: '40小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '3个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高21分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '107分' },
        ],
        bottom: {
          h4: '【顺顺语培：科学战术可以碾压一切客观困难】',
          p: '今年大四在读的何同学面临申请、考试、毕设的三重压力，期待短时间从八十分冲刺高分段。语培老师为她精心设计科学的考试方案，用好用对课上的每一分每一秒。最后王同学在11月26日的考试中力克考试换题、生病、没时间种种困难，取得了107分的好成绩，和她考前期末测验的成绩一模一样！科学的安排和精确的诊断，为何同学的高分保驾护航！',
          img: require('../../../img/other/yupei/4.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '刘同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '雅思学时', t2: '20小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '1个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高1分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '7分' },
        ],
        bottom: {
          h4: '【顺顺语培：扎扎实实帮助学生提高每一分】',
          p: '刘同学来顺顺之前五战雅思最高分就卡在了6，报名了顺顺雅思一对一20小时提分点播课。授课老师白老师给学生做了详细分析了为什么多次都卡在6分上不去的原因，找到问题点并针对问题解决学生的惯性错误。刘同学上月末第六次刷分一下子提高了1分！总分到7！学生自己也很意外，这回可以和雅思说再见啦！',
          img: require('../../../img/other/yupei/5.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '马同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '托福学时', t2: '60小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '2个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '首战直升101' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '101分' },
        ],
        bottom: {
          h4: '【顺顺语培：没时间？那就科学地提高效率！】',
          p: '今年大三在读的马同学两个月前开始接触托福，大学英语六级压线通过。经过六十课时的学习，11月19日首战托福直接斩下101分，顺利将阶段目标收入囊中。马同学在紧锣密鼓备战下次托福的同时还在学习GMAT。这次的结果体现了前期科学规划的强大作用。顺顺语培，我们针对性地制定双科计划，保证双科顺利开展。在一天天迫近的申请截至日期前焦虑的你，还在犹豫什么？',
          img: require('../../../img/other/yupei/6.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '程同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '雅思学时', t2: '50小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '3个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高1分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '6分' },
        ],
        bottom: {
          h4: '【顺顺语培：掌握雅思突破技巧，学习不再徒劳！】',
          p: '高二在读的程同学凭感觉自己刷套题，投入了大量的精力，阅读和听力得分却总是起伏不定，雅思整体一直卡在了5分段，两次考试最高分5.5。雅思vip一对一老师准确诊断把脉后，制定了针对程同学情况的个性化方案，在提高基础能力的同时强化技巧训练，培养考点预测能力。经过50课时分阶段、分重点的精心教学，两个月后提高到6分。为高中孩子基础弱洗白！',
          img: require('../../../img/other/yupei/7.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '高同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '托福学时', t2: '80小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '5个月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高41分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '95分' },
        ],
        bottom: {
          h4: '【顺顺语培：全方位管控保证高中生学习！】',
          p: '今年高二的高同学前期成绩54分，自主性一般，学生学习时间有限，又有学校课程的压力，整个学习非常紧张，顺顺教学团队授课老师、班主任老师、助教老师、课程CC老师多角色跟进学生的课堂学习、自主课下学习、助教督导，课上授课课下答疑，助教跟进，全真模考，实时跟进学生的学习每一步！',
          img: require('../../../img/other/yupei/8.png'),
        },
      },
      {
        top: [
          { icon: require('../../../img/other/yupei/tab1.png'), t1: '学生', t2: '赵同学' },
          { icon: require('../../../img/other/yupei/tab2.png'), t1: '雅思学时', t2: '40小时' },
          { icon: require('../../../img/other/yupei/tab3.png'), t1: '学习时长', t2: '1个半月' },
          { icon: require('../../../img/other/yupei/tab4.png'), t1: '提高幅度', t2: '提高1分' },
          { icon: require('../../../img/other/yupei/tab5.png'), t1: '考试成绩', t2: '7分' },
        ],
        bottom: {
          h4: '【顺顺语培：突破瓶颈，打造华丽高分】',
          p: '赵同学自学雅思多月，做了很多努力，但对雅思考试技巧不得要领，主要是没有正确的阅读方法，一直使用死读文字，试图仔细理解语义的方式做题。赵同学和妈妈对机构的培训起初非常不信任，经过老师专业的问题分析，迫于出分压力，报名雅思冲刺课程，妈妈来北京开会期间带赵同学顺便来京学习，经过半个月突破，顺利考到目标分数7分，阅读最高8.5。名校offer，语言不是问题！',
          img: require('../../../img/other/yupei/9.png'),
        },
      },
    ],
  },

  business: {
    title: '来顺顺不只是提分这么简单',
    list: [
      { img: require('../../../img/other/yupei/yupei1.png'), txt: '顺顺语培，助你拿高分' },
      { img: require('../../../img/other/yupei/yupei2.png'), txt: '顺顺活动，助你提升软实力', link: 'http://activities.liuxue.com/' },
      { img: require('../../../img/other/yupei/yupei3.png'), txt: '顺顺留学，助你圆梦世界名校', link: 'http://zt.liuxue.com/usa/' },
      { img: require('../../../img/other/yupei/yupei4.png'), txt: '顺顺移民，助你与家人团聚海外', link: 'http://www.sihaiyimin.com/' },
    ],
  },

  text: {
    strong: '顺顺语培事业部',
    t1: `目前有北京、天津、上海、广州、深圳、济南、青岛、成都、
              长沙等分校，下设美研托福部，GRE部，GMAT部，雅思部、高中部，教研部等十余个部门，专注
              于各科出国考试， 全方位覆盖 托福、雅思、GRE、GMAT、SAT、ACT、SSAT、小托福、AEAS、AP、A-level以
              及各种能力提升课程。为各阶段学生提供针对性强、提分效果好的一对一及班课课程。`,
    t2: `顺顺语培的核心竞
              争力在于拥有一支强大的教学和教研队伍。语培成立之初，便汇集了众多留学培训行业内的优秀教师。这些教师
              均具备5年以上一线教学及教研经验，入职顺顺之前均为其他大型留学机骨干教师，半数为经理、总监级别员工。`,
    t3: '截止目前，顺顺语培提分率达到100%， 高分率超过50%，远超行业平均水平，真正做到了扫除申请障碍，助力名校之梦！',
  },

  teachTitle: '业内顶级名师助你圆梦世界顶级名校',

  famteacher: [
    {
      logo: require('../../../img/other/yupei/img1.png'),
      p: '教师教龄5-15年，每个授课老师都至少6000多小时的授课经验以及几百名学生的成功案例。授课教师绝没有像其他培训机构的应届毕业生。',
    },
    {
      logo: require('../../../img/other/yupei/img2.png'),
      p: '老师大部分都是海归，高学历加上海外留学经验能给学生带来更多不同的教学感受，保证了学习效果。',
    },
    {
      logo: require('../../../img/other/yupei/img3.png'),
      p: '老师每年参加三次考试，及时了解题型的变化，用自己的考试经历带给学生更多的学习经验和学习。',
    },
    {
      logo: require('../../../img/other/yupei/img4.png'),
      p: '不仅中教团队优秀，外教团队也是同样标准。语培明星外教ALEX十多年教龄，教学精彩绝伦，曾多次受CCTV国际频道的邀请做客英语节目。',
    },
  ],

  teachers: [
    {
      image: require('../../../img/other/yupei/ywy.png'),
      name: '杨雯榆',
      xing: '杨',
      plist: [
        '北京外国语大学英语教育专业毕业',
        '西班牙马德里自治大学交换生',
        '英语专业八级，雅思7.5分',
        '多年英语培训经验和雅思教学经验',
        '曾任某留学机构雅思教研负责人职务',
        '对雅思课程设置和教学有独特的见解',
      ],
    },
    {
      image: require('../../../img/other/yupei/jl.png'),
      name: '江蓠',
      xing: '江',
      plist: [
        '湖南大学研究生毕业 MTI口译专业',
        '2015湖南省优秀毕业生',
        '2014年度国家研究生奖学金',
        '第三届全国口译大赛 多个奖项',
        '上海市高级口译，CATTI 三级口译，英语专业八级，雅思7.5分',
        '多年雅思教学经验，精通写作逻辑，善于浅显易懂地讲解复杂的逻辑现象',
      ],
    },
    {
      image: require('../../../img/other/yupei/lixu.png'),
      name: '李旭',
      xing: '李',
      plist: [
        '英国爱丁堡大学教育硕士',
        '5年雅思教学经验，2年雅思教研经验',
        '雅思学生最高分8分',
        '多次和雅思之父迈克尔•米兰诺维奇博士(Dr. Michael Milanovic)面对面交流',
        '了解雅思考点和训练点，擅长语言教学中因材施教',
      ],
    },
    {
      image: require('../../../img/other/yupei/lx.png'),
      name: '刘鑫',
      xing: '刘',
      plist: [
        '北卡罗来纳州立大学交换生',
        '英语专业八级优秀，获得高级口译证书',
        '雅思8分',
        '5年雅思丰富授课经验',
        '根据不同学生情况，制定专属学习计划和课程',
        '直击解题关键点，帮助学生高效备考，短期内提高分数',
      ],
    },
    {
      image: require('../../../img/other/yupei/zsm.png'),
      name: '周双妹',
      xing: '周',
      plist: [
        '中南民族大学语语言学硕士',
        '拥有高级教师资格证书',
        '5年一线雅思教学经验',
        '授课风格通俗易懂，幽默风趣',
        '对待学生认真负责，十分有耐心',
        '对雅思有自己独特的教学心得',
        '短期高效提分',
        '帮助很多学生成功申请到英国G5名校',
      ],
    },
    {
      image: require('../../../img/other/yupei/gsh.png'),
      name: '郭纾含',
      xing: '郭',
      plist: [
        '澳洲悉尼大学语言与传播学硕士 荣誉硕士毕业',
        '本科获得浙江省优秀毕业生称号',
        '5年托福教学经验，提分率99%，高分率80%',
        '教授学生年龄范围广，因材施教',
        '针对不同学生采取不同的教学方法',
        '有独特的口语练习和听力训练体系',
      ],
    },
    {
      image: require('../../../img/other/yupei/lfj.png'),
      name: '李凤娇',
      xing: '李',
      plist: [
        '美国东北大学交流优秀生',
        '6年授课经验，学生提分100%',
        '第三届全国新浪托福授课大赛冠军',
        '曾任某机构教学经理，统领教学和教研',
        '专注于托福教学和提升学生成绩',
        '深知托福命题方向和善于点拨学生，让学生扎实提分',
      ],
    },
    {
      image: require('../../../img/other/yupei/fy.png'),
      name: '冯云',
      xing: '冯',
      plist: [
        '北京航空航天大学硕士毕业',
        '拥有英语专业八级,高级教师资格证书',
        'ETS认证托福教师，紧跟ETS托福考试动向',
        '5年工作经验，深知学生备考TOEFL痛点难点，针对性指导学生达到理想成绩',
        '专注托福教育与学术前沿，是每一位托福考生的良师益友',
      ],
    },
    {
      image: require('../../../img/other/yupei/lhj.png'),
      name: '兰慧君',
      xing: '兰',
      plist: [
        '天津外国语大学英语语言文学硕士',
        '英语专业八级优秀，人事部二级笔译',
        '6年一线托福教学教研经验',
        '授课通俗易懂，条理清晰，逻辑性强',
        '对考点挖掘深入透彻，快速把握学生薄弱环节',
        '课程切入点设置科学合理，学习计划制定有效完善',
        '单科短期提分5-12分',
      ],
    },
    {
      image: require('../../../img/other/yupei/lmy.png'),
      name: '刘梦媛',
      xing: '刘',
      plist: [
        '东北大学英语语言文学学士，',
        '英语专业八级优秀水平，高级口译证',
        '8年托福&GRE丰富教学经验，行业翘楚级专家，',
        'GRE336、托福118逆天成绩缔造者。',
        '教授学生提分率100%，高分率87%，',
        'GRE填空，托福阅读口语教学领域独具建树',
      ],
    },
    {
      image: require('../../../img/other/yupei/tr.png'),
      name: '田然',
      xing: '田',
      plist: [
        '英语专业八级，托福全科老师',
        '阅读听力满分，口语写作高分',
        'TKT教学能力测试Band4等级',
        '综合各科，精准把握',
        '因材施教，依据学生基础制定周密计划，把握关键节点，精准提分',
        '促进同学理解英语思维的理性，逻辑性，正确评价自己的学习及进步',
      ],
    },
    {
      image: require('../../../img/other/yupei/yy.png'),
      name: '杨艺',
      xing: '杨',
      plist: [
        '北京航空航天大学硕士毕业',
        '拥有英语专业八级,高级教师资格证书',
        'ETS认证托福教师，紧跟ETS托福考试动向',
        '5年工作经验，深知学生备考TOEFL痛点难点，针对性指导学生达到理想成绩',
        '专注托福教育与学术前沿，是每一位托福考生的良师益友',
      ],
    },
    {
      image: require('../../../img/other/yupei/zr.png'),
      name: '郑瑞',
      xing: '郑',
      plist: [
        '新浪授课大赛五星金牌讲师',
        '顺顺留学雅思全科明星讲师',
        '深谙留学考试规律和出题方向',
        '5年英语培训经验，授课时长6000+',
        '学生提分率高达95%',
      ],
    },
  ],

  tables: {
    title: '顺顺语培海量高分提分案例',
    titleList: [
      '客户', '考试科目', '授课方式', '年级', '本科院校', '入门等级', '脱产', '只周末', '辅导时间/月', '辅导前', '提高', '辅导后',
    ],
    list: [
      ['张同学', '托福', '国内网授', '高二、三', '山东潍坊一中', '零基础', '否', '否', '12', '60', '35', '95'],
      ['张同学', '托福', '面授', '大学', '北京工业大学', '中', '否', '否', '9', '68', '45', '113'],
      ['张同学', '托福', '面授', '大三', '北京工业大学', '中', '否', '否', '1', '0', '81', '81'],
      ['尚同学', '托福', '面授', '高三', '北京12中学', '较低', '否', '是', '2', '59', '30', '89'],
      ['吴同学', '网授+面授', '大三', '中', '扬州大学', '否', '否', '否', '5', '68', '21', '89'],
      ['吴同学', '面授', '大三', '较低', '中央财经大学', '否', '否', '否', '7', '50', '33', '83'],
      ['倪同学', '托福', '面授', '大三', '大学', '中级', '否', '否', '2', '78', '22', '100'],
      ['赵同学', '托福', '国内网授', '大二', '湖南大学', '中级', '否', '否', '8', '0', '96', '96'],
      ['曲同学', '托福', '面授', '高三', '北京私立汇佳中学', '初级', '否', '否', '7', '46', '38', '84'],
      ['谢同学', '托福', '网授+面授', '高三', '北师大附属实验中学', '初级', '否', '否', '8', '51', '46', '97'],
      ['杨同学', '托福', '面授', '大四', '中国人民大学', '中级', '否', '否', '1', '86', '21', '107'],
      ['褚同学', '托福', '国内网授', '大四', '本科院校', '初级', '否', '否', '5', '0', '95', '95'],
      ['刘同学', '托福', '国内网授', '大四', '本科院校', '初级', '否', '否', '4', '65', '21', '86'],
      ['何同学', '托福', '面授', '大四', '北大', '中级', '否', '否', '2', '92', '12', '104'],
      ['王同学', '托福', '面授', '高中毕业', '高中', '初级', '是', '否', '2.5', '50', '51', '101'],
      ['朱同学', '托福', '面授', '初二', '清华附中', '初级', '否', '否', '5', '45', '48', '93'],
      ['孙同学', '托福', '面授', '大三', '', '初级', '否', '否', '3', '62', '34', '96'],
      ['闫同学', '托福', '面授', '大三', '', '中级', '否', '否', '2.5', '70', '29', '99'],
      ['李同学', '托福', '面授', '高中毕业', '高中', '中级', '否', '否', '12', '81', '25', '106'],
      ['郑同学', '托福', '面授', '大一', '首都经贸', '初级', '否', '否', '3', '40', '41', '81'],
      ['陈同学', '托福', '面授', '高中毕业', '高中', '初级', '否', '否', '2', '40', '47', '87'],
      ['司同学', '托福', '面授', '高中毕业', '高中', '初级', '否', '否', '6', '58', '34', '92'],
      ['李同学', '托福', '面授', '高中毕业', '高中', '初级', '否', '否', '8', '48', '40', '88'],
      ['蒋同学', '托福', '面授', '本科', '北京科技大学', '初级', '否', '否', '2', '60', '36', '96'],
      ['刘同学', '托福', '面授', '高中毕业', '高中', '初级', '否', '是', '3', '42', '39', '81'],
      ['成同学', '托福', '国内网授', '高中毕业', '石家庄2中', '初级', '否', '是', '4', '40', '56', '96'],
      ['王同学', '托福', '网授+面授', '大学', '北京工业大学', '初级', '否', '否', '2', '45', '37', '82'],
      ['孙同学', '托福', '面授', '高二', '国际高中', '初级', '否', '是', '3', '50', '31', '81'],
      ['郭同学', '托福', '面授', '大三', '对外经贸大学', '初级', '否', '否', '7', '40', '58', '98'],
      ['张同学', '托福', '面授', '大学毕业', '哈尔滨理工大学', '初级', '否', '否', '12', '40', '48', '88'],
      ['傅同学', '托福', '国内网授', '初二', '大连某初中', '初级', '是', '否', '6', '40', '42', '82'],
    ],
  },

  yuanmeng: {
    t1: '业内唯一配备全职班主任全程横向把控',
    t2: '碎片化管理到整体化管理，负责跟进上课、作业、督导、考试等',
    htmls: [
      {
        top: `<img src='${__CDN__}/public/img/other/yupei/img1-1.png' alt="" />
                <h4>辅导流程之【开课前八大步】</h4>
                <p>开课前8步，充分做好开课准备·量身打造授课计划+自主计划·开课前启动会，内部互通有无</p>`,
        bottom: `<div class="scroll-text"><p>课程顾问告知所有教学团队学生的具体情况</p>
                <p>教务给学生分配<strong>班主任+</strong>授课老师</p>
                <p>教务建立学生、家长、授课老师、<strong>班主任</strong>、微信群</p>
                <p>教务为学生排课</p>
                <p><strong>班主任</strong>负责内部互通</p>
                <p>授课老师与班主任共同制定学习计划</p>
                <p><strong>班主任</strong>给学生和家长开学习启动会</p>
                <p>授课老师充分准备授课内容</p>
                <p><strong>班主任</strong>提前一天通知学生上课时间地点</p></div>
                <img class="scroll-img" src='${__CDN__}/public/img/other/yupei/ceng.png' alt="" />
               `,
      },
      {
        top: `<img src='${__CDN__}/public/img/other/yupei/img1-2.png' alt="" />
                <h4>辅导流程之【授课过程六部曲】</h4>
                <p>每节课全程把控各个环节无缝衔接质量有保证，学习有效果</p>`,
        bottom: `<p><strong>班主任+</strong>授课老师检查作业</p>
                <p>授课老师给学生上正课</p>
                <p>授课老师布置作业</p>
                <p>授课老师收录学生上课签字</p>
                <p><strong>班主任+</strong>授课老师反馈消息到微信群</p>
                <p><strong>班主任</strong>督导学生学习</p>`,
      },
      {
        top: `<img src='${__CDN__}/public/img/other/yupei/img1-3.png' alt="" />
                <h4>辅导流程之【阶段把控五步走】</h4>
                <p>月考期中期末掌握学习的每一步，过程决定结果！</p>`,
        bottom: `<p><strong>班主任+</strong>通知学生月考，期中，期末考试</p>
                <p><strong>班主任+</strong>授课老师出试卷</p>
                <p>授课老师批改试卷</p>
                <p>授课老师测评讲解</p>
                <p><strong>班主任+</strong>授课老师反馈测试结果到微信群</p>`,
      },
    ],
  },
};