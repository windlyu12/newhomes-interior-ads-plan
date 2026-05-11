import { useState } from "react";

export default function InteriorAdsMindmap() {
  const tabs = [
    {
      id: "overview",
      label: "Tổng quan",
      title: "Bản đồ chiến lược tổng thể",
      subtitle: "Không đánh toàn thị trường. Chọn mũi có khả năng ra đơn với nguồn lực nhỏ.",
      color: "from-neutral-900 to-neutral-700",
      bg: "bg-neutral-50",
      sections: [
        {
          heading: "Bối cảnh thực tế",
          points: [
            "Đơn vị mới mở, chưa có trust/cộng đồng/case dày như các đội cắm rễ trong khu.",
            "Nguồn lực hiện tại: 3 sale, 1 marketing tay ngang, 1 outsource ảnh/clip.",
            "Ngân sách ads: 10–20 triệu/tháng, không đủ để đánh phủ toàn thị trường.",
            "CPL Zalo hiện tại khoảng 400k/lead, nên không thể chạy kiểu lấy volume bằng mọi giá.",
            "Mục tiêu không phải nhiều lead nhất, mà là đủ lịch khảo sát chất lượng và đủ đơn để nuôi team."
          ]
        },
        {
          heading: "Nguyên tắc chọn trận",
          points: [
            "Không all-in vào căn chuẩn bị bàn giao vì đối thủ có lợi thế cấu trúc quá lớn.",
            "Dồn ads vào nơi khách có nỗi đau thật hơn: căn đã nhận nhưng trống, căn cũ cần cải tạo.",
            "Mỗi tháng chỉ nên test sâu 1–2 mũi, không chia nhỏ ngân sách cho quá nhiều cam.",
            "Mỗi mũi phải có thông điệp riêng, form riêng, script sale riêng, KPI riêng.",
            "Cắt sớm các tệp chỉ hỏi giá, ngân sách quá thấp hoặc không có thời điểm triển khai rõ."
          ]
        },
        {
          heading: "Thứ tự ưu tiên",
          points: [
            "Mũi 1: Vin Ocean Park — căn đã bàn giao nhưng để trống, nhất là 2N/3N và chủ chưa quyết ở/cho thuê.",
            "Mũi 2: Sửa chữa/cải tạo căn hộ trọn gói, ưu tiên ngân sách từ 200tr trở lên.",
            "Mũi 3: Ecopark — mở rộng bằng content/search, chưa đánh direct vì chưa có data.",
            "Mũi 4: Căn chuẩn bị bàn giao — chỉ giữ sóng bằng TikTok và Zalo mềm, không đốt ads lead lớn.",
            "Mũi nền: TikTok/content, landing, case, checklist để sale có tài liệu nuôi trust."
          ]
        }
      ],
      checklist: [
        "Chốt 1 khu/tệp ưu tiên trong 30 ngày đầu.",
        "Tạo 2–3 mẫu form lọc lead khác nhau theo từng mũi.",
        "Tạo sale kit: bảng gói, checklist, câu hỏi tư vấn, mẫu follow Zalo.",
        "Theo dõi cost/lead đủ điều kiện và cost/lịch khảo sát thay vì chỉ CPL thô.",
        "Cuối mỗi tuần review lead: tệp nào ra lịch thật, tệp nào chỉ hỏi chơi."
      ]
    },
    {
      id: "vin-empty",
      label: "Mũi 1: Căn trống Vin",
      title: "Căn đã bàn giao nhưng để trống tại Vin Ocean Park",
      subtitle: "Mũi kiếm lead gần nhất vì đang có data và insight rõ về căn trống sau bàn giao.",
      color: "from-emerald-700 to-teal-500",
      bg: "bg-emerald-50",
      sections: [
        {
          heading: "Mục tiêu của mũi này",
          points: [
            "Biến trạng thái căn trống thành lý do mua: nhà đã nhận nhưng chưa khai thác, vốn nằm im, chủ đang lăn tăn.",
            "Ưu tiên tạo lịch tư vấn/khảo sát với chủ căn 2N/3N, hoặc chủ căn chưa quyết ở hay cho thuê.",
            "Với studio/1N chỉ bán bằng gói chuẩn hóa tối ưu cho thuê, không sa lầy tư vấn quá sâu.",
            "Không bán chung chung 'thi công nội thất trọn gói', mà bán câu hỏi 'làm bao nhiêu là vừa'.",
            "Dùng data Vin để tiếp cận trực tiếp, nhưng ads phải lọc rất mạnh bằng form."
          ]
        },
        {
          heading: "Tệp khách cần tách",
          points: [
            "Studio/1N đu đỉnh: kẹt hàng, sợ bỏ thêm vốn, cần phương án cho thuê tối thiểu.",
            "2N/3N tích sản: có tiền hơn, chưa sốt ruột nhưng để lâu cũng xót, có thể ra đơn lớn.",
            "Chủ chưa quyết: không biết nên để ở, cho thuê, bán lại hay giữ tài sản.",
            "Khách đã có báo giá bên khác: dùng góc second opinion để check lại phương án và phần dễ phát sinh.",
            "Chủ có nhiều căn/đội sale kẹt hàng: cần gói đầu tư gọn, dễ thay thế, dễ cho thuê."
          ]
        },
        {
          heading: "Thông điệp quảng cáo",
          points: [
            "Căn đã nhận nhưng vẫn để trống? Đừng vội làm full — nên tính phương án theo mục đích sử dụng trước.",
            "Studio/1N đang kẹt chưa khai thác? Làm nội thất vừa đủ để dễ cho thuê, không chôn thêm vốn sai cách.",
            "Căn 2N/3N để trống: nhận 2 phương án nội thất — một để ở lâu dài, một tối ưu cho thuê.",
            "Chưa biết để ở hay cho thuê? Bên em tư vấn 2 hướng ngân sách trước khi anh/chị xuống tiền.",
            "Đã có báo giá nội thất nhưng vẫn lăn tăn? Gửi bên em check giúp phần nào nên làm, phần nào có thể tối ưu."
          ]
        },
        {
          heading: "Kênh triển khai",
          points: [
            "Zalo data: tiếp cận mềm, cá nhân hóa theo loại căn/khu/tình trạng nếu có thông tin.",
            "Zalo/Facebook Lead Form: chạy ads vào insight căn trống, không chạy broad nội thất chung cư.",
            "Google Search ngách: nội thất căn hộ cho thuê, nội thất căn hộ đã bàn giao, nội thất căn hộ Ocean Park.",
            "TikTok: làm video phân tích bài toán căn trống, dùng để nuôi trust và retarget.",
            "Remarketing: bám lại người đã xem video, bấm form, inbox, hoặc từng tương tác với page/OA."
          ]
        },
        {
          heading: "Form lọc lead nên hỏi",
          points: [
            "Anh/chị sở hữu căn loại nào: studio, 1N, 2N, 2N+, 3N?",
            "Căn đã nhận nhà bao lâu rồi: dưới 1 tháng, 1–3 tháng, 3–6 tháng, trên 6 tháng?",
            "Hiện trạng căn: trống, đã có đồ cơ bản, đang cho thuê, đang để bán, chưa rõ kế hoạch?",
            "Mục đích sắp tới: để ở, cho thuê, bán lại, giữ tài sản, chưa quyết?",
            "Ngân sách dự kiến: dưới 100tr, 100–200tr, 200–400tr, trên 400tr?"
          ]
        },
        {
          heading: "Việc cần làm ngay",
          points: [
            "Làm 3 gói sale kit: studio/1N cho thuê, 2N/3N linh hoạt, second opinion check báo giá.",
            "Chuẩn bị bảng 'đồ bắt buộc / đồ có thể bỏ' cho căn cho thuê.",
            "Chuẩn bị bảng '2 phương án ngân sách' cho căn 2N/3N: ở lâu dài và cho thuê.",
            "Viết 3 script gọi điện riêng cho studio/1N, 2N/3N, khách đã có báo giá.",
            "Mỗi tuần review lead theo loại căn để biết tệp nào thực sự có lịch khảo sát."
          ]
        }
      ],
      checklist: [
        "Ưu tiên 2N/3N trước, studio/1N chỉ chạy nếu đã có gói chuẩn.",
        "Không dùng ảnh quá luxury cho tệp đầu tư cho thuê.",
        "Không để sale báo giá vội khi chưa biết mục đích sử dụng căn.",
        "Mọi lead phải được gắn tag: loại căn, mục đích, ngân sách, trạng thái căn.",
        "Cam sống nếu tạo được lịch khảo sát thật với ngân sách khách 200tr+."
      ]
    },
    {
      id: "renovation",
      label: "Mũi 2: Cải tạo",
      title: "Sửa chữa/cải tạo căn hộ trọn gói",
      subtitle: "Mũi săn đơn lớn, nhưng phải lọc ngân sách và tránh sa lầy việc sửa nhỏ.",
      color: "from-amber-700 to-orange-500",
      bg: "bg-amber-50",
      sections: [
        {
          heading: "Mục tiêu của mũi này",
          points: [
            "Săn nhóm cải tạo tổng thể hoặc sửa lớn, ưu tiên đơn từ 200tr trở lên.",
            "Không định vị là sửa chữa giá rẻ hay nhận mọi việc lặt vặt.",
            "Xây trust bằng năng lực khảo sát hiện trạng, bóc tách hạng mục, xử lý rủi ro thi công.",
            "Dùng content before-after để chứng minh năng lực, không chỉ dùng render đẹp.",
            "Lọc mạnh từ form để sale không bị chìm trong lead sửa nhỏ dưới 50–80tr."
          ]
        },
        {
          heading: "Tệp khách cần tìm",
          points: [
            "Chủ căn hộ đã ở 8–15 năm, nhà xuống cấp, muốn làm lại để ở lâu dài.",
            "Người mua lại căn cũ, muốn cải tạo tổng thể trước khi chuyển vào.",
            "Gia đình thay đổi nhu cầu: sinh con, con lớn, đón bố mẹ, cần đổi công năng.",
            "Chủ muốn cải tạo để cho thuê/bán lại giá tốt hơn.",
            "Chủ căn có ngân sách rõ từ 200tr+, chấp nhận khảo sát hiện trạng trước khi báo giá."
          ]
        },
        {
          heading: "Thông điệp quảng cáo",
          points: [
            "Căn hộ cũ xuống cấp? Đừng sửa từng món rời rạc — cần khảo sát tổng thể trước khi báo giá.",
            "Cải tạo căn hộ trọn gói: bóc tách phần nên giữ, phần nên sửa, phần bắt buộc phải xử lý.",
            "Bếp cũ, WC xuống cấp, sàn/tủ hỏng: bên em khảo sát và lên phương án cải tạo theo ngân sách.",
            "Mua lại căn hộ cũ? Cải tạo lại công năng trước khi chuyển vào ở.",
            "Cải tạo căn hộ đang ở: lên kế hoạch thi công theo giai đoạn để giảm ảnh hưởng sinh hoạt."
          ]
        },
        {
          heading: "Kênh triển khai",
          points: [
            "Google Search: cải tạo căn hộ cũ, sửa căn hộ chung cư, cải tạo bếp chung cư, cải tạo WC chung cư.",
            "TikTok: video before-after, phân tích lỗi nhà cũ, quy trình khảo sát, rủi ro phát sinh.",
            "Facebook/Zalo Lead Form: chỉ chạy nếu form có lọc ngân sách và mức độ sửa.",
            "Landing/page riêng: cải tạo căn hộ trọn gói, có quy trình, case, checklist, câu hỏi thường gặp.",
            "Remarketing người xem video cải tạo, vì tệp này cần thời gian cân nhắc dài hơn."
          ]
        },
        {
          heading: "Form lọc lead nên hỏi",
          points: [
            "Căn hộ ở chung cư/khu nào? Diện tích khoảng bao nhiêu m2?",
            "Căn đang ở, để trống, hay mới mua lại?",
            "Anh/chị muốn sửa một phần hay cải tạo tổng thể?",
            "Có đụng đến bếp, WC, sàn, điện nước, trần/tường, phá dỡ không?",
            "Ngân sách dự kiến: dưới 100tr, 100–200tr, 200–400tr, trên 400tr?"
          ]
        },
        {
          heading: "Việc cần làm ngay",
          points: [
            "Làm checklist khảo sát căn cũ: bếp, WC, sàn, điện nước, tường, trần, tủ, chống thấm.",
            "Soạn bài/clip: 'Vì sao cải tạo căn hộ cũ không thể báo giá qua ảnh'.",
            "Tạo form có câu hỏi ngân sách bắt buộc để loại lead sửa nhỏ.",
            "Làm bảng phân loại: sửa nhỏ, sửa vừa, cải tạo tổng thể; sale biết nhóm nào nên theo mạnh.",
            "Thu thập hoặc dựng case before-after, kể cả case minh họa, để phục vụ TikTok và sale."
          ]
        }
      ],
      checklist: [
        "Không chạy câu 'sửa chữa căn hộ giá rẻ'.",
        "Không nhận tư vấn sâu cho lead ngân sách quá thấp nếu không có khả năng chốt.",
        "Lead cải tạo phải được gọi bằng kịch bản khảo sát hiện trạng, không báo giá vội.",
        "CPL cao vẫn chấp nhận nếu lead có ngân sách 200tr+ và thời điểm sửa rõ.",
        "Nên có quy trình khảo sát/báo giá chuẩn để tạo cảm giác chuyên nghiệp."
      ]
    },
    {
      id: "ecopark",
      label: "Mũi 3: Ecopark",
      title: "Mở rộng sang Ecopark bằng content và intent",
      subtitle: "Chưa có data nên không đánh như Vin. Đi từ nội dung, search và test nhỏ.",
      color: "from-sky-700 to-cyan-500",
      bg: "bg-sky-50",
      sections: [
        {
          heading: "Vai trò của mũi này",
          points: [
            "Mở rộng thị trường ngoài Vin Ocean Park nhưng không đốt ngân sách lớn ngay.",
            "Kiểm chứng xem insight căn trống/cải tạo có dùng được ở Ecopark không.",
            "Xây hiện diện tìm kiếm: khi khách search nội thất/cải tạo Ecopark thì có mình xuất hiện.",
            "Tạo nội dung đủ rộng để không phụ thuộc vào data sẵn có.",
            "Nếu có tín hiệu tốt mới tăng ngân sách, không all-in từ đầu."
          ]
        },
        {
          heading: "Tệp cần nhắm",
          points: [
            "Chủ căn hộ Ecopark đã nhận nhưng để trống, chưa biết ở hay cho thuê.",
            "Chủ căn 2N/3N muốn hoàn thiện để ở, tích sản hoặc cho thuê dài hạn.",
            "Người mua lại căn cũ ở Ecopark cần cải tạo trước khi ở.",
            "Chủ muốn làm nội thất theo phong cách sống xanh, nhẹ nhàng, bền, ít lỗi thời.",
            "Người tìm kiếm chủ động trên Google/TikTok về nội thất hoặc cải tạo Ecopark."
          ]
        },
        {
          heading: "Thông điệp nên dùng",
          points: [
            "Căn hộ Ecopark đã nhận nhưng để trống? Tư vấn phương án ở/cho thuê theo ngân sách thực tế.",
            "Nội thất căn hộ Ecopark: làm vừa đủ đẹp, bền, phù hợp nhu cầu ở thật hoặc cho thuê.",
            "Căn 2N/3N chưa khai thác: nên làm theo hướng ở lâu dài hay cho thuê?",
            "Cải tạo căn hộ Ecopark: khảo sát hiện trạng, tối ưu công năng, giữ tinh thần sống xanh.",
            "Không cần làm quá tay — quan trọng là đúng mục đích sử dụng và dễ bảo trì."
          ]
        },
        {
          heading: "Kênh triển khai",
          points: [
            "Google Search ngân sách nhỏ với từ khóa ngách về nội thất/cải tạo Ecopark.",
            "TikTok series dùng insight chung: căn trống, 2N/3N tích sản, cải tạo căn cũ.",
            "Landing/page riêng cho Ecopark để bắt search và tăng trust.",
            "Facebook/TikTok geo-test nhẹ quanh khu vực, chưa scale nếu lead loãng.",
            "Retarget người đã tương tác với content Ecopark hoặc nội dung căn trống/cải tạo."
          ]
        },
        {
          heading: "Việc cần làm ngay",
          points: [
            "Tạo landing/page: 'Nội thất căn hộ Ecopark' và 'Cải tạo căn hộ Ecopark'.",
            "Viết 10 bài/clip dùng được cho cả Vin và Eco nhưng đổi bối cảnh khu vực.",
            "Test Google từ khóa ngách 1–2 triệu/tháng trước, đo xem có lead thật không.",
            "Chuẩn bị bộ ảnh phong cách phù hợp Eco: sáng, xanh, tự nhiên, bền, không quá phô luxury.",
            "Theo dõi riêng lead Eco để biết có nên tăng ngân sách hay chỉ nuôi dài hạn."
          ]
        }
      ],
      checklist: [
        "Không chạy direct data vì chưa có data Eco.",
        "Không kỳ vọng lead rẻ ngay trong 30 ngày đầu.",
        "Ưu tiên search/content hơn lead form broad.",
        "Tách tracking Eco riêng khỏi Vin để không đọc sai hiệu quả.",
        "Chỉ scale khi có tín hiệu: lead đúng khu, đúng nhu cầu, có ngân sách."
      ]
    },
    {
      id: "handover",
      label: "Mũi 4: Sắp bàn giao",
      title: "Căn chuẩn bị bàn giao — giữ sóng, không all-in ads",
      subtitle: "Đây là chợ đông đối thủ. Dùng content và Zalo mềm, không đốt tiền lead lớn.",
      color: "from-red-700 to-rose-500",
      bg: "bg-red-50",
      sections: [
        {
          heading: "Vì sao không làm mũi chính",
          points: [
            "Cạnh tranh trong khu quá khốc liệt, đặc biệt ở giai đoạn bàn giao.",
            "Đối thủ có cộng đồng cư dân lớn, case thực tế, quan hệ và thông tin sớm.",
            "Họ có thể đo trước, chạy sản xuất trước, nhận nhà là lắp luôn, tạo trust rất cao.",
            "Khách bị nhiều đơn vị bám, dễ so giá từng hạng mục và kéo mình vào cuộc chiến giá.",
            "Với CPL khoảng 400k/lead, đơn vị mới rất dễ mua lead ở thế bất lợi."
          ]
        },
        {
          heading: "Vai trò mới của mũi này",
          points: [
            "Giữ hiện diện thương hiệu trong giai đoạn thị trường nóng.",
            "Tạo content phục vụ TikTok, Zalo, sale gửi khách, remarketing.",
            "Dùng Zalo tiếp cận mềm với data sẵn có, không dội bom spam quá mức.",
            "Bắt các khách muốn second opinion: đã có báo giá nhưng còn lăn tăn.",
            "Không kỳ vọng đây là nguồn doanh thu chính trong 60 ngày đầu."
          ]
        },
        {
          heading: "Thông điệp nên dùng",
          points: [
            "Sắp nhận bàn giao căn hộ? Đừng vội chốt nội thất khi chưa kiểm tra layout, ngân sách và phần dễ phát sinh.",
            "Gửi mã căn/loại căn, bên em tư vấn checklist nội thất cần chuẩn bị trước khi nhận nhà.",
            "Đã có báo giá nội thất? Bên em check giúp phần nào nên làm, phần nào có thể tối ưu.",
            "Căn studio/1N và 2N/3N không nên làm cùng một công thức nội thất.",
            "Nhận nhà xong nên làm gì trong 7 ngày đầu để tránh mất tiền oan?"
          ]
        },
        {
          heading: "Kênh triển khai",
          points: [
            "TikTok content: checklist nhận nhà, lỗi thường gặp, so sánh làm để ở/cho thuê.",
            "Zalo data: lời mời kết bạn mềm, gửi checklist, không bán hàng quá gắt ngay tin đầu.",
            "Google Search ngân sách rất nhỏ nếu có từ khóa sát dự án, chỉ để chặn cơ hội.",
            "Remarketing người xem content bàn giao sang ads căn trống/cải tạo về sau.",
            "Không chạy lead form diện rộng nếu CPL cao và lead bị cạnh tranh quá nhiều."
          ]
        },
        {
          heading: "Việc cần làm ngay",
          points: [
            "Tạo checklist PDF/ảnh: 'Sắp nhận nhà cần chuẩn bị gì trước khi làm nội thất'.",
            "Viết 10 video TikTok ngắn về lỗi khi nhận nhà và làm nội thất quá sớm.",
            "Soạn 3 mẫu tin Zalo: gửi checklist, hỏi loại căn, offer check báo giá.",
            "Tạo mẫu form nhẹ: loại căn, thời điểm nhận nhà, mục đích ở/cho thuê, đã có báo giá chưa.",
            "Dùng content bàn giao để nuôi trust, không dùng làm cam ads chính."
          ]
        }
      ],
      checklist: [
        "Không chi quá 5–10% ngân sách ads cho mũi này.",
        "Không cạnh tranh bằng giá rẻ.",
        "Không dùng thông điệp 'thi công trọn gói giá tốt' quá chung chung.",
        "Nên bán second opinion và checklist thay vì bán thẳng hợp đồng.",
        "Mọi lead bàn giao phải được phân loại: hỏi chơi, đang so giá, có ngân sách, cần tư vấn thật."
      ]
    },
    {
      id: "content",
      label: "Mũi nền: Content",
      title: "TikTok, ảnh, clip và tài sản bán hàng",
      subtitle: "Content không chỉ để viral. Content phải phục vụ sale, retarget và tăng trust.",
      color: "from-purple-700 to-fuchsia-500",
      bg: "bg-purple-50",
      sections: [
        {
          heading: "Vai trò của content",
          points: [
            "Tạo trust cho đơn vị mới mở, bù lại điểm yếu chưa có cộng đồng/case dày.",
            "Làm tài sản cho sale gửi khách sau khi gọi hoặc kết bạn Zalo.",
            "Nuôi retarget để giảm cảm giác xa lạ trước khi khách điền form.",
            "Giải thích các bài toán khó: căn trống, đầu tư cho thuê, cải tạo căn cũ, second opinion báo giá.",
            "Dùng đều cho TikTok, Facebook, Zalo OA, landing page và tin nhắn chăm lead."
          ]
        },
        {
          heading: "Series 1 — Căn trống sau bàn giao",
          points: [
            "Căn để trống 3–6 tháng: có nên làm nội thất cho thuê không?",
            "Studio/1N đu đỉnh: đừng làm full nếu mục tiêu là cho thuê.",
            "2N/3N để trống: nên làm để ở hay cho thuê?",
            "Làm nội thất cho thuê: 5 món bắt buộc và 5 món có thể bỏ.",
            "Căn trống càng lâu càng khó ra quyết định — nên bắt đầu từ đâu?"
          ]
        },
        {
          heading: "Series 2 — Cải tạo căn hộ cũ",
          points: [
            "Căn hộ 10 năm tuổi thường xuống cấp ở đâu?",
            "Cải tạo căn hộ cũ: phần nào nên giữ, phần nào nên đập?",
            "Sửa bếp chung cư cũ: 3 lỗi dễ đội tiền.",
            "Cải tạo WC chung cư vì sao không thể báo giá qua loa?",
            "Before-after: từ căn cũ bí, tối, xuống cấp thành căn sáng và gọn hơn."
          ]
        },
        {
          heading: "Series 3 — Sắp bàn giao",
          points: [
            "Sắp nhận nhà: 7 việc nên làm trước khi chốt nội thất.",
            "Đã có báo giá nội thất: check những mục nào để tránh phát sinh?",
            "Vì sao cùng căn 2N nhưng báo giá chênh nhau cả trăm triệu?",
            "Nhận nhà xong có cần đo lại không?",
            "Làm nội thất để ở và cho thuê khác nhau như thế nào?"
          ]
        },
        {
          heading: "Tài sản cần sản xuất",
          points: [
            "Bộ ảnh quảng cáo căn trống: 2N/3N, studio/1N, second opinion báo giá.",
            "Bộ ảnh quảng cáo cải tạo: before-after, khảo sát hiện trạng, bếp/WC/sàn/điện nước.",
            "Checklist dạng ảnh/PDF: nhận nhà, căn trống cho thuê, cải tạo căn cũ.",
            "Video ngắn 20–45 giây: nói thẳng insight, ít chữ, có CTA gửi loại căn/ngân sách.",
            "Landing/page hoặc bài ghim: tổng hợp case, quy trình, form, thông tin liên hệ."
          ]
        }
      ],
      checklist: [
        "Mỗi tuần tối thiểu 3–5 video ngắn, không cần quá cầu kỳ nhưng phải đúng insight.",
        "Mỗi video nên có một CTA cụ thể: gửi loại căn, gửi ảnh hiện trạng, gửi báo giá để check.",
        "Không chỉ đăng ảnh đẹp; phải có nội dung tư vấn làm khách thấy mình hiểu bài toán của họ.",
        "Outsource ảnh/clip phải được giao brief theo từng mũi, không thiết kế chung chung.",
        "Content nào có tương tác tốt thì dùng làm ads/retarget."
      ]
    },
    {
      id: "operation",
      label: "Mũi vận hành",
      title: "Ads, form, sale và KPI kiểm soát",
      subtitle: "Chiến lược chỉ sống nếu lead được lọc, sale xử lý nhanh và đo đúng chỉ số.",
      color: "from-indigo-700 to-blue-500",
      bg: "bg-indigo-50",
      sections: [
        {
          heading: "Phân bổ ngân sách gợi ý",
          points: [
            "Ngân sách 10tr/tháng: 6tr căn trống, 2tr cải tạo, 1tr Google ngách, 1tr retarget/content.",
            "Ngân sách 20tr/tháng: 10–12tr căn trống, 4–5tr cải tạo, 2–3tr Google, 1–2tr retarget.",
            "Căn chuẩn bị bàn giao: 0–1tr ads, chủ yếu TikTok và Zalo mềm.",
            "Không chia ngân sách quá nhỏ cho nhiều cam khiến không đủ dữ liệu kết luận.",
            "Mỗi tuần cắt nhóm quảng cáo không tạo lead đủ điều kiện, không chỉ nhìn CPL thấp."
          ]
        },
        {
          heading: "KPI nên theo dõi",
          points: [
            "CPL thô: chỉ là chỉ số đầu vào, không dùng để kết luận cam thắng/thua một mình.",
            "Cost/lead đủ điều kiện: lead có căn thật, đúng khu, đúng trạng thái, có ngân sách tương đối.",
            "Cost/lịch khảo sát: chỉ số quan trọng nhất với ads ngân sách nhỏ.",
            "Tỷ lệ lead 2N/3N và lead ngân sách 200tr+.",
            "Tỷ lệ chuyển đổi: lead gọi được, lead tư vấn được, lịch khảo sát, báo giá, hợp đồng."
          ]
        },
        {
          heading: "Ngưỡng chấp nhận ban đầu",
          points: [
            "Studio/1N cho thuê: CPL 250–400k chỉ ổn nếu có gói chuẩn và sale xử lý nhanh.",
            "2N/3N trống: CPL 400–700k vẫn chấp nhận nếu khách có ngân sách 250tr+.",
            "Cải tạo căn hộ: CPL 500k–1tr vẫn chấp nhận nếu lọc được đơn 200tr+.",
            "Mục tiêu tháng đầu: 6–10 lịch khảo sát chất lượng, 1–2 hợp đồng.",
            "Nếu lead nhiều nhưng không có lịch khảo sát, phải sửa thông điệp/form/tệp ngay."
          ]
        },
        {
          heading: "Phân công team 3 sale",
          points: [
            "Sale 1: xử lý lead mới trong 5–15 phút, lọc nhu cầu, tag thông tin.",
            "Sale 2: nuôi lead ấm qua Zalo, gửi checklist, gói tham khảo, video/case phù hợp.",
            "Sale 3: lead nóng, đặt lịch khảo sát, báo giá, chốt hợp đồng.",
            "Hoặc chia theo tệp: 1 người studio/1N, 1 người 2N/3N, 1 người cải tạo/lead nóng.",
            "Không để lead rơi tự do trong nhóm chat; phải có file/CRM theo trạng thái từng lead."
          ]
        },
        {
          heading: "Quy trình xử lý lead",
          points: [
            "Bước 1: gọi trong 5–15 phút sau khi nhận lead.",
            "Bước 2: xác minh loại căn, trạng thái căn, mục đích, ngân sách, thời điểm làm.",
            "Bước 3: gửi đúng tài liệu theo tệp: căn trống cho thuê, 2N/3N linh hoạt, cải tạo, second opinion.",
            "Bước 4: chốt lịch khảo sát hoặc hẹn tư vấn sâu nếu khách đủ điều kiện.",
            "Bước 5: sau 24h/72h/7 ngày có kịch bản follow riêng, không nhắn chung chung."
          ]
        }
      ],
      checklist: [
        "Không để sale xử lý lead mà không có script theo từng mũi.",
        "Không báo giá khi chưa biết mục đích sử dụng và ngân sách dự kiến.",
        "Mỗi lead phải có tag: nguồn, tệp, loại căn, ngân sách, trạng thái, bước tiếp theo.",
        "Cuối tuần họp 30 phút: cam nào ra lịch, cam nào chỉ tạo lead rác.",
        "Sau 2–4 tuần, chỉ scale mũi có cost/lịch khảo sát hợp lý."
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="min-h-screen bg-neutral-100 p-4 text-neutral-900 md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">Dashboard chiến lược</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Quảng cáo nội thất với nguồn lực hạn chế</h1>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-neutral-600 md:text-base">
            Bản này chia theo từng mũi triển khai. Mỗi tab là một chiến trường riêng: ai là tệp khách, thông điệp gì, chạy kênh nào, form lọc ra sao, sale cần làm gì và KPI nào quyết định giữ hay cắt.
          </p>
        </div>

        <div className="sticky top-0 z-10 mb-5 rounded-3xl border border-neutral-200 bg-white/95 p-3 shadow-sm backdrop-blur">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`mb-5 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm`}>
          <div className={`bg-gradient-to-r ${active.color} p-6 text-white`}>
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/70">{active.label}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{active.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/85 md:text-base">{active.subtitle}</p>
            </div>
          </div>

          <div className={`p-5 md:p-6 ${active.bg}`}>
            <div className="grid gap-4 lg:grid-cols-2">
              {active.sections.map((section) => (
                <div key={section.heading} className="rounded-3xl border border-white/70 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">{section.heading}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-800" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">Checklist hành động</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {active.checklist.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-neutral-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">Luồng ưu tiên 60 ngày</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-sm font-semibold">1. Kiếm lead gần</div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">Dồn lực vào căn trống Vin Ocean Park, ưu tiên 2N/3N và chủ chưa quyết ở/cho thuê.</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <div className="text-sm font-semibold">2. Săn đơn lớn</div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">Test cải tạo căn hộ trọn gói, lọc ngân sách từ form, tránh lead sửa nhỏ.</p>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
              <div className="text-sm font-semibold">3. Mở thị trường</div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">Ecopark đi bằng content, search và landing riêng; chưa đốt lead form rộng.</p>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <div className="text-sm font-semibold">4. Giữ sóng</div>
              <p className="mt-2 text-sm leading-6 text-neutral-700">Căn sắp bàn giao chỉ dùng TikTok, checklist và Zalo mềm, không all-in ads.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
