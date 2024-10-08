import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text || text.trim() === '') throw `*فين النص*`;

  try {
    m.react('❄');
    var apii = await fetch(`https://aemt.me/bard?text=${text}`);
    
    if (!apii.ok) throw `*فشل في الاتصال بواجهة API*`;

    var res = await apii.json();
    
    if (!res || !res.result) throw `*لم يتم العثور على نتيجة*`;

    await conn.sendFile(m.chat, 'https://telegra.ph/file/f4f9d2420ac2b1072eb2e.jpg', 'image.png', res.result, m);

  } catch (error) {
    console.error(error);
    throw '*ايرور*';
  }
};

handler.command = ['بارد'];
handler.help = ['bard'];
handler.tags = ['herramientas'];
handler.premium = false;

export default handler;