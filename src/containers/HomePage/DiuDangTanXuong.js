import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Style_Manga_Content.scss';
import mobyMP3 from '../../assets/music/4b97acc3-8cc2-4ac8-ab39-8ae0cca61af4.mp3';
let soundMP3 = new Audio(mobyMP3);

class DiuDangTanXuong extends Component {


    playSoundMP3 = () => {
        soundMP3.play();
        soundMP3.volume = 1.0;
    };

    pauseSoundMP3 = () => {
        soundMP3.pause();
    };

    stopSoundMP3 = () => {
        soundMP3.pause();
        soundMP3.currentTime = 0;
    };
    render() {

        return (
            <React.Fragment>
                <div className='container-manga'>
                    <div className='title-manga' >
                        Dịu dàng tận xương<br />
                    </div>
                    <p>Tác giả: Khuyết Danh</p>

                    <div>
                        <input
                            type='button'
                            className='btn btn-primary mr-2'
                            value='Play'
                            onClick={() => this.playSoundMP3()}
                        />
                        <input
                            type='button'
                            className='btn btn-warning mr-2'
                            value='Pause'
                            onClick={() => this.pauseSoundMP3()}
                        />
                        <input
                            type='button'
                            className='btn btn-danger mr-3'
                            value='Stop'
                            onClick={() => this.stopSoundMP3()}
                        />
                    </div>
                    <div className='content-manga'>
                        “Khương Cách chảnh chọe quá nhỉ? Cả buổi trưa cô ta kêu tạm dừng đến ba bốn lần, làm như đoàn làm phim là nhà cô ta vậy!”<br /><br />

                        “Nhìn mặt cô ta tái mét như thế, còn chạy vào nhà vệ sinh suốt, chắc là vừa mới đi phá thai rồi.”<br /><br />

                        “Trời đất, thật không? Con ai thế? Của chủ tập đoàn bất động sản hay là của thái tử truyền thông Nhĩ Gia…”<br /><br />

                        Bên ngoài nhà vệ sinh, tiếng xì xào bàn tán của hai cô gái xa dần. Khương Cách vặn vòi nước, dòng nước lạnh lẽo chạm vào đầu ngón tay cô, bụng dưới lại quặn đau.<br /><br />

                        Trước đây Khương Cách chưa từng bị đau bụng khi đến kỳ như thế, nhưng mấy năm trước, sau một cảnh quay rơi xuống nước giữa mùa đông giá rét, việc này bắt đầu phát sinh. Mỗi lần đến kỳ, bụng dưới của cô như một bao cát bị người ta đấm đá, cơn đau âm ỉ khiến cô phải xin tạm dừng ba lần liên tiếp cả buổi trưa nay.<br /><br />

                        Việc làm chậm tiến độ quay của đoàn làm phim rất dễ khiến mọi người trong đoàn khó chịu. Cô là tiểu hoa lưu lượng* đang nổi, tính tình khó chiều, còn có tiếng là kiêu căng tự đại, mọi người trong đoàn phim tuy bực tức nhưng không dám nói gì. Song khả năng diễn xuất của cô không tệ, mỗi lần diễn chỉ cần quay một lần là đạt, kỳ thật cũng không tính là làm ảnh hưởng đến tiến độ quay phim.<br /><br />

                        *tiểu hoa lưu lượng: cụm từ để chỉ những diễn viên nữ trẻ tuổi có nhiều fan hâm mộ.<br /><br />

                        Bụng cô như hầm băng, cơn lạnh lan truyền khắp cơ thể, đầu ngón tay cô đã tê rần. Đóng vòi nước lại, Khương Cách lấy khăn lau khô ngón tay, ngước mắt lên nhìn khuôn mặt không cảm xúc của mình trong gương.<br /><br />

                        Hiện tại cô đang đóng một bộ phim truyền hình mang tên “Túc”. Trong phim, cô vào vai một nữ đặc công máu lạnh. Đối với Khương Cách mà nói, bộ phim này khá dễ đóng, vì tính cách của nữ đặc công này được xây dựng khá giống với cô. Ngoài đời thật, cô cũng là một mỹ nhân lạnh lùng, tính tình lãnh đạm, trong đôi mắt hoa đào xinh đẹp luôn ẩn chứa sự lạnh lùng xa cách.<br /><br />

                        Khương Cách vô cùng xinh đẹp, khuôn mặt trái xoan, đôi mày như trăng non, cặp mắt hoa đào, môi cong như vầng trăng khuyết. Đôi mắt cô rất đẹp, dáng mắt như cánh hoa đào, đuôi mắt hơi xếch, con ngươi nâu sẫm long lanh nước, khiến cô trông vừa lạnh lùng vừa quyến rũ. Hàng lông mày cong cong, dọc xuống là sóng mũi thẳng tắp, phát họa lên hình dáng ngũ quan đầy đặn mà xinh đẹp. Đôi môi mềm thoa son đỏ rực, làn da trắng ngần, khí chất trưởng thành.<br /><br />
                        Không thể nào phủ nhận được nét đẹp của cô, cho dù trong giới giải trí mỹ nữ như mây, cô cũng chưa bao giờ thất bại trong những cuộc bình chọn trên diễn đàn. Chỉ là hiện tại vì bị đau bụng kinh nên khuôn mặt cô hơi tái nhợt, làm bật lên mái tóc dài đen nhánh.<br /><br />

                        Vứt khăn giấy đi, Khương Cách đẩy cửa bước ra khỏi nhà vệ sinh. Nam Thành tháng một đã vào mùa đông, Khương Cách chỉ mặc bộ vest màu đen, dáng người cô vốn đã mảnh mai, bộ đồ vest đen càng làm bật lên thân hình gầy gò nhưng đầy khí phách của cô.<br /><br />

                        Thấy Khương Cách bước ra, Tiểu Bàng dè dặt nhìn sắc mặt của cô. Cô ấy cũng nghe thấy hai người lúc nãy bịa đặt chuyện Khương Cách sinh non, một trong hai là nữ phụ Giản Nghiên.<br /><br />

                        Tiểu Bàng đã đi theo Khương Cách nhiều năm, cô ấy hiểu rõ tính khí của Khương Cách. Tính cô rất nóng nảy, nhất là trong vòng một năm nay. Nhưng tính cách của cô cũng rất dễ đoán, chỉ cần người khác không động vào cô, cô cũng sẽ không đụng chạm gì đến người khác. Nhưng một khi người khác đã ăn nói hàm hồ, cô nhất định sẽ không để yên.<br /><br />

                        Thế nên, những người thân quen với cô không gọi cô là “Chị”, mà lại gọi cô là “Gia”.<br /><br />


                        “Khương Gia…” Tiểu Bàng cầm áo khoác, nhỏ giọng gọi.<br /><br />

                        “Ừ.” Mùa đông ở Nam Thành không quá lạnh, nhưng Khương Cách lại rất sợ lạnh. Cô trầm giọng đáp một tiếng, sau đó mặc áo khoác vào rồi nói: “Đi thôi.”<br /><br />

                        Giọng Khương Cách rất êm tai, không dịu dàng trong trẻo như những cô gái khác mà hơi khàn khàn, giọng điệu lạnh lùng mà biếng nhác, lại mang theo một nét quyến rũ riêng biệt.<br /><br />

                        Nhà vệ sinh nằm ở một góc hẻo lánh, có phần vắng vẻ. Nhưng sau khi tiến vào khu vực quay phim, các đoàn phim đã khiến mùa đông quạnh quẽ trở nên náo nhiệt hẳn lên. Phim trường rất lớn, mỗi ngày có vô số đoàn phim làm việc tại đây, ai ai cũng vô cùng bận rộn, đạo diễn và diễn viên phối hợp với nhau liên tục hoàn thành những bộ phim mới.<br /><br />

                        Trong phòng trang điểm, nhóm chuyên viên đang tất bật tô son điểm phấn cho diễn viên chuẩn bị cho cảnh quay tiếp theo. Trong phòng có bốn bàn trang điểm, ngoài nam nữ chính có chỗ ngồi cố định, những diễn viên phụ có nhiều cảnh quay đều dùng hai vị trí còn lại.<br /><br />

                        Lúc Khương Cách bước vào, Giản Nghiên và nữ phụ thứ ba đang thảo luận về chiếc túi mới trong bộ sưu tập mùa xuân của Chanel. Bỗng một cơn gió lạnh lướt qua trước mặt cô ta, còn chưa kịp định hình, Khương Cách đã vung tay lên tát cô ta.<br /><br />

                        Cô dồn hết sức lực vào các tát này, tiếng “chát” chói tai vang lên, Giản Nghiên lau lớp phấn trang điểm trên mặt, năm dấu ngón tay thon dài hiện lên rõ ràng, đỏ đến mức nhìn mà giật mình.<br /><br />

                        Trong nháy mắt, Giản Nghiên bị đánh đến choáng váng, cô ta kinh ngạc trừng mắt nhìn Khương Cách, đến lúc hoàn hồn, cô ta điên cuồng nhào về phía Khương Cách: “Mẹ nó, Khương Cách, cô bị điên à, cô dám đánh tôi?!”<br /><br />

                        Giản Nghiên vừa nhào tới, cả phòng trang điểm lập tức rối tung lên. Khương Cách bắt lấy cổ tay cô ta, dửng dưng khống chế Giản Nghiên đang tức lồng lộn, cô cất giọng lạnh lùng: “Đánh cô thì sao?”<br /><br />

                        Đầu ngón tay Khương Cách lạnh buốt, mặc dù gầy nhưng cô rất khỏe, sức mạnh đến từ trong xương cốt. Trong lúc nói, cô vung tay hất Giản Nghiên ra, Giản Nghiên bị đẩy thẳng vào đống mỹ phẩm trên bàn trang điểm.<br /><br />

                        Phòng trang điểm trở nên hỗn loạn, trên mặt Giản Nghiên lấm lem phấn son, cô ta quát: “Mấy người chết hết rồi hả? Giữ cô ta lại cho tôi!”<br /><br />

                        Không ai trong phòng dám động đậy, ngành giải trí vô cùng thực dụng, sẽ không ai dám đắc tội với một minh tinh tuyến một đang hot chỉ vì một minh tinh tuyến hai.<br /><br />

                        Chẳng mấy chốc, đạo diễn được gọi tới.<br /><br />

                        Khương Cách có quyền có thế, đương nhiên đạo diễn sẽ đứng về phía cô. Trong lúc đạo diễn và những người khác an ủi Giản Nghiên đang khóc sướt mướt, Khương Cách lạnh mặt rời khỏi phòng trang điểm lộn xộn, trở về phòng nghỉ của cô.<br /><br />

                        Cô đè nén cơn đau, bởi vì vừa rồi ra tay quá mạnh, cô lại bắt đầu cảm thấy đau.<br /><br />

                        Trợ lý sinh hoạt Tiểu Bàng đã pha trà gừng đường đỏ cho Khương Cách, trợ lý công việc Lý Nam thì đang nhận điện thoại của người đại diện. Giản Nghiên và Khương Cách đều là nghệ sĩ thuộc tập đoàn truyền thông Nhĩ Gia, Giản Nghiên đã báo chuyện lúc nãy cho công ty, yêu cầu một lời giải thích, hiện tại Thái Kỷ đang mắng Lý Nam.<br /><br />

                        Khương Cách đang nhắm mắt nghỉ ngơi thì bị quấy rầy, cô nhíu mày, vươn tay nói với Lý Nam: “Đưa cho tôi.”<br /><br />

                        Lý Nam vội vàng đưa điện thoại tới, trong điện thoại là tiếng mắng của Thái Kỷ: “Cô ấy càng lúc càng không coi ai ra gì! Lần này đạo diễn chọn cô ấy làm nữ chính, Giản Nghiên đóng vai phụ, vốn dĩ cô ta đã khó chịu. Giản Nghiên nói gì thì mặc kệ cô ta, tại sao lại đánh cô ta ngay giữa đoàn làm phim! Mẹ nó, lát nữa chuyện này sẽ chễm chệ trên hot search cho xem, công ty lại phải đi chùi đít, tôi thật sự muốn…”<br /><br />

                        Giọng Khương Cách lạnh như băng: “Tát em một cái?”<br /><br />

                        Thái Kỷ lập tức tịt ngòi, sau khi lẩm bẩm mắng chửi Lý Nam, anh ta vội vàng nói: “Lần này em kích động quá rồi, dù sao cũng cùng công ty, em không thể quá quắt như thế. Hơn nữa hôm nay em tát cô ta một cái, chẳng phải là đang cung cấp bằng chứng thực tế cho đám anti-fan sao, chắc chắn bọn họ đang mừng như điên.”<br /><br />

                        Khương Cách: “Ừm.”<br /><br />

                        Thái Kỷ: “…”<br /><br />

                        Chuyện lần này không phải là chuyện nhỏ, dù sao cũng là đánh người ngay trong đoàn phim. Nhưng cũng không phải là chuyện to tát, Khương Cách là một trong những nghệ sĩ mang về nhiều lợi nhuận nhất cho công ty, thái tử Bạch Tông Quân của công ty là bạn tốt của cô. Dù cô gây ra chuyện gì, công ty đều có thể giải quyết êm xuôi cho cô.<br /><br />

                        Mâu thuẫn giữa Giản Nghiên và Khương Cách đã bắt đầu từ lâu. Mấy năm trước, khi Giản Nghiên đang hot, Khương Cách đóng vai phụ cho cô ta, nhưng mỗi khi phim phát sóng, Giản Nghiên luôn bị nhan sắc của Khương Cách làm lu mờ. Vì vậy, trong lòng Giản Nghiên ghen ghét, lo rằng Khương Cách sẽ uy hiếp địa vị của mình, cô từng giở trò với Khương Cách rất nhiều lần. Thậm chí có một lần, trong cảnh quay giữa mùa đông lạnh, Khương Cách đang đến kỳ, cô ta lại bắt Khương Cách nhảy xuống nước lạnh hết lần này đến lần khác.<br /><br />

                        Thái Kỷ đã dẫn dắt Khương Cách từ khi cô ký hợp đồng, anh ấy biết rõ Khương Cách không phải là người thích chủ động gây sự, lần này chắc chắn Giản Nghiên đã làm gì đó trước nên mới khiến Khương Cách ra tay.<br /><br />

                        Thái Kỷ càm ràm thêm vài câu rồi bình tĩnh lại, sau đó lại bắt đầu lải nhải về chuyện khác: “Công ty đã thuê vệ sĩ cho em rồi, anh đã bảo anh ta chiều nay đến trường quay đón em.”<br /><br />

                        Với một minh tinh có vị thế như Khương Cách, thuê vệ sĩ cũng là chuyện bình thường. Công ty đã từng sắp xếp vệ sĩ cho cô, nhưng bọn họ đều bị Khương Cách sa thải. Khương Cách luôn có thái độ thù địch với những người khác phái lạ mặt, nhất là đối với những người khác phái mà cô không thể khống chế được như vệ sĩ.<br /><br />

                        Bác sĩ tâm lý nói, đây là biểu hiện của việc thiếu cảm giác an toàn.

                        Nhưng từ tuần trước, hai nơi ở của Khương Cách đều bị fan cuồng* đột nhập, hơn nữa còn để lại những lời uy hiếp và gợi dục trong nhà cô, công ty lập tức bố trí vệ sĩ tư nhân.<br /><br />

                        *fan cuồng: chính xác hơn là sasaeng fan, bắt nguồn từ giới Kpop Hàn Quốc, được dùng để chỉ những người hâm mộ bị ám ảnh quá mức với thần tượng.<br /><br />

                        “Không cần. Chẳng phải căn hộ ở hồ Bạch Lộ đã đổi hệ thống an ninh rồi sao?” Khương Cách hỏi.<br /><br />

                        Thái Kỷ nói: “Hai hệ thống an ninh lần trước cũng là hàng tốt nhất, vậy mà vẫn bị phá đấy thôi, fan cuồng lần này là một tên biến thái, em chịu đựng chút đi, bảo toàn mạng sống vẫn là trên hết.”<br /><br />

                        Khương Cách không trả lời, không đáp lại nghĩa là không đồng ý.<br /><br />

                        Thái Kỷ thở dài, nghĩ đến mâu thuẫn giữa Khương Cách và Giản Nghiên hôm nay, cùng với trạng thái tinh thần của cô nửa năm qua, anh ta nói: “Khương Gia, đợi qua Tết, có thời gian thì để anh liên lạc với bác sĩ tâm lý…”<br /><br />

                        Anh ấy còn chưa dứt lời, Khương Cách đã cúp máy.<br /><br />

                        Thái Kỷ: “…”<br /><br />

                        Chuyện cậy mạnh hiếp yếu như thế này chẳng còn lạ lẫm gì trong đoàn làm phim, nhưng rất hiếm khi bị lộ ra ngoài, người trong đoàn làm phim đa số đều khôn khéo, biết cái gì nên nói cái gì không. Hơn nữa danh tiếng của Giản Nghiên trong đoàn làm phim cũng không tốt lắm, một cái bạt tai của Khương Cách cũng khiến mọi người hả lòng hả dạ. Về phía Giản Nghiên, công ty đã dàn xếp xong, buổi chiều lúc quay phim cô ta cũng nghiêm chỉnh hơn hẳn.<br /><br />

                        Giữa trưa, Khương Cách nghỉ ngơi một lúc, khi tỉnh dậy cảm xúc của cô đã ổn định hơn. Cường độ công việc cao cùng với sự việc fan cuồng gần đây quả thực đã làm ảnh hưởng đến tinh thần của cô.<br /><br />

                        Buổi chiều, sau khi hoàn tất phần diễn, Khương Cách rời khỏi trường quay. Lý Nam đến bãi đỗ xe lấy xe, Tiểu Bàng theo sau Khương Cách, hai người đi về phía bãi đỗ xe dưới tầng hầm. Tối nay cô phải tham gia một party do cấp trên của cô tổ chức, cũng chính là vị thái tử Bạch Tông Quân của tập đoàn truyền thông Nhĩ Gia kia.<br /><br />

                        Bãi đỗ xe vô cùng yên tĩnh, Tiểu Bàng theo sau Khương Cách, cô ấy nhìn Khương Cách mặc một cây đồ đen đang đi phía trước. Cô vẫn mang giày cao gót, bóng lưng gầy gò mà thẳng tắp. Khương Cách xuất thân là người mẫu, năm đó cô ra mắt bằng một tấm ảnh chụp cùng báo đốm.<br /><br />

                        Trong khung cảnh cát bụi đầy trời, dưới một gốc cây khô, thiếu nữ khoác tấm lụa đỏ, đứng đối diện con báo hoa mai toàn thân phủ đốm. Ánh mắt cô lạnh lùng xa cách, ánh mắt con báo đề phòng nguy hiểm.<br /><br />

                        Thời điểm chụp bức ảnh này, Khương Cách vừa tròn mười tám tuổi. Đừng nói mười tám tuổi, Tiểu Bàng hiện tại đã hai mươi nhưng vừa nhìn con báo kia đã thấy sợ hãi.<br /><br />

                        Không hổ danh là Khương Gia, thật mạnh mẽ. Mạnh mẽ đến mức ngay cả thái tử Bạch Tông Quân cũng không thể chinh phục được, thật sự không biết kiểu đàn ông thế nào mới chinh phục được cô.<br /><br />

                        “Phải rồi, Khương Gia, vệ sĩ kia…” Tiểu Bàng ngừng suy nghĩ lung tung, nói chuyện quan trọng với Khương Cách. Lúc nãy Thái Kỷ vừa gọi điện thoại cho Tiểu Bàng, bảo cô ấy nói trước với Khương Cách, nếu không đến lúc lên xe nhìn thấy vệ sĩ, chắc chắn Khương Cách sẽ nổi giận.<br /><br />

                        Tiểu Bàng còn chưa kịp dứt lời, bỗng nhiên bên cạnh vang lên tiếng bước chân dồn dập, còn có tiếng xì xào mắng mỏ. Chưa kịp nhìn sang đã có người hét lên: “Con khốn Khương Cách ở bên kia kìa!”<br /><br />

                        Đám người kia rõ ràng là đang chạy về phía Khương Cách, có người còn cầm đồ trong tay, vừa chạy vừa mắng, chẳng mấy chốc bãi đỗ xe đã trở nên hỗn loạn.<br /><br />

                        “Khương Gia, đi mau!” Tiểu Bàng nhìn thấy cảnh tượng này thì sợ ngây người. Nhưng hai người họ còn cách xe một quãng xa, chắc chắn sẽ bị đuổi kịp.<br /><br />

                        Khương Cách nhìn đám người kia, đôi mày nhíu chặt lại, vừa định xoay người, cánh tay đã bị một luồng sức lực mạnh mẽ giữ chặt lấy. Nhiệt độ và sức mạnh từ lòng bàn tay của người đàn ông xuyên qua lớp áo khoác, chạm vào da cô. Cơ thể Khương Cách mất thăng bằng, bị kéo vào một lồng ngực rộng lớn.<br /><br />

                        Hơi thở đàn ông xa lạ ập đến, nóng rực mà nguy hiểm, trái tim Khương Cách đập thình thịch, cô cắn chặt răng, vung tay lên định đánh anh ta, nhưng cổ tay lại bị người đàn ông ấy bắt lấy. Khuôn mặt Khương Cách hiện rõ cơn tức giận, trong lúc giãy giụa, cô ngước mắt nhìn sang, bỗng chốc bị lạc vào một đôi mắt đen trong vắt.<br /><br />

                        “Cô Khương phải không?” Không cần tốn chút sức lực nào, người đàn ông đã có thể nắm chặt lấy cánh tay đang vùng vẫy của cô, giọng nói anh như dòng suối thanh mát chảy từ khe núi qua những mỏm đá. Đám người phía xa ồn ào, vẻ mặt anh lại vô cùng bình thản, anh đang rủ mắt nhìn cô. Trong mắt thấp thoáng vẻ ngạc nhiên vì không ngờ cô lại mạnh đến thế, anh mỉm cười lịch sự, tự giới thiệu bản thân: “Tôi là vệ sĩ mới của cô, Quý Tranh.”<br /><br />

                        Cô ngước nhìn khuôn mặt tuấn tú của anh. Tựa như kiếm tra vào vỏ, thái độ thù địch của cô biến mất. Khương Cách ngừng giãy giụa.<br /><br />
                        <center>
                            <p>xem full truyện tại</p>
                            <a href='https://truyenfull.vn/diu-dang-tan-xuong/chuong-2/'>https://truyenfull.vn/diu-dang-tan-xuong/chuong-2/</a>
                        </center>
                    </div>
                </div>

            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiuDangTanXuong);
