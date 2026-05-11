import { useState } from "react";

function PointList({ points = [] }) {
  if (!points.length) return null;

  return (
    <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-700">
      {points.map((point) => (
        <li key={point} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-800" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function DataTable({ table }) {
  if (!table) return null;

  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-200">
      <table className="min-w-full border-collapse bg-white text-left text-sm">
        <thead className="bg-neutral-900 text-white">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="whitespace-nowrap px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${rowIndex}-${row[0]}`} className={rowIndex % 2 ? "bg-neutral-50" : "bg-white"}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} className="min-w-44 border-t border-neutral-200 px-4 py-3 leading-6 text-neutral-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScriptBlocks({ scripts = [] }) {
  if (!scripts.length) return null;

  return (
    <div className="mt-4 grid gap-3">
      {scripts.map((script) => (
        <div key={script.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="text-sm font-semibold text-neutral-900">{script.title}</div>
          <pre className="mt-3 whitespace-pre-wrap font-sans text-sm leading-7 text-neutral-700">{script.body}</pre>
        </div>
      ))}
    </div>
  );
}

function CardGrid({ cards = [] }) {
  if (!cards.length) return null;

  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-3">
      {cards.map((card) => (
        <div key={card.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="text-sm font-semibold text-neutral-900">{card.title}</div>
          {card.subtitle && <p className="mt-2 text-sm leading-6 text-neutral-600">{card.subtitle}</p>}
          {card.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-sm leading-7 text-neutral-700">
              {paragraph}
            </p>
          ))}
          <PointList points={card.points} />
          <DataTable table={card.table} />
          <ScriptBlocks scripts={card.scripts} />
        </div>
      ))}
    </div>
  );
}

function StepList({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <div className="mt-4 grid gap-4">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
              {index + 1}
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">{step.label}</div>
              <div className="text-base font-semibold text-neutral-900">{step.title}</div>
            </div>
          </div>
          {step.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm leading-7 text-neutral-700">
              {paragraph}
            </p>
          ))}
          <PointList points={step.points} />
          <DataTable table={step.table} />
          <CardGrid cards={step.cards} />
          <ScriptBlocks scripts={step.scripts} />
          {step.output && (
            <div className="mt-4 rounded-xl bg-white p-3 text-sm leading-6 text-neutral-700">
              <span className="font-semibold text-neutral-900">Output bắt buộc: </span>
              {step.output}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SectionContent({ section }) {
  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-sm leading-7 text-neutral-700">
          {paragraph}
        </p>
      ))}
      <PointList points={section.points} />
      <DataTable table={section.table} />
      <CardGrid cards={section.cards} />
      <ScriptBlocks scripts={section.scripts} />
      <StepList steps={section.steps} />
    </>
  );
}

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
      subtitle: "Kế hoạch 30 ngày để tìm chủ căn đã nhận nhà nhưng còn lưỡng lự, rồi bán phương án nội thất đúng mục đích.",
      color: "from-emerald-700 to-teal-500",
      bg: "bg-emerald-50",
      detailed: true,
      sections: [
        {
          heading: "1. Bản chất của mũi 1",
          paragraphs: [
            "Mũi này không phải là chạy ads cho chủ căn hộ Vin Ocean Park làm nội thất. Câu đó quá rộng, quá giống đối thủ và rất dễ bị kéo vào so giá.",
            "Định nghĩa đúng: tìm những chủ căn đã nhận nhà nhưng vẫn để trống, đang lưỡng lự giữa để ở, cho thuê, bán lại hoặc giữ tài sản, rồi bán cho họ một phương án nội thất đúng mục đích, không làm thừa.",
            "Newhomes không xuất hiện như thêm một đội thi công nội thất. Vai trò cần chiếm trong đầu khách là người giúp chủ căn quyết định: căn này nên làm đến mức nào là hợp lý."
          ],
          points: [
            "Không bán 'gói nội thất đẹp' trước. Bán quyết định đúng: cho thuê, để ở hay giữ tài sản.",
            "Không khuyên làm full khi chưa rõ mục đích khai thác căn.",
            "Không để sale báo giá vội. Sale phải hỏi mục đích sử dụng trước khi nói tiền.",
            "Thông điệp lõi: căn đã nhận nhưng vẫn để trống? Đừng vội làm full."
          ]
        },
        {
          heading: "2. Insight thị trường thuê",
          paragraphs: [
            "Giá thuê tại Vinhomes Ocean Park có biên rất rộng theo nguồn tin, loại căn, tòa, view, diện tích, nội thất và tình trạng khai thác. Vì vậy không dùng số thuê như cam kết đầu ra, mà dùng nó như insight chiến lược: cùng một căn, làm nội thất sai mức có thể làm vốn bị chôn hoặc làm căn kém cạnh tranh.",
            "Hàm ý quảng cáo: không bán 'nội thất đẹp'. Phải bán 'nội thất phù hợp với mức thuê kỳ vọng'. Studio/1N kỳ vọng thuê 6-7 triệu/tháng không nên bị tư vấn làm quá tay. Nhưng 2N/3N có khả năng ở sau này thì cũng không nên làm quá rẻ để rồi phải sửa lại."
          ],
          points: [
            "Studio/1N: tư vấn theo vốn bỏ thêm và tốc độ cho thuê.",
            "2N/3N: tư vấn theo kịch bản linh hoạt giữa cho thuê trước và về ở sau.",
            "Khách đã có báo giá: tư vấn bằng cách check hạng mục dễ phát sinh, không ép đổi quyết định ngay."
          ]
        },
        {
          heading: "3. Ba campaign lõi",
          cards: [
            {
              title: "Campaign A — Studio/1N cho thuê gọn",
              subtitle: "Nhóm có thể nhiều lead nhưng khó ăn nhất, phải bán bằng gói rõ và lọc mạnh.",
              points: [
                "Tâm lý: kẹt hàng, đu đỉnh, không muốn bỏ thêm vốn, nhạy giá, muốn cho thuê nhưng sợ làm xong không hiệu quả.",
                "Thông điệp: Studio/1N đang để trống? Làm nội thất vừa đủ để dễ cho thuê, không chôn thêm vốn sai cách.",
                "Cách xử lý: không cho sale tư vấn lan man; lead ngân sách quá thấp hoặc chưa làm trong 1-2 tháng thì đưa vào tệp nuôi."
              ],
              table: {
                headers: ["Gói", "Vai trò", "Cách bán"],
                rows: [
                  ["Gói tối thiểu", "Có đồ cơ bản để lên nhà cho thuê", "Không đẹp xuất sắc, nhưng đủ dùng"],
                  ["Gói đủ cho thuê", "Đẹp vừa đủ, dễ chụp ảnh, dễ khách thuê", "Gói nên đẩy chính"],
                  ["Gói đẹp hơn mặt bằng", "Dành cho căn view/tầng tốt, muốn giá thuê cao hơn", "Không bán đại trà"]
                ]
              }
            },
            {
              title: "Campaign B — 2N/3N linh hoạt",
              subtitle: "Mũi chính vì chủ có ngân sách tốt hơn, căn giá trị lớn hơn và nỗi lăn tăn rõ hơn.",
              points: [
                "Tâm lý: có thể mua tích sản, chưa cần cho thuê ngay, nhưng để trống lâu cũng bắt đầu xót.",
                "Thông điệp: Căn 2N/3N để trống: nhận 2 phương án nội thất — một để ở lâu dài, một tối ưu cho thuê.",
                "Cách xử lý: không hỏi ngay 'anh/chị muốn làm gói bao nhiêu', mà hỏi căn này thiên về để ở, cho thuê hay chưa quyết hẳn."
              ],
              table: {
                headers: ["Phương án", "Dành cho ai", "Cách tư vấn"],
                rows: [
                  ["Cho thuê", "Chủ muốn khai thác sớm", "Bền, dễ thay, không làm quá tay"],
                  ["Linh hoạt", "Chưa quyết ở hay cho thuê", "Đủ đẹp để ở sau này, vẫn cho thuê được"],
                  ["Để ở lâu dài", "Chủ có khả năng về ở", "Công năng, vật liệu, thẩm mỹ tốt hơn"]
                ]
              }
            },
            {
              title: "Campaign C — Second opinion",
              subtitle: "Chen vào lúc khách đã có báo giá nhưng còn phân vân, không cần cạnh tranh từ đầu.",
              points: [
                "Thông điệp: Đã có báo giá nội thất nhưng vẫn lăn tăn? Gửi bên em check giúp phần nào dễ phát sinh, phần nào có thể tối ưu trước khi chốt.",
                "Kênh hợp: Zalo data, remarketing, content TikTok và một phần ngân sách ads nhỏ.",
                "Cách xử lý: không ép khách đổi quyết định; trước mắt check giúp báo giá đã đủ hạng mục chưa."
              ],
              table: {
                headers: ["Checklist check báo giá", "Câu hỏi cần soi"],
                rows: [
                  ["Tủ bếp", "Đã tính phụ kiện, mặt đá, kính bếp chưa?"],
                  ["Tủ áo", "Tính theo mét dài hay m2? Có ghi rõ vật liệu không?"],
                  ["Đồ rời", "Rèm, sofa, giường, đệm, bàn ăn đã nằm trong báo giá chưa?"],
                  ["Phát sinh", "Điện nước, ổ cắm, đèn, trần, vận chuyển, lắp đặt, bảo hành đã rõ chưa?"]
                ]
              }
            }
          ]
        },
        {
          heading: "4. Phân bổ ngân sách mũi 1",
          paragraphs: [
            "Nếu tổng ads tháng là 10-20 triệu, mũi 1 nên ăn khoảng 60% giai đoạn đầu. Không đọc sống chết bằng CPL thô; đọc bằng lead đủ điều kiện, lịch tư vấn/khảo sát và báo giá nóng."
          ],
          table: {
            headers: ["Tổng ads", "Nhánh", "Ngân sách", "Mục tiêu"],
            rows: [
              ["10 triệu/tháng", "2N/3N linh hoạt", "3 triệu", "Lead chất lượng, ngân sách tốt"],
              ["10 triệu/tháng", "Studio/1N cho thuê", "2 triệu", "Test volume và gói cho thuê"],
              ["10 triệu/tháng", "Second opinion / retarget", "1 triệu", "Bám khách đã tương tác hoặc đã có báo giá"],
              ["20 triệu/tháng", "2N/3N linh hoạt", "6 triệu", "Mũi chính"],
              ["20 triệu/tháng", "Studio/1N cho thuê", "3 triệu", "Mũi phụ tạo volume"],
              ["20 triệu/tháng", "Second opinion", "2 triệu", "Chen vào khách đang so báo giá"],
              ["20 triệu/tháng", "Retarget content", "1 triệu", "Nuôi trust"]
            ]
          },
          points: [
            "Với 6 triệu và CPL khoảng 400k, chỉ kỳ vọng khoảng 15 lead thô; form phải lọc tốt và sale phải gọi rất nhanh.",
            "Với 10-12 triệu, kỳ vọng khoảng 25-30 lead thô; mục tiêu thực tế là lọc ra 8-12 lead đủ điều kiện, 4-6 lịch tư vấn/khảo sát, 1 hợp đồng hoặc 2-3 báo giá nóng."
          ]
        },
        {
          heading: "5. Bộ nội dung cần chuẩn bị",
          cards: [
            {
              title: "4 concept ảnh quảng cáo",
              table: {
                headers: ["Ảnh", "Headline", "Sub", "CTA", "Hình ảnh"],
                rows: [
                  ["Căn trống sau bàn giao", "Căn đã nhận nhưng vẫn để trống?", "Tư vấn nên làm nội thất theo hướng ở, cho thuê hay giữ tài sản.", "Gửi loại căn để nhận phương án phù hợp.", "Phòng khách căn hộ trống hoặc bán trống, tone sáng, không quá luxury."],
                  ["Studio/1N cho thuê", "Studio/1N cho thuê: đừng làm thừa", "Gói vừa đủ đẹp, dễ cho thuê, tối ưu vốn.", "Nhận checklist đồ cần làm.", "Căn nhỏ, gọn, sáng, đủ giường, tủ, bàn, sofa nhỏ hoặc bàn ăn nhỏ."],
                  ["2N/3N linh hoạt", "Căn 2N/3N để trống?", "Nhận 2 phương án: để ở lâu dài hoặc tối ưu cho thuê.", "Tư vấn theo ngân sách thực tế.", "Phòng khách 2N/3N đẹp vừa phải, có cảm giác sống thật."],
                  ["Check báo giá", "Đã có báo giá nội thất?", "Check lại phần dễ phát sinh trước khi chốt.", "Gửi báo giá để được tư vấn.", "Bàn làm việc, bản vẽ, báo giá, mẫu vật liệu."]
                ]
              }
            },
            {
              title: "10 video TikTok/Reels đầu tiên",
              points: [
                "Căn hộ để trống 3-6 tháng: có nên làm nội thất không?",
                "Studio/1N cho thuê: 5 món bắt buộc phải có.",
                "Studio/1N cho thuê: 5 món không nên làm thừa.",
                "Căn 2N/3N để trống: làm để ở hay cho thuê?",
                "Chưa quyết ở hay cho thuê thì nên thiết kế kiểu gì?",
                "Vì sao cùng căn 2N báo giá có thể lệch cả trăm triệu?",
                "Đã có báo giá nội thất: check 7 mục này trước khi chốt.",
                "Làm nội thất cho thuê: đẹp vừa đủ là thế nào?",
                "Căn trống càng lâu càng khó ra quyết định — nên bắt đầu từ đâu?",
                "Có nên làm full nội thất khi chưa có khách thuê không?"
              ]
            },
            {
              title: "Tài liệu sale phải có",
              points: [
                "Bảng gói studio/1N cho thuê: tối thiểu, đủ cho thuê, đẹp hơn mặt bằng.",
                "Bảng 2N/3N ba phương án: cho thuê, linh hoạt, để ở lâu dài.",
                "Checklist '10 mục dễ phát sinh trong báo giá nội thất căn hộ' cho campaign second opinion."
              ]
            }
          ]
        },
        {
          heading: "6. Form lọc lead",
          paragraphs: [
            "Không dùng form chỉ có họ tên, số điện thoại, nhu cầu. Form phải hỏi đủ để sale biết khách thuộc nhánh nào và có đáng gọi sâu không. Câu ngân sách có thể làm giảm số lead, nhưng tăng chất lượng."
          ],
          table: {
            headers: ["Câu hỏi", "Option"],
            rows: [
              ["Anh/chị sở hữu loại căn nào?", "Studio, 1N, 2N, 2N+, 3N"],
              ["Căn đã nhận nhà bao lâu?", "Chưa nhận, dưới 1 tháng, 1-3 tháng, 3-6 tháng, trên 6 tháng"],
              ["Hiện trạng căn?", "Đang trống, đã có đồ cơ bản, đang cho thuê, đang để bán, chưa rõ kế hoạch"],
              ["Mục đích sắp tới?", "Để ở, cho thuê, bán lại, giữ tài sản, chưa quyết"],
              ["Ngân sách dự kiến?", "Dưới 100tr, 100-200tr, 200-400tr, trên 400tr, chưa rõ cần tư vấn"]
            ]
          }
        },
        {
          heading: "7. Sale xử lý lead mũi 1",
          scripts: [
            {
              title: "Câu mở đầu chung",
              body: "Em thấy anh/chị có quan tâm phương án cho căn đã nhận nhưng đang để trống. Em hỏi nhanh 2 ý để tư vấn đúng: căn mình đang định cho thuê, để ở hay vẫn chưa quyết hẳn ạ?"
            },
            {
              title: "Studio/1N — câu hỏi và câu tư vấn",
              body: "Hỏi nhanh:\n- Căn mình đang muốn cho thuê mức khoảng bao nhiêu/tháng?\n- Anh/chị muốn làm đủ cho thuê hay muốn làm đẹp hơn mặt bằng?\n- Căn đã có sẵn hạng mục gì chưa?\n- Mình muốn khai thác trong bao lâu?\n- Ngân sách tối đa anh/chị thấy hợp lý là khoảng nào?\n\nCâu tư vấn:\nVới căn studio/1N để cho thuê, bên em thường không khuyên làm quá tay ngay từ đầu. Mình nên chốt mục tiêu thuê trước, rồi mới tính gói nội thất tương ứng."
            },
            {
              title: "2N/3N — câu hỏi và câu bán chính",
              body: "Hỏi nhanh:\n- Căn này anh/chị mua để ở, cho thuê, hay tích sản giữ lâu dài?\n- Trong 6-12 tháng tới có khả năng dùng đến căn không?\n- Anh/chị thích phương án tiết kiệm để khai thác trước hay phương án làm chỉn chu để sau này ở cũng được?\n- Nhà có mấy người dùng nếu sau này về ở?\n- Có phong cách hoặc mức ngân sách mong muốn chưa?\n\nCâu tư vấn:\nVới căn 2N/3N, bên em không muốn tư vấn một phương án duy nhất. Em sẽ tách cho anh/chị 2 hướng: một hướng làm để cho thuê tối ưu vốn, một hướng làm linh hoạt để sau này về ở vẫn không phải sửa lại nhiều."
            },
            {
              title: "Khách đã có báo giá — câu hỏi và câu tư vấn",
              body: "Hỏi nhanh:\n- Anh/chị đang lăn tăn phần giá, vật liệu hay hạng mục phát sinh?\n- Báo giá hiện tại đã bao gồm thiết bị rời chưa?\n- Đã có phụ kiện, ray bản lề, mặt đá, kính bếp, đèn, rèm chưa?\n- Anh/chị muốn bên em check để tối ưu chi phí hay check rủi ro phát sinh?\n\nCâu tư vấn:\nBên em không cần anh/chị đổi quyết định ngay. Trước mắt em check giúp xem báo giá đó đã đủ hạng mục chưa, phần nào hợp lý, phần nào có thể tối ưu. Sau đó anh/chị tự so sánh sẽ dễ hơn."
            }
          ]
        },
        {
          heading: "8. Kịch bản follow Zalo",
          scripts: [
            {
              title: "Sau cuộc gọi lần 1",
              body: "Em gửi anh/chị tóm tắt nhanh theo căn của mình ạ:\n\nCăn hiện tại: [loại căn]\nHướng đang cân nhắc: [ở / cho thuê / chưa quyết]\nViệc nên làm trước: chốt mức ngân sách và mục đích sử dụng, sau đó mới lên gói nội thất phù hợp.\n\nEm gửi kèm checklist để anh/chị xem trước. Nếu anh/chị gửi thêm mặt bằng hoặc ảnh hiện trạng, bên em có thể tư vấn sát hơn."
            },
            {
              title: "Follow sau 24 giờ",
              body: "Em chào anh/chị. Hôm qua em có gửi checklist cho căn [loại căn].\nVới tình trạng căn đang để trống, bên em thường tách thành 2 hướng: làm tối ưu cho thuê hoặc làm linh hoạt để sau này ở vẫn ổn.\n\nAnh/chị đang nghiêng về hướng nào hơn để em gửi mẫu phương án phù hợp ạ?"
            },
            {
              title: "Follow sau 72 giờ",
              body: "Em gửi anh/chị thêm một lưu ý nhỏ: với căn để trống lâu, mình không nhất thiết phải làm full ngay. Quan trọng là xác định mục tiêu khai thác trước, tránh làm thừa những hạng mục không giúp tăng giá trị sử dụng hoặc giá thuê.\n\nAnh/chị gửi em loại căn/mặt bằng, em check nhanh hướng ngân sách phù hợp cho mình ạ."
            },
            {
              title: "Với khách đã có báo giá",
              body: "Em chào anh/chị. Nếu anh/chị đã có báo giá bên khác rồi, anh/chị có thể che phần thông tin riêng và gửi em xem qua.\nBên em sẽ check giúp các mục dễ phát sinh như phụ kiện, mặt đá, thiết bị rời, rèm, đèn, vận chuyển/lắp đặt, để anh/chị dễ so sánh trước khi chốt."
            }
          ]
        },
        {
          heading: "9. Lộ trình triển khai 30 ngày",
          steps: [
            {
              label: "Ngày 1-3",
              title: "Chuẩn hóa data và offer",
              points: [
                "Lọc data theo loại căn: studio/1N/2N/2N+/3N.",
                "Lọc theo tòa/phân khu nếu có.",
                "Tách nhóm đã bàn giao 3-6 tháng ra trước.",
                "Chuẩn bị bảng gói studio/1N, bảng 2 phương án cho 2N/3N, checklist check báo giá."
              ],
              output: "File data có cột loại căn, tòa, trạng thái gọi, nhu cầu, ngân sách, bước tiếp theo; 3 offer rõ ràng; 3 script sale."
            },
            {
              label: "Ngày 4-7",
              title: "Sản xuất nội dung đủ chạy test",
              points: [
                "Làm 4 ảnh quảng cáo, 6 video TikTok đầu tiên, 2 form lead.",
                "Soạn 3 mẫu tin nhắn Zalo.",
                "Tạo 1 checklist dạng ảnh/PDF.",
                "Không cần hoàn hảo; cần đủ chạy test."
              ]
            },
            {
              label: "Tuần 2",
              title: "Chạy test 2 campaign chính",
              points: [
                "Chạy 2N/3N linh hoạt và Studio/1N cho thuê.",
                "Mỗi campaign 2 mẫu thông điệp.",
                "Không chia quá vụn vì ngân sách nhỏ sẽ không đủ dữ liệu.",
                "Theo dõi lead có đúng loại căn, đúng tình trạng căn trống, có ngân sách, gọi được và có lịch không."
              ]
            },
            {
              label: "Tuần 3",
              title: "Thêm second opinion",
              points: [
                "Đẩy campaign second opinion khi sale bắt đầu gặp khách đang tham khảo bên khác, đã có báo giá hoặc đang so giá.",
                "Mục tiêu không phải lấy nhiều lead mới, mà kéo lại nhóm đang phân vân.",
                "Dùng Zalo follow và remarketing để bám lại."
              ]
            },
            {
              label: "Tuần 4",
              title: "Review sống/chết",
              points: [
                "Không kết luận bằng CPL.",
                "Giữ nhánh tạo lịch khảo sát và báo giá nóng.",
                "Cắt hoặc đưa vào nuôi những nhánh chỉ tạo lead rẻ nhưng không có lịch thật."
              ]
            }
          ],
          table: {
            headers: ["Chỉ số", "Câu hỏi cần trả lời"],
            rows: [
              ["Lead đúng tệp", "Có đúng căn trống không?"],
              ["Loại căn", "2N/3N chiếm bao nhiêu phần trăm?"],
              ["Ngân sách", "Có bao nhiêu lead 200tr+?"],
              ["Gọi được", "Sale có liên hệ được trong ngày không?"],
              ["Lịch khảo sát", "Có ra lịch thật không?"],
              ["Báo giá", "Có khách đủ thông tin để báo giá không?"],
              ["Hợp đồng", "Có đơn hoặc khách nóng không?"]
            ]
          }
        },
        {
          heading: "10. Kết luận mũi 1",
          points: [
            "2N/3N căn trống là mũi chính.",
            "Studio/1N cho thuê là mũi phụ, chỉ chạy khi có gói chuẩn.",
            "Second opinion là mũi chen vào khách đã bị đối thủ tiếp cận.",
            "Content TikTok phục vụ trust và retarget, không làm cho vui.",
            "Form lọc lead phải hỏi loại căn, trạng thái, mục đích và ngân sách.",
            "Sale không được báo giá vội, phải hỏi mục đích sử dụng trước."
          ],
          scripts: [
            {
              title: "Câu định vị quan trọng nhất",
              body: "Căn đã nhận nhưng vẫn để trống? Đừng vội làm full. Hãy chọn phương án nội thất theo đúng mục đích: cho thuê, để ở hay giữ tài sản."
            }
          ]
        }
      ],
      checklist: [
        "Ngày 1-3: chốt data, offer, script, checklist.",
        "Ngày 4-7: làm 4 ảnh ads, 6 video, 2 form, 3 tin Zalo.",
        "Tuần 2: test 2N/3N linh hoạt và Studio/1N cho thuê.",
        "Tuần 3: thêm second opinion cho khách đang so báo giá.",
        "Tuần 4: giữ nhánh có lịch khảo sát/báo giá nóng, cắt nhánh chỉ tạo lead rẻ."
      ]
    },
    {
      id: "renovation",
      label: "Mũi 2: Cải tạo",
      title: "Cải tạo / sửa chữa căn hộ trọn gói",
      subtitle: "Mini-business unit riêng: content tạo trust, ads lấy lead có lọc, sale đặt lịch khảo sát, khảo sát tạo niềm tin.",
      color: "from-amber-700 to-orange-500",
      bg: "bg-amber-50",
      detailed: true,
      sections: [
        {
          heading: "1. Định vị mũi cải tạo",
          paragraphs: [
            "Mũi 2 không được định vị là nhận sửa nhà, sửa bếp, sửa WC hay sửa đồ lặt vặt. Cách nói đó kéo Newhomes xuống nhóm thợ sửa vặt, dễ bị so giá và hút lead nhỏ.",
            "Định vị đúng: cải tạo căn hộ trọn gói có khảo sát hiện trạng, bóc tách hạng mục, tư vấn nên giữ, nên sửa và phần bắt buộc xử lý để tối ưu ngân sách, hạn chế phát sinh.",
            "Khách cần cảm thấy Newhomes đọc được hiện trạng căn hộ cũ, hiểu rủi ro thi công, biết thứ tự xử lý và biết khoản nào nên làm trước, khoản nào có thể giữ lại."
          ],
          points: [
            "Mục tiêu chính không phải thật nhiều lead, mà là đủ lead sửa lớn có ngân sách từ 200tr+ và có khả năng đặt lịch khảo sát.",
            "Không báo giá chốt qua ảnh nếu chưa khảo sát hiện trạng.",
            "Không nhận sâu nhóm sửa nhỏ nếu làm loãng định vị và ăn thời gian sale.",
            "Tất cả thông điệp phải dẫn về khảo sát hiện trạng trước khi báo giá."
          ]
        },
        {
          heading: "2. Bốn chân dung khách hàng",
          cards: [
            {
              title: "Nhóm A — Chủ căn đã ở lâu năm",
              subtitle: "Ở căn hộ 8-15 năm, đồ xuống cấp, bếp cũ, WC cũ, sàn phồng, tường bong, điện nước bắt đầu có vấn đề.",
              points: [
                "Nỗi đau: không biết sửa từ đâu, sợ phát sinh, sợ ảnh hưởng sinh hoạt, không biết nên thay toàn bộ hay giữ lại một phần.",
                "Mục tiêu: làm lại để ở lâu dài.",
                "Thông điệp: căn hộ ở lâu năm không nên sửa từng món rời rạc; cần khảo sát tổng thể để biết phần nào nên giữ, phần nào bắt buộc xử lý."
              ]
            },
            {
              title: "Nhóm B — Người mới mua lại căn cũ",
              subtitle: "Vừa mua lại căn hộ cũ, muốn cải tạo trước khi chuyển vào.",
              points: [
                "Nỗi đau: không thích hiện trạng chủ trước, muốn đổi công năng/phong cách, cần dự toán nhanh, sợ phát hiện lỗi bếp/WC/thấm/điện nước.",
                "Mục tiêu: chuyển vào ở với phương án rõ về công năng, chi phí và tiến độ.",
                "Thông điệp: mua lại căn hộ cũ? Đừng vội dọn vào ở. Khảo sát hiện trạng trước để lên phương án cải tạo."
              ]
            },
            {
              title: "Nhóm C — Gia đình đổi nhu cầu",
              subtitle: "Có con nhỏ, con lớn cần phòng riêng, đón bố mẹ lên ở, cần thêm bàn học, kho chứa, bếp tiện hơn.",
              points: [
                "Nỗi đau: nhà không còn hợp sinh hoạt, thiếu lưu trữ, bếp/khu giặt phơi bất tiện, có thể phải thi công khi vẫn đang ở.",
                "Mục tiêu: cải tạo lại công năng thay vì chỉ thay đồ nội thất.",
                "Thông điệp: khi nhu cầu gia đình thay đổi, căn hộ cũ cần sửa lại công năng, không chỉ thay đồ."
              ]
            },
            {
              title: "Nhóm D — Sửa để cho thuê / bán lại",
              subtitle: "Căn cũ khó cho thuê, hình ảnh xấu, đồ xuống cấp, muốn sửa để tăng giá thuê hoặc bán dễ hơn.",
              points: [
                "Nỗi đau: không muốn đầu tư quá tay, cần sửa đúng phần làm tăng giá trị căn, cần kiểm soát ngân sách và thi công nhanh.",
                "Mục tiêu: tăng sức cạnh tranh của căn, không làm quá đắt.",
                "Thông điệp: cải tạo căn hộ cũ để cho thuê không cần làm quá đắt, nhưng phải sửa đúng điểm khiến khách thuê xuống tiền."
              ]
            }
          ]
        },
        {
          heading: "3. Bộ lọc lead ngay từ đầu",
          paragraphs: [
            "Mũi cải tạo bắt buộc lọc mạnh. Không lọc thì sale sẽ chết chìm trong lead sửa nhỏ, khách hỏi giá qua ảnh và việc dưới định vị."
          ],
          table: {
            headers: ["Nhóm lead", "Tiêu chí", "Cách xử lý"],
            rows: [
              ["Nhận mạnh", "Ngân sách 200tr+, cải tạo tổng thể/sửa lớn, đụng bếp/WC/sàn/điện nước, muốn làm trong 1-3 tháng", "Sale 1 gọi ngay, mục tiêu đặt lịch khảo sát"],
              ["Nuôi", "Ngân sách 100-200tr, chưa rõ thời điểm, mới hỏi tham khảo", "Gửi checklist, bảng ngân sách, case nhỏ, đưa vào Zalo/remarketing"],
              ["Cắt sớm", "Dưới 50-80tr, chỉ thay 1 món nhỏ, chưa có căn, chỉ hỏi báo giá qua ảnh", "Không dồn nguồn lực; chuyển sang tài liệu tự đọc hoặc từ chối mềm"]
            ]
          }
        },
        {
          heading: "4. Phễu triển khai 5 tầng",
          steps: [
            {
              label: "Tầng 1",
              title: "Nhận biết vấn đề",
              points: [
                "Mục tiêu: khiến khách nhận ra căn cũ không thể sửa chắp vá.",
                "Kênh: TikTok organic, Facebook/Zalo content, video before-after, bài phân tích lỗi căn hộ cũ.",
                "Nội dung: 5 dấu hiệu căn hộ cũ nên cải tạo tổng thể; vì sao sửa bếp cũ kéo theo điện nước/tường/sàn; căn hộ ở 10 năm xuống cấp ở đâu; lỗi cải tạo phát sinh thêm 30-50tr."
              ]
            },
            {
              label: "Tầng 2",
              title: "Kích hoạt nhu cầu",
              points: [
                "Mục tiêu: kéo khách từ đang nghĩ sang muốn được tư vấn.",
                "Kênh: TikTok video có CTA, Zalo/Facebook lead form, Google Search, landing page.",
                "Nội dung: checklist khảo sát căn cũ, mẫu dự toán theo ngân sách, case before-after, gợi ý phương án cải tạo theo hiện trạng."
              ]
            },
            {
              label: "Tầng 3",
              title: "Thu lead có lọc",
              points: [
                "Mục tiêu: chỉ lấy lead đủ thông tin để sale phân loại.",
                "Kênh: Zalo Lead Form, Facebook Lead Form, Google Lead Form hoặc landing form, TikTok Lead Generation nếu video đủ tốt.",
                "Nguyên tắc: form phải hỏi ngân sách, thời điểm, tình trạng căn, mức độ sửa và hạng mục có đụng tới."
              ]
            },
            {
              label: "Tầng 4",
              title: "Sale gọi lọc và đặt lịch khảo sát",
              points: [
                "Không báo giá vội. Sale xoay quanh 4 câu: hiện trạng thế nào, sửa một phần hay tổng thể, có đụng bếp/WC/sàn/điện nước/phá dỡ không, ngân sách và thời điểm là gì.",
                "CTA chính: hẹn khảo sát hiện trạng, sau đó bóc tách phần nên giữ, nên sửa và dự toán theo ngân sách."
              ]
            },
            {
              label: "Tầng 5",
              title: "Khảo sát, tư vấn, báo giá, chốt",
              points: [
                "Mục tiêu: biến buổi khảo sát thành điểm tạo trust.",
                "Sau khảo sát phải có biên bản hiện trạng, danh sách hạng mục, phân loại bắt buộc/nên làm/có thể làm sau, dự toán sơ bộ, timeline, rủi ro phát sinh, ảnh hiện trạng có ghi chú."
              ]
            }
          ]
        },
        {
          heading: "5. Phân vai nhân sự",
          paragraphs: [
            "Nguồn lực hiện tại: 3 sale, 1 marketing tay ngang, 1 outsource ảnh/clip. Mũi cải tạo cần thêm vai trò kỹ thuật ở lead lớn vì khách hỏi nhiều về hiện trạng, điện nước, chống thấm, phá dỡ, vận chuyển và quy định tòa nhà."
          ],
          table: {
            headers: ["Nhân sự", "Vai trò chính", "Việc cụ thể"],
            rows: [
              ["Marketing", "Điều phối mũi cải tạo", "Lên content plan, set form, quản lý ads, gom insight từ sale"],
              ["Sale 1", "Lead nóng", "Gọi lead ngân sách 200tr+, đặt lịch khảo sát"],
              ["Sale 2", "Lead trung bình", "Gọi lead 100-200tr, nuôi, gửi tài liệu, hẹn lại"],
              ["Sale 3", "Chăm lại / remarketing", "Nhắn Zalo, gửi checklist, follow lead chưa chốt lịch"],
              ["Outsource ảnh/clip", "Sản xuất visual", "Dựng video before-after, ảnh checklist, carousel, banner ads"],
              ["Chủ/quản lý kỹ thuật", "Chuyên môn thi công", "Đi khảo sát lead lớn, kiểm tra báo giá, tư vấn rủi ro thi công"]
            ]
          }
        },
        {
          heading: "6. Kênh triển khai chi tiết",
          cards: [
            {
              title: "Kênh 1 — Google Search",
              subtitle: "Ưu tiên vì khách search cải tạo căn hộ thường đã có nhu cầu rõ.",
              points: [
                "Campaign: cải tạo căn hộ tổng thể, cải tạo theo hạng mục đau, mua lại căn cũ, remarketing nhẹ.",
                "Từ khóa test: cải tạo căn hộ, cải tạo chung cư cũ, sửa nhà chung cư trọn gói, cải tạo bếp chung cư, sửa WC chung cư, cải tạo căn hộ mua lại.",
                "Từ khóa phủ định: miễn phí, tự làm, giá rẻ, thợ lẻ, sửa vặt, thay bóng đèn, sửa điện nước nhỏ, tuyển dụng, học nghề, vật liệu, phụ kiện.",
                "Không đưa về trang chủ; dùng landing outline riêng cho cải tạo căn hộ trọn gói."
              ]
            },
            {
              title: "Kênh 2 — Zalo Lead Form",
              subtitle: "Dùng để lấy số điện thoại nhưng phải lọc kỹ ngân sách và mức độ sửa.",
              points: [
                "Tiêu đề form: Đăng ký khảo sát cải tạo căn hộ cũ.",
                "Mô tả: khảo sát bếp, WC, sàn, điện nước, tường/trần và tư vấn phần nên giữ, nên sửa, dự toán theo ngân sách.",
                "Test 4 góc: căn cũ xuống cấp, mua lại căn cũ, ngân sách rõ, sợ phát sinh.",
                "Không dùng form chỉ có họ tên, số điện thoại, nhu cầu tư vấn."
              ]
            },
            {
              title: "Kênh 3 — TikTok Organic",
              subtitle: "Kênh xây trust, tạo kho video cho sale và test insight trước khi đốt ads.",
              points: [
                "5 trục: lỗi căn hộ cũ, before-after, giá & ngân sách, quy trình khảo sát, rủi ro phát sinh.",
                "Lịch tối thiểu 4 video/tuần: Thứ 2 lỗi căn cũ, Thứ 4 before-after, Thứ 6 ngân sách, Chủ nhật quy trình/rủi ro/FAQ.",
                "Format: 5-8 giây hook, 10-20 giây giải thích 2-3 ý, 5 giây CTA nhẹ.",
                "CTA mẫu: nhắn 'cải tạo' để nhận checklist khảo sát."
              ]
            },
            {
              title: "Kênh 4 — Facebook Content / Group / Page",
              subtitle: "Dùng để giải thích sâu, lưu bài dài cho sale gửi khách và nuôi remarketing.",
              points: [
                "Tần suất: 2 bài phân tích lỗi/tuần, 1 case before-after/tuần, 1 album hiện trạng/tuần, 1 bài ngân sách/tuần, 1 FAQ/tuần.",
                "10 bài cần có: khảo sát trước báo giá, checklist mua lại căn cũ, ngân sách 200/300/400tr, căn ở 10 năm nên sửa gì, bếp/WC dễ phát sinh, cải tạo đang ở, cải tạo cho thuê, giữ tủ cũ hay bỏ, quy trình báo giá."
              ]
            },
            {
              title: "Kênh 5 — Remarketing",
              subtitle: "Không kỳ vọng khách thấy ads là chốt ngay; phải bám lại theo trạng thái.",
              points: [
                "Tệp: người xem video, vào landing chưa form, đã điền form chưa chốt lịch, đã nhận checklist, đã nhắn Zalo chưa khảo sát.",
                "Nội dung: case before-after, checklist, mời khảo sát, bài vì sao cần khảo sát trước báo giá, case tương tự sau khảo sát."
              ]
            }
          ]
        },
        {
          heading: "7. Form lead và mẫu ads",
          table: {
            headers: ["Câu hỏi form", "Option / kiểu trả lời"],
            rows: [
              ["Căn hộ của anh/chị ở khu/chung cư nào?", "Điền ngắn"],
              ["Diện tích căn khoảng bao nhiêu?", "1N / 2N / 3N / khác"],
              ["Tình trạng căn hiện tại?", "Đang ở / Để trống / Mới mua lại / Đang cho thuê"],
              ["Anh/chị muốn sửa mức nào?", "Một phần / Sửa nhiều hạng mục / Cải tạo tổng thể"],
              ["Có đụng đến hạng mục nào?", "Bếp / WC / Sàn / Điện nước / Trần tường / Tủ nội thất / Chưa rõ"],
              ["Ngân sách dự kiến?", "Dưới 100tr / 100-200tr / 200-400tr / Trên 400tr"],
              ["Thời điểm muốn làm?", "Trong 1 tháng / 1-3 tháng / Sau 3 tháng / Chưa rõ"]
            ]
          },
          cards: [
            { title: "Z1 — Căn cũ xuống cấp", points: ["Bếp cũ, WC cũ, sàn hỏng — khảo sát tổng thể trước khi sửa."] },
            { title: "Z2 — Mua lại căn cũ", points: ["Mua căn hộ cũ? Cải tạo lại công năng trước khi vào ở."] },
            { title: "Z3 — Ngân sách rõ", points: ["Cải tạo căn hộ theo ngân sách: phần nên giữ, phần nên sửa."] },
            { title: "Z4 — Sợ phát sinh", points: ["Đừng sửa chắp vá — bóc tách hạng mục trước khi báo giá."] }
          ]
        },
        {
          heading: "8. Bộ tài liệu bắt buộc",
          cards: [
            {
              title: "Tài liệu cho khách",
              points: [
                "Checklist khảo sát căn hộ cũ.",
                "Bảng ngân sách cải tạo tham khảo.",
                "Quy trình cải tạo 5 bước.",
                "Case before-after.",
                "FAQ cải tạo căn hộ.",
                "Bảng phân loại hạng mục: nên giữ / nên sửa / làm mới.",
                "Mẫu timeline thi công.",
                "Hồ sơ năng lực ngắn."
              ]
            },
            {
              title: "Tài liệu nội bộ sale",
              points: [
                "Script gọi lead cải tạo.",
                "Bộ câu hỏi khảo sát sơ bộ.",
                "Form chấm điểm lead.",
                "Mẫu biên bản khảo sát.",
                "Bảng objection handling.",
                "Bảng phân quyền follow.",
                "CRM pipeline."
              ]
            }
          ]
        },
        {
          heading: "9. Checklist khảo sát căn cũ",
          table: {
            headers: ["Nhóm", "Cần kiểm tra"],
            rows: [
              ["Bếp", "Tủ bếp, mặt đá, chậu vòi, thiết bị, hệ điện, cấp thoát nước"],
              ["WC", "Chống thấm, thoát sàn, thiết bị, gạch, trần, mùi, thấm sang phòng"],
              ["Sàn", "Phồng, cong, ẩm, hở mép, nền bên dưới"],
              ["Tường", "Nứt, bong sơn, ẩm mốc, thấm"],
              ["Trần", "Thấm, nứt, cao độ, hệ đèn, điều hòa"],
              ["Điện", "Ổ cắm, tải thiết bị, dây cũ, aptomat"],
              ["Nước", "Áp lực nước, rò rỉ, đường cấp/thoát"],
              ["Nội thất cũ", "Tủ có giữ được không, bản lề/ray có hỏng không"],
              ["Công năng", "Thiếu lưu trữ, thiếu bàn học/làm việc, bếp bất tiện"],
              ["Quy định tòa nhà", "Giờ thi công, vận chuyển, phá dỡ, tập kết vật liệu"]
            ]
          }
        },
        {
          heading: "10. Lead scoring cho sale",
          table: {
            headers: ["Tiêu chí", "Điểm"],
            rows: [
              ["Ngân sách trên 400tr", "+25"],
              ["Ngân sách 200-400tr", "+20"],
              ["Cải tạo tổng thể", "+25"],
              ["Có đụng bếp/WC/sàn/điện nước", "+20"],
              ["Muốn làm trong 1 tháng", "+15"],
              ["Căn đã trống/mới mua lại", "+10"],
              ["Đồng ý khảo sát", "+15"],
              ["Chỉ hỏi giá, chưa rõ nhu cầu", "-20"],
              ["Ngân sách dưới 100tr", "-30"]
            ]
          },
          cards: [
            { title: "Lead A — 70+ điểm", points: ["Sale 1 gọi ngay, cố gắng hẹn khảo sát."] },
            { title: "Lead B — 40-69 điểm", points: ["Sale 2 gọi, gửi tài liệu, hẹn tư vấn."] },
            { title: "Lead C — dưới 40 điểm", points: ["Sale 3 nuôi bằng Zalo/content."] },
            { title: "Lead loại", points: ["Dưới 100tr hoặc sửa nhỏ, không dồn nguồn lực."] }
          ]
        },
        {
          heading: "11. Script sale gọi lead",
          scripts: [
            {
              title: "Mở đầu",
              body: "Em chào anh/chị, em là [Tên] bên Nội thất Newhomes. Em thấy anh/chị có để lại thông tin về nhu cầu cải tạo căn hộ. Em xin phép hỏi nhanh vài ý để bên em xem căn mình thuộc nhóm sửa một phần hay cải tạo tổng thể, rồi tư vấn hướng làm phù hợp ngân sách ạ."
            },
            {
              title: "Câu hỏi lọc",
              body: "1. Căn của mình ở khu/chung cư nào ạ?\n2. Căn khoảng bao nhiêu m2, mấy phòng ngủ?\n3. Hiện căn đang ở, để trống hay mới mua lại?\n4. Mình muốn sửa những phần nào: bếp, WC, sàn, tường/trần, điện nước hay nội thất?\n5. Mục tiêu của mình là để ở lâu dài, cho thuê hay bán lại?\n6. Mình dự kiến ngân sách khoảng dưới 100, 100-200, 200-400 hay trên 400tr?\n7. Mình muốn triển khai trong khoảng thời gian nào?\n8. Anh/chị đã có bản vẽ/mặt bằng/ảnh hiện trạng chưa?"
            },
            {
              title: "Chuyển sang khảo sát",
              body: "Với căn cải tạo, nếu chỉ nhìn ảnh thì bên em có thể ước lượng rất sơ bộ nhưng dễ sai, nhất là phần bếp, WC, điện nước, sàn và tường. Phương án tốt hơn là bên em qua khảo sát hiện trạng, sau đó bóc tách giúp anh/chị phần nào nên giữ, phần nào nên sửa, phần nào bắt buộc phải xử lý. Như vậy báo giá sẽ sát hơn và tránh phát sinh."
            },
            {
              title: "Nếu khách hỏi khoảng bao nhiêu tiền",
              body: "Em có thể chia khung để anh/chị dễ hình dung. Nếu chỉ làm một phần thì có thể từ 100-200tr. Nếu cải tạo nhiều hạng mục như bếp, sàn, WC, trần tường, nội thất thì thường từ 200-400tr trở lên, tùy diện tích và mức vật liệu. Nhưng để báo sát thì bên em cần khảo sát hiện trạng trước."
            },
            {
              title: "Nếu khách nói gửi báo giá qua Zalo đi",
              body: "Dạ được, em có thể gửi anh/chị bảng ngân sách tham khảo trước. Nhưng báo giá cải tạo qua ảnh thường chỉ đúng phần nhìn thấy, còn phần phát sinh hay nằm ở điện nước, chống thấm, nền sàn, tường/trần. Em gửi trước checklist để anh/chị xem, sau đó mình hẹn một buổi khảo sát ngắn sẽ chắc hơn ạ."
            }
          ]
        },
        {
          heading: "12. CRM pipeline và SLA",
          table: {
            headers: ["Nhóm", "Chi tiết"],
            rows: [
              ["Trạng thái CRM", "Lead mới, đã gọi lần 1, không nghe máy, đã kết nối, không phù hợp ngân sách, cần nuôi thêm, đã gửi checklist, đã hẹn khảo sát, đã khảo sát, đã gửi phương án/báo giá, đang thương lượng, chốt, rớt"],
              ["Lead mới", "Gọi trong 5-15 phút"],
              ["Không nghe máy", "Gọi lại 3 lần trong 24h"],
              ["Có nhu cầu nhưng bận", "Nhắn Zalo ngay sau cuộc gọi"],
              ["Lead A", "Phải có lịch khảo sát hoặc lịch gọi sâu"],
              ["Sau khảo sát", "Gửi recap trong 24h"],
              ["Sau báo giá", "Follow trong 24-48h"]
            ]
          }
        },
        {
          heading: "13. Timeline triển khai 45 ngày",
          steps: [
            {
              label: "Ngày 1-7",
              title: "Chuẩn bị nền",
              points: ["Mục tiêu: có đủ tài liệu, form, landing tối thiểu, script và checklist."],
              table: {
                headers: ["Việc", "Người làm", "Output"],
                rows: [
                  ["Chốt định vị mũi cải tạo", "Chủ + Marketing", "1 trang định vị"],
                  ["Chia 4 tệp khách chính", "Marketing", "File chân dung khách"],
                  ["Soạn checklist khảo sát căn cũ", "Marketing + kỹ thuật", "PDF/checklist"],
                  ["Soạn script sale", "Marketing + Sale", "Script gọi lead"],
                  ["Làm form lead có lọc ngân sách", "Marketing", "Zalo/Facebook/landing form"],
                  ["Làm bảng lead scoring", "Marketing + Sale lead", "Sheet chấm điểm"],
                  ["Viết landing page cải tạo", "Marketing", "Nội dung landing"],
                  ["Thiết kế 4 ảnh ads", "Outsource", "4 banner"],
                  ["Dựng 4 video TikTok đầu", "Outsource + Marketing", "4 video"],
                  ["Training sale", "Chủ + Marketing", "Sale hiểu script, phân loại lead"]
                ]
              }
            },
            {
              label: "Ngày 8-14",
              title: "Test nhẹ",
              points: [
                "Chạy Google Search nhỏ 200-300k/ngày.",
                "Chạy Zalo Form nhỏ 200-300k/ngày.",
                "Đăng TikTok 4 video/tuần và Facebook 3-5 bài/tuần.",
                "Sale gọi trong 15 phút và ghi lý do lead rớt.",
                "Đọc tỷ lệ nghe máy, lead 200tr+, có căn thật, hẹn khảo sát, lý do từ chối, mẫu kéo lead sửa nhỏ."
              ]
            },
            {
              label: "Ngày 15-30",
              title: "Tối ưu",
              points: [
                "Cắt ad kéo lead dưới 100tr nhiều.",
                "Tăng câu hỏi ngân sách, bắt buộc chọn ngân sách.",
                "Tách campaign theo tệp tốt: mới mua lại căn cũ, ở lâu năm, sửa tổng thể.",
                "Làm thêm video theo câu hỏi thật của khách.",
                "Tăng remarketing và chuẩn hóa recap sau khảo sát trong 24h."
              ],
              output: "10-15 video TikTok, 10 bài Facebook, 1 landing page, 1 checklist PDF, 1 bảng ngân sách, 1 script sale, 1 bảng lead scoring, 2-3 case before-after, dữ liệu biết góc ads nào ra lead tốt."
            },
            {
              label: "Ngày 31-45",
              title: "Scale có kiểm soát",
              points: ["Không scale nếu chỉ thấy CPL rẻ nhưng toàn lead sửa nhỏ."],
              table: {
                headers: ["Điều kiện scale", "Hành động"],
                rows: [
                  ["Có lead 200tr+ ổn", "Tăng ngân sách 20-30%"],
                  ["Có lịch khảo sát đều", "Tăng Google/Zalo"],
                  ["TikTok có video giữ chân tốt", "Chạy Spark/boost nhẹ"],
                  ["Landing có form tốt", "Đẩy traffic về landing"],
                  ["Sale quá tải", "Giảm lead form, tăng lọc"]
                ]
              }
            }
          ]
        },
        {
          heading: "14. Phân bổ ngân sách",
          table: {
            headers: ["Phương án", "Kênh", "Ngân sách", "Mục tiêu"],
            rows: [
              ["10tr/tháng", "Google Search", "4tr", "Bắt nhu cầu chủ động"],
              ["10tr/tháng", "Zalo Lead Form", "3tr", "Test lead có lọc"],
              ["10tr/tháng", "Remarketing", "1tr", "Bám lại"],
              ["10tr/tháng", "Sản xuất ảnh/video", "2tr", "Tạo content nền"],
              ["20tr/tháng", "Google Search", "7tr", "Kênh chính"],
              ["20tr/tháng", "Zalo Lead Form", "5tr", "Test nhiều thông điệp"],
              ["20tr/tháng", "Facebook/Zalo remarketing", "2tr", "Nuôi lại"],
              ["20tr/tháng", "TikTok boost/Spark nhẹ", "2tr", "Đẩy video tốt"],
              ["20tr/tháng", "Sản xuất ảnh/video", "4tr", "Duy trì content"]
            ]
          },
          points: ["Không chia quá nhiều campaign.", "Hai tuần đầu chỉ test 2-3 góc thông điệp, không mở ồ ạt."]
        },
        {
          heading: "15. Asset tháng đầu",
          cards: [
            {
              title: "4 banner ads đầu tiên",
              points: [
                "Căn hộ cũ xuống cấp? Khảo sát tổng thể trước khi sửa. CTA: Đăng ký khảo sát.",
                "Mới mua lại căn hộ cũ? Cải tạo lại trước khi vào ở. CTA: Nhận tư vấn phương án.",
                "Đừng sửa từng món rời rạc. Bóc tách phần nên giữ / nên sửa / bắt buộc xử lý. CTA: Nhận checklist cải tạo.",
                "Cải tạo căn hộ theo ngân sách từ 200tr+. CTA: Đặt lịch khảo sát."
              ]
            },
            {
              title: "8 video TikTok đầu tiên",
              points: [
                "Căn hộ cũ không nên sửa hỏng đâu vá đó.",
                "Mua lại căn hộ cũ cần kiểm tra 7 điểm này.",
                "200tr cải tạo căn hộ làm được gì?",
                "Vì sao sửa WC chung cư dễ phát sinh?",
                "Cải tạo bếp cũ đừng chỉ thay cánh tủ.",
                "Căn hộ ở 10 năm thường xuống cấp ở đâu?",
                "Cải tạo để cho thuê khác gì để ở?",
                "Một buổi khảo sát cải tạo gồm những gì?"
              ]
            },
            {
              title: "Landing page outline",
              points: [
                "Hero: Cải tạo căn hộ cũ trọn gói — khảo sát hiện trạng trước khi báo giá.",
                "Căn thuộc nhóm nào, vì sao không báo giá qua ảnh, khảo sát những gì, quy trình 5 bước, ngân sách tham khảo, form đăng ký khảo sát."
              ]
            }
          ]
        },
        {
          heading: "16. Vận hành hằng ngày và hằng tuần",
          cards: [
            { title: "Mỗi sáng", points: ["Marketing check lead hôm trước, CPL, ngân sách lead, mẫu ads kéo rác, gửi lead cho sale.", "Sale gọi lại lead chưa nghe máy, cập nhật CRM, báo câu hỏi/lý do từ chối."] },
            { title: "Mỗi chiều", points: ["Họp nhanh 15 phút: bao nhiêu lead, nghe máy, 200tr+, lịch khảo sát, khách hỏi gì nhiều, có cần sửa ads/form/script không."] },
            { title: "Mỗi tuần", points: ["Họp 60 phút: xem từng kênh, từng thông điệp, chất lượng lead, cắt mẫu kém, chọn 3 insight làm content tuần sau, update script sale."] }
          ]
        },
        {
          heading: "17. KPI cần theo dõi",
          table: {
            headers: ["Nhóm KPI", "Chỉ số", "Mục tiêu ban đầu"],
            rows: [
              ["Marketing", "CPL Zalo/Form", "Không cố rẻ, chấp nhận cao nếu lead tốt"],
              ["Marketing", "Tỷ lệ lead ngân sách 200tr+", "Tối thiểu 25-35%"],
              ["Marketing", "Tỷ lệ lead có thời điểm 1-3 tháng", "Tối thiểu 30%"],
              ["Marketing", "Tỷ lệ form đủ thông tin", "Trên 80%"],
              ["Marketing", "Video TikTok/tháng", "16-20 video"],
              ["Marketing", "Bài Facebook/tháng", "12-16 bài"],
              ["Sale", "Gọi lead mới", "Trong 15 phút"],
              ["Sale", "Tỷ lệ kết nối", "50-70%"],
              ["Sale", "Tỷ lệ hẹn khảo sát/lead tốt", "20-35%"],
              ["Sale", "Tỷ lệ khảo sát xong có báo giá", "80%+"],
              ["Sale", "Tỷ lệ báo giá sang chốt", "Theo dõi sau 30-60 ngày"]
            ]
          },
          points: [
            "KPI thật sự quan trọng không phải CPL.",
            "Cần nhìn chi phí / lịch khảo sát chất lượng, chi phí / báo giá gửi ra, chi phí / đơn chốt."
          ]
        },
        {
          heading: "18. Những lỗi cần tránh",
          cards: [
            { title: "Chạy ads chung chung", points: ["Không dùng kiểu: thiết kế thi công nội thất trọn gói, giá tốt, uy tín. Câu này quá rộng và không đánh đúng nỗi đau cải tạo."] },
            { title: "Form quá dễ", points: ["Form càng dễ CPL càng có thể rẻ, nhưng sale sẽ mệt hơn. Mũi này cần lead ít nhưng rõ."] },
            { title: "Báo giá qua ảnh quá sớm", points: ["Dễ sai hiện trạng, sai phạm vi công việc, bị so giá và phát sinh sau này."] },
            { title: "Nhận cả sửa nhỏ", points: ["Nếu nhận cả sửa nhỏ, định vị tụt xuống đội sửa vặt, sale mất thời gian, biên lợi nhuận thấp."] },
            { title: "Chỉ dùng render đẹp", points: ["Cải tạo cần before-after, ảnh hiện trạng, checklist, quy trình. Render đẹp không đủ tạo trust."] }
          ]
        },
        {
          heading: "19. Kế hoạch 7 ngày tới",
          steps: [
            { label: "Ngày 1", title: "Chốt định vị và 4 nhóm khách", points: ["Định vị: cải tạo căn hộ trọn gói — khảo sát hiện trạng trước khi báo giá.", "Nhóm khách: căn ở lâu năm, mới mua lại căn cũ, gia đình đổi nhu cầu, sửa để cho thuê/bán lại."] },
            { label: "Ngày 2", title: "Làm 3 tài liệu nền", points: ["Checklist khảo sát căn hộ cũ.", "Bảng ngân sách cải tạo tham khảo.", "Script sale gọi lead."] },
            { label: "Ngày 3", title: "Set form lead", points: ["Zalo form, Facebook form nếu chạy, landing form.", "Bắt buộc có câu hỏi ngân sách và thời điểm triển khai."] },
            { label: "Ngày 4", title: "Viết landing page", points: ["Chưa cần quá đẹp, nhưng phải đủ vấn đề, quy trình, checklist, ngân sách, form."] },
            { label: "Ngày 5", title: "Làm 4 ảnh ads", points: ["Căn cũ xuống cấp.", "Mua lại căn cũ.", "Đừng sửa chắp vá.", "Cải tạo theo ngân sách."] },
            { label: "Ngày 6", title: "Dựng 4 video đầu", points: ["Vì sao không báo giá cải tạo qua ảnh.", "Căn hộ cũ cần kiểm tra 7 điểm.", "200tr cải tạo được gì.", "Sửa WC chung cư dễ phát sinh ở đâu."] },
            { label: "Ngày 7", title: "Training sale", points: ["Cách lọc lead.", "Cách không báo giá vội.", "Cách chuyển sang khảo sát.", "Cách chấm điểm lead.", "Cách cập nhật CRM."] }
          ]
        },
        {
          heading: "20. Bản vận hành rút gọn",
          paragraphs: [
            "Content tạo trust → Ads lấy lead có lọc → Sale đặt lịch khảo sát → Khảo sát tạo niềm tin → Báo giá theo hạng mục → Follow bằng case tương tự."
          ],
          points: [
            "Trong tháng đầu, đừng cố scale.",
            "Chứng minh góc thông điệp nào ra lead tốt, form nào lọc được ngân sách 200tr+, sale nào đặt lịch khảo sát tốt, loại khách nào dễ chốt nhất và nội dung nào khách phản hồi nhiều nhất."
          ]
        }
      ],
      checklist: [
        "Chốt định vị: cải tạo căn hộ trọn gói, khảo sát hiện trạng trước khi báo giá.",
        "Tạo checklist khảo sát, bảng ngân sách tham khảo và script sale.",
        "Set form lọc ngân sách, thời điểm, mức độ sửa và hạng mục đụng tới.",
        "Chuẩn bị landing outline cho cải tạo căn hộ trọn gói.",
        "Sản xuất 4 banner và 4 video đầu tiên.",
        "Training sale cách lọc lead, không báo giá vội và chuyển sang khảo sát.",
        "Bắt đầu test Google/Zalo nhỏ, đọc chất lượng lead thay vì chỉ đọc CPL."
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
            <div className={active.detailed ? "grid gap-4" : "grid gap-4 lg:grid-cols-2"}>
              {active.sections.map((section) => (
                <div key={section.heading} className="rounded-3xl border border-white/70 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold">{section.heading}</h3>
                  <SectionContent section={section} />
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
