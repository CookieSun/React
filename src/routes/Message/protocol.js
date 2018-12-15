import React, { PureComponent } from 'react'
import styles from './protocol.less'
import find from "lodash.find";
import {SUPPOER_LOCALES} from "../../common/global";
import ProtocolEnglish from "./protocolEnglish";
const currentLocale = find(SUPPOER_LOCALES, {
        value: sessionStorage.getItem('qq-to-locale-lang')
    }
);
export default class Protocol extends PureComponent {
  render() {

    return (
      <div className={styles.protocol}>
          {currentLocale.value==="en-US"?<ProtocolEnglish/>:<div className={styles.content}>
          <h2>用户协议</h2>
          <p>crebe是一家未来以社交为理念的创新型数字货币交易所，运营网站https://www.crebe.com（以下称“本网站”或“网站”），该网站是一个专门供用户进行数字资产交易和提供相关服务（以下称“该服务”或“服务”）的平台。为了本协议表述之方便，公司和该网站在本协议中合称使用“我们”或其他第一人称称呼。只要登陆该网站的自然人或其他主体均为本网站的用户，本协议表述之便利，以下使用“您”或其他第二人称。为了本协议表述之便利，我们和您在本协议中合称为“双方”，我们或您单称为“一方”。</p>
          <h3>重要提示</h3>
          <p>1.数字资产本身不由任何金融机构或政府背书。数字资产市场是全新的、并没有明确、稳定的预期；</p>
          <p>2.数字资产交易存在极高风险，其全天不间断交易，没有涨跌限制，价格容易大幅波动；</p>
          <p>3.因各国法律、法规和规范性文件的制定或者修改，数字资产交易随时可能被暂停或被禁止。</p>
          <p>数字资产交易有极高风险，并不适合绝大部分人士。您了解和理解此投资有可能导致部分损失或全部损失，所以您应该以能承受的损失程度来决定投资的金额。请确认您了解和理解数字资产会产生衍生风险。此外，除了上述提及过的风险以外，还会有未能预测的风险存在。在作出任何买卖数字资产的决定之前，您应慎重考虑并用清晰的判断能力去评估自己的财政状况及上述各项风险，并承担由此产生的全部损失，我们对此不承担任何责任。</p>

          <h3>一、总则</h3>
          <p>1.1 您在使用本网站提供的各项服务之前，应仔细阅读本协议，如有不理解之处或其他必要，请咨询专业律师。如您不同意本协议及/或随时对其的修改，请您立即停止使用本网站提供的服务或不再登陆本网站。您一旦登陆本网站、使用本网站的任何服务或任何其他类似行为即表示您已了解并完全同意本协议各项内容，包括本网站对本协议随时所做的任何修改。</p>
          <p>1.2 您通过按照本网站的要求填写相关信息，并经过其他相关程序后成功注册可以成为本网站的会员（以下称“会员”），在进行注册过程中点击“同意”按钮即表示您以电子签署的形式与公司达成协议；或您在使用本网站过程中点击任何标有“同意”或类似意思的按钮的行为或以其他本网站允许的方式实际使用本网站提供的服务时，均表示您完全了解、同意且接受本协议项下的全部条款的约束，无您手写的书面签字就本协议对您的法律约束力无任何影响。</p>
          <p>1.3 您成为本网站的会员后，您将获得一个会员帐号及相应的密码，该会员帐号和密码由会员负责保管；会员应当对以其您帐号进行的所有活动和事件负法律责任。</p>
          <p>1.4 通过注册和使用任何由本网站提供的服务和功能，您将被视为已阅读，理解并：</p>
          <p>1.4.1 接受本协议所有条款及条件的约束。</p>
          <p>1.4.2 您确认您已到达根据不同的可适用的法律规定的具有可订立合同的法定年龄，并有充分的能力接受这些条款。</p>
          <p>1.4.3 您保证交易中涉及到的属于您的数字资产均为合法取得并所有。</p>
          <p>1.4.4 您同意您为您自身的交易或非交易行为承担全部责任和任何收益或亏损。</p>
          <p>1.4.5 您确认注册时提供的信息是真实和准确的。</p>
          <p>1.4.6 您同意遵守任何有关法律的规定，就税务目的而言，包括报告任何交易利润。</p>
          <p>1.4.7 本协议只是就您与我们之间达成的权利义务关系进行约束，而并不涉及本网站用户之间与其他网站和您之间因数字资产交易而产生的法律关系及法律纠纷</p>
          <h3>二、协议修订</h3>
          <p>我们保留不时修订本协议、并以网站公示的方式进行公告、不再单独通知您的权利，变更后的协议会在本协议首页标注变更时间，一经在网站公布，立即自动生效。您应不时浏览及关注本协议的更新变更时间及更新内容，如您不同意相关变更，应当立即停止使用本网站服务；您继续使用本网站服务，即表示您接受并同意经修订的协议的约束。</p>
          <h3>三、注册</h3>
          <p>3.1 注册资格</p>
          <p>您确认并承诺：在您完成注册程序或以其他本网站允许的方式实际使用本网站提供的服务时，您应当是具备可适用的法律规定的可签署本协议及使用本网站服务应具有的能力的自然人、法人或其他组织。您一旦点击同意注册按钮，即表示您自身或您的有权代理人已经同意该协议内容并由其代理注册及使用本网站服务。若您不具备前述主体资格，则您及您的有权代理人应承担因此而导致的一切后果，且公司保留注销或永久冻结您账户，并向您及您的有权代理人追究责任的权利。</p>
          <p>3.2 注册目的</p>
          <p>您确认并承诺：您进行本网站注册并非出于违反法律法规或破坏本网站数字资产交易秩序的目的。</p>
          <p>3.3注册流程</p>
          <p>3.3.1 您同意根据本网站用户注册页面的要求提供有效电子邮箱、手机号码等信息，您可以使用您提供或确认的邮箱、手机号码或者本网站允许的其它方式作为登陆手段进入本网站。如有必要，按照不同法域相关法律法规的规定，您必须提供您的真实姓名、身份证件等法律法规及隐私条款及反洗钱条款规定的相关信息并不断更新注册资料，符合及时、详尽、准确的要求。所有原始键入的资料将引用为注册资料。您应对该等信息的真实性、完整性和准确性负责，并承担因此产生的任何直接或间接损失及不利后果。</p>
          <p>3.3.2 如您所在主权国家或地区的法律法规、规则、命令等规范对手机号码有实名要求，您同意提供注册的手机号码是经过实名登记的，如您不按照规定提供，因此给您带来的任何直接或间接损失及不利后果均应由您承担。</p>
          <p>3.3.3您合法、完整并有效提供注册所需信息并经验证，有权获得本网站账号和密码，您获得本网站账号及密码时视为注册成功，可在本网站进行会员登陆。</p>
          <p>3.3.4 您同意接收本网站发送的与本网站管理、运营相关的电子邮件和/或短消息。</p>
          <h3>四、服务</h3>
          <p>本网站只为您通过本网站进行数字资产交易活动（包括但不限于数字资产交易等服务）提供网络交易平台服务，本网站并不作为买家或卖家参与买卖数字资产行为本身。</p>

          <p>4.1 服务内容</p>
          <p>4.1.1 您有权在本网站浏览数字资产各项产品的实时行情及交易信息、有权通过本网站提交数字资产交易指令并完成数字资产交易。</p>
          <p>4.1.2 您有权按照本网站发布的活动规则参与本网站组织的网站活动。</p>
          <p>4.1.3 本网站承诺为您提供的其他服务。</p>
          <p>4.2.服务规则</p>
          <p>您承诺遵守下列本网站服务规则：</p>
          <p>4.2.1 您应当遵守法律法规、规章、及政策要求的规定，保证账户中所有数字资产来源的合法性，不得在本网站或利用本网站服务从事非法或其他损害本网站或第三方权益的活动，如发送或接收任何违法、违规、侵犯他人权益的信息，发送或接收传销材料或存在其他危害的信息或言论，未经本网站授权使用或伪造本网站电子邮件题头信息等。</p>
          <p>4.2.2 您应当遵守法律法规并妥善使用和保管其本网站账号及登陆密码、资金密码、和其注册时绑定的手机号码、以及手机接收的手机验证码的安全。您对使用其本网站账号和登陆密码、资金密码、手机验证码进行的任何操作和后果承担全部责任。当您发现本网站账号、登陆密码、或资金密码、验证码被未经其授权的第三方使用，或存在其他账号安全问题时，应立即有效通知本网站，要求本网站暂停本网站账号的服务。本网站有权在合理时间内对您的该等请求采取行动，但本网站对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。您在未经本网站同意的情况下不得将本网站账号以赠与、借用、租用、转让或其他方式处分给他人。</p>
          <p>4.2.3 您同意您对您的本网站的账号、密码下发生的所有活动（包括但不限于信息披露、发布信息、网上点击同意或提交各类规则协议、网上续签协议或购买服务等）承担责任。</p>
          <p>4.2.4 您在本网站进行数字资产交易时不得恶意干扰数字资产交易的正常进行、破坏交易秩序；不得以任何技术手段或其他方式干扰本网站的正常运行或干扰其他用户对本网站服务的使用；不得以虚构事实等方式恶意诋毁本网站的商誉。</p>
          <p>4.2.5 如您因网上交易与其他用户产生纠纷的，不得通过司法或行政以外的途径要求本网站提供相关资料。</p>
          <p>4.2.6 您在使用本网站提供的服务过程中，所产生的应纳税赋，以及一切硬件、软件、服务及其它方面的费用，均由您独自承担。</p>
          <p>4.2.7 您应当遵守本网站不时发布和更新的本协议以及其他服务条款和操作规则，有权随时终止使用本网站提供的服务。</p>
          <p>4.3.产品规则</p>
          <p>4.3.1 币币交易产品规则</p>
          <p>您承诺在其进入本网站交易，通过本网站与其他用户进行币币交易的过程中良好遵守如下交易规则。</p>
          <p>4.3.1.1 浏览交易信息</p>
          <p>您在本网站浏览币币交易信息时，应当仔细阅读交易信息中包含的全部内容，包括但不限于价格、委托量、手续费、买入或卖出方向， 您完全接受交易信息中包含的全部内容后方可点击按钮进行交易。</p>
          <p>4.3.1.2 提交委托</p>
          <p>在浏览完交易信息确认无误之后您可以提交交易委托。您提交交易委托后，即您授权本网站代理您进行相应的交易撮合，本网站在有满足您委托价格的交易时将会自动完成撮合交易而无需提前通知您。</p>
          <p>4.3.1.3 查看交易明细</p>
          <p>您可以通过管理中心的交易明细中查看相应的成交记录，确认自己的详情交易记录。</p>
          <p>4.3.1.4 撤销/修改委托，在委托未达成交易之前，您有权随时撤销或修改委托。</p>
          <h3>五、本网站的权利和义务</h3>
          <p>5.1 如您不具备本协议约定的注册资格，则本网站有权拒绝您进行注册，对已注册的，本网站有权注销您的会员账号，本网站保留向您或您的有权代理人追究责任的权利。同时，本网站保留其他任何情况下决定是否接受您注册的权利。</p>
          <p>5.2 本网站发现账户使用者并非账户初始注册人时，有权中止或终止该账户的使用。</p>
          <p>5.3 本网站通过技术检测、人工抽检等检测方式合理怀疑您提供的信息错误、不实、失效或不完整时，有权通知您更正、更新信息或中止、终止为其提供本网站服务。</p>
          <p>5.4 本网站有权在发现本网站上显示的任何信息存在明显错误时，对信息予以更正。</p>
          <p>5.5 本网站保留随时修改、中止或终止本网站服务的权利，本网站行使修改或中止服务的权利不需事先告知您；本网站终止本网站一项或多项服务的，终止自本网站在网站上发布终止公告之日生效。</p>
          <p>5.6 本网站应当采取必要的技术手段和管理措施保障本网站的正常运行，并提供必要、可靠的交易环境和交易服务，维护数字资产交易秩序。</p>
          <p>5.7 本网站通过加强技术投入、提升安全防范等措施保障您的数字资产的安全，有义务在您账户出现可以预见的安全风险时提前通知您。</p>
          <p>5.8 本网站有权根据您所属主权国家或地区的法律法规、规则、命令等规范的要求，向您要求提供更多的信息或资料等，并采取合理的措施，以符合当地的规范之要求，您有义务配合；本网站有权根据您所属主权国家或地区的法律法规、规则、命令等规范的要求，暂停或永久停止对您的开放本网站及其部分或全部服务。</p>
          <h3>六、赔偿</h3>
          <p>6.1 在任何情况下，我们对您的直接损害的赔偿责任均不会超过您从使用本网站服务产生的为期三（ 3）个月的总费用。</p>
          <p>6.2 如您发生违反本协议或其他法律法规等情况，您须向我们至少赔偿200万美元及承担由此产生的全部费用（包括律师费等），如不够弥补实际损失，您须补全</p>
          <h3>七、寻求禁令救济的权利</h3>
          <p>我们和您均承认普通法对违约或可能违约情况的救济措施是可能是不足以弥补我们遭受的全部损失的，故非违约方有权在违约或可能违约情况下寻求禁令救济以及普通法或衡平法允许的其他所有的补救措施。</p>
          <h3>八、责任限制与免责</h3>
          <p>8.1 您了解并同意，在任何情况下，我们不就以下各事项承担责任：</p>
          <p>8.1.1 收入的损失；</p>
          <p>8.1.2 交易利润或合同损失；</p>
          <p>8.1.3 业务中断</p>
          <p>8.1.4 预期可节省的货币的损失；</p>
          <p>8.1.5 信息的损失；</p>
          <p>8.1.6 机会、商誉或声誉的损失；</p>
          <p>8.1.7 数据的损坏或损失；</p>
          <p>8.1.8 购买替代产品或服务的成本；</p>
          <p>8.1.9 任何由于侵权（包括过失）、违约或其他任何原因产生的间接的、特殊的或附带性的损失或损害，不论这种损失或损害是否可以为我们合理预见；不论我们是否事先被告知存在此种损 失或损害的可能性。</p>
          <p>8.1.1 条至8.1.9条均是彼此独立的。</p>
          <p>8.2 您了解并同意，我们不对因下述任一情况而导致您的任何损害赔偿承担责任：</p>
          <p>8.2.1 我们有合理的理由认为您的具体交易事项可能存在重大违法或违约情形。</p>
          <p>8.2.2 我们有合理的理由认为您在本网站的行为涉嫌违法或不当。</p>
          <p>8.2.3 通过本网站服务购买或获取任何数据、信息或进行交易等行为或替代行为产生的费用及损失。</p>
          <p>8.2.4 您对本网站服务的误解。</p>
          <p>8.2.5 任何非因我们的原因而引起的与本网站提供的服务有关的其它损失。</p>
          <p>8.3 我们对由于信息网络设备维护、信息网络连接故障、电脑、通讯或其他系统的故障、电力故障、天气原因、意外事故、罢工、劳动争议、暴乱、起义、骚乱、生产力或生产资料不足、火灾、洪水、风暴、爆炸、战争、银行或其他合作方原因、数字资产市场崩溃、政府行为、 司法或行政机关的命令、其他不在我们可控范围内或我们无能力控制的行为或第三方的原因而造成的不能服务或延迟服务，以及造成的您的损失，我们不承担任何责任。</p>
          <p>8.4 我们不能保证本网站包含的全部信息、程序、文本等完全安全，不受任何病毒、木马等恶意程序的干扰和破坏，故您登陆、使用本网站任何服务或下载及使用该下载的任何程序、信息、数据等均是您个人的决定并自行承担风险及可能产生的损失。</p>
          <p>8.5 我们对本网站中链接的任何第三方网站的任何信息、产品及业务及其他任何形式的不属于我们的主体的内容等不做任何保证和承诺，您如果使用第三方网站提供的任何服务、信息及产品等均为您个人决定且承担由此产生的一切责任。</p>
          <p>8.6 我们对于您使用本网站服务不做任何明示或暗示的保证，包括但不限于本网站提供服务的适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，我们也不对本网站提供的服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、质量、稳定、完整和及时性作出任何承诺和保证。是否登陆或使用本网站提供的服务是您个人的决定且自行承担风险及可能产生的损失。我们对于数字资产的市场、价值及价格等不做任何明示或暗示的保证，您理解并了解数字资产市场是不稳定的，价格和价值随时会大幅波动或崩盘，交易数字资产是您个人的自由选择及决定且自行承担风险及可能产生的损失。</p>
          <p>8.7 本协议中规定的我们的保证和承诺是由我们就本协议和本网站提供的服务的唯一保证和陈述，并取代任何其他途径和方式产生的保证和承诺，无论是书面的或口头的，明示的或暗示的。所有这些保证和陈述仅仅代表我们自身的承诺和保证，并不保证任何第三方遵守本协议中的保证和承诺。</p>
          <p>8.8 我们并不放弃本协议中未提及的在法律适用的最大范围内我们享有的限制、免除或抵销我们损害赔偿责任的任何权利。</p>
          <p>8.9 您注册后即表示认可我们按照本协议中规定的规则进行的任何操作，产生的任何风险均由您承担。</p>

          <h3>九、协议的终止</h3>
          <p>9.1 本网站有权依据本协议约定注销您的本网站账号，本协议于账号注销之日终止。</p>
          <p>9.2 本网站有权依据本协议约定终止全部本网站服务，本协议于本网站全部服务终止之日终止。</p>
          <p>9.3 本协议终止后，您无权要求本网站继续向其提供任何服务或履行任何其他义务，包括但不限于要求本网站为您保留或向您披露其原本网站账号中的任何信息， 向您或第三方转发任何其未曾阅读或发送过的信息等。</p>
          <p>9.4 本协议的终止不影响守约方向违约方要求其他责任的承担。</p>
          <h3>十、知识产权</h3>
          <p>10.1 本网站所包含的全部智力成果包括但不限于网站标志、数据库、网站设计、文字和图表、软件、照片、录像、音乐、声音及其前述组合，软件编译、相关源代码和软件 (包括小应用程序和脚本) 的知识产权权利均归本网站所有。您不得为商业目的复制、更改、拷贝、发送或使用前述任何材料或内容。</p>
          <p>10.2 本网站名称中包含的所有权利 (包括但不限于商誉和商标、标志) 均归公司所有。</p>
          <p>10.3 您接受本协议即视为您主动将其在本网站发表的任何形式的信息的著作权， 包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权 以及应当由著作权人享有的其他可转让权利无偿独家转让给本网站所有，本网站有权利就任何主体侵权单独提起诉讼并获得全部赔偿。 本协议效力及于您在本网站发布的任何受著作权法保护的作品内容， 无论该内容形成于本协议签订前还是本协议签订后。</p>
          <p>10.4 您在使用本网站服务过程中不得非法使用或处分本网站或他人的知识产权权利。您不得将已发表于本网站的信息以任何形式发布或授权其它网站（及媒体）使用。</p>
          <p>10.5 您登陆本网站或使用本网站提供的任何服务均不视为我们向您转让任何知识产权。</p>
          <h3>十一、其他</h3>
          <p>11.1 可分割性</p>
          <p>如本协议中的任何条款被任何有管辖权的法院认定为不可执行的，无效的或非法的，并不影响本协议的其余条款的效力。</p>
          <p>11.2 非代理关系</p>
          <p>本协议中的任何规定均不可被认为创造了、暗示了或以其他方式将我们视为您的代理人、受托人或其他代表人，本协议有其他规定的除外。</p>
          <p>11.3 弃权</p>
          <p>我们或您任何一方对追究本协议约定的违约责任或其他责任的弃权并不能认定或解释为对其他违约责任的弃权；未行使任何权利或救济不得以任何方式被解释为对该等权利或救济的放弃。</p>
          <p>11.4 标题</p>
          <p>所有标题仅供协议表述方便，并不用于扩大或限制该协议条款的内容或范围。</p>
          <h3>十二、协议的生效和解释</h3>
          <p>12.1 本协议于您点击本网站注册页面的同意注册并完成注册程序、获得本网站账号和密码时生效，对本网站和您均具有约束力。</p>
          <p>12.2 本协议的最终解释权归本网站所有。</p>
        </div>}
      </div>
    )
  }
}