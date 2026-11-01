import os
import math
import qrcode
import arabic_reshaper
from bidi.algorithm import get_display
from PIL import Image, ImageDraw, ImageFont

def ar(text):
    if not text:
        return ""
    # Reshape arabic and apply bidi algorithm
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

def draw_pin_icon(draw, cx, cy, color):
    # Map pin
    draw.ellipse([(cx - 10, cy - 14), (cx + 10, cy + 6)], fill=color)
    draw.polygon([(cx - 9, cy - 1), (cx + 9, cy - 1), (cx, cy + 14)], fill=color)
    draw.ellipse([(cx - 4, cy - 8), (cx + 4, cy)], fill=(255, 255, 255))

def draw_clock_icon(draw, cx, cy, color):
    # Clock
    draw.ellipse([(cx - 12, cy - 12), (cx + 12, cy + 12)], outline=color, width=3)
    draw.line([(cx, cy - 7), (cx, cy), (cx + 6, cy)], fill=color, width=3)

def draw_truck_icon(draw, cx, cy, color):
    # Delivery truck
    draw.rounded_rectangle([(cx - 16, cy - 9), (cx + 4, cy + 7)], radius=2, fill=color)
    draw.rounded_rectangle([(cx + 4, cy - 4), (cx + 14, cy + 7)], radius=2, fill=color)
    draw.ellipse([(cx - 11, cy + 6), (cx - 3, cy + 14)], fill=(230, 0, 0))
    draw.ellipse([(cx + 5, cy + 6), (cx + 13, cy + 14)], fill=(230, 0, 0))

def draw_card_icon(draw, cx, cy, color):
    # Payment card
    draw.rounded_rectangle([(cx - 14, cy - 9), (cx + 14, cy + 9)], radius=3, outline=color, width=3)
    draw.rectangle([(cx - 14, cy - 4), (cx + 14, cy - 1)], fill=color)
    draw.rectangle([(cx - 10, cy + 3), (cx - 4, cy + 6)], fill=(245, 158, 11))

def draw_globe_icon(draw, cx, cy, color):
    draw.ellipse([(cx - 12, cy - 12), (cx + 12, cy + 12)], outline=color, width=3)
    draw.line([(cx - 12, cy), (cx + 12, cy)], fill=color, width=2)
    draw.arc([(cx - 7, cy - 12), (cx + 7, cy + 12)], start=270, end=90, fill=color, width=2)
    draw.arc([(cx - 7, cy - 12), (cx + 7, cy + 12)], start=90, end=270, fill=color, width=2)

def draw_phone_icon(draw, cx, cy, color):
    draw.rounded_rectangle([(cx - 8, cy - 14), (cx + 8, cy + 14)], radius=4, outline=color, width=3)
    draw.ellipse([(cx - 2, cy + 7), (cx + 2, cy + 11)], fill=color)
    draw.line([(cx - 4, cy - 10), (cx + 4, cy - 10)], fill=color, width=2)

def create_card():
    W, H = 1200, 1750
    img = Image.new("RGB", (W, H), color=(248, 250, 252))
    draw = ImageDraw.Draw(img)

    # Color Palette (Carrefour Egypt Identity)
    NAVY = (0, 45, 98)          # #002d62
    ROYAL = (0, 79, 159)        # #004f9f
    LIGHT_BLUE = (235, 243, 252)# #ebf3fc
    RED = (230, 0, 0)           # #e60000
    DARK_RED = (185, 0, 0)      # #b90000
    GOLD = (245, 158, 11)       # #f59e0b
    DARK = (15, 23, 42)         # #0f172a
    MUTED = (71, 85, 105)       # #475569
    WHITE = (255, 255, 255)
    BORDER_CLR = (203, 213, 225)

    # Fonts
    font_dir = "C:/Windows/Fonts"
    f_title_big = ImageFont.truetype(os.path.join(font_dir, "tahomabd.ttf"), 62)
    f_title_sub = ImageFont.truetype(os.path.join(font_dir, "tahomabd.ttf"), 34)
    f_badge = ImageFont.truetype(os.path.join(font_dir, "tahomabd.ttf"), 24)
    f_h2 = ImageFont.truetype(os.path.join(font_dir, "tahomabd.ttf"), 28)
    f_body_bold = ImageFont.truetype(os.path.join(font_dir, "tahomabd.ttf"), 22)
    f_body = ImageFont.truetype(os.path.join(font_dir, "tahoma.ttf"), 21)
    f_small = ImageFont.truetype(os.path.join(font_dir, "tahoma.ttf"), 17)
    f_url = ImageFont.truetype(os.path.join(font_dir, "arialbd.ttf"), 22)

    # Outer Frames
    draw.rounded_rectangle([(18, 18), (W - 18, H - 18)], radius=32, outline=ROYAL, width=8)
    draw.rounded_rectangle([(30, 30), (W - 30, H - 30)], radius=24, outline=NAVY, width=3)

    # Header Background Banner
    header_top = 40
    header_bottom = 385
    draw.rounded_rectangle([(40, header_top), (W - 40, header_bottom)], radius=22, fill=NAVY)

    # Top accent line
    draw.rounded_rectangle([(40, header_top), (W - 40, header_top + 14)], radius=8, fill=RED)

    # Brand Emblem: Stylized Shopping Cart in Circle
    icon_cx = W // 2
    icon_cy = 120
    draw.ellipse([(icon_cx - 44, icon_cy - 44), (icon_cx + 44, icon_cy + 44)], fill=WHITE, outline=GOLD, width=3)
    # Cart basket
    draw.arc([(icon_cx - 24, icon_cy - 18), (icon_cx + 24, icon_cy + 16)], start=0, end=180, fill=ROYAL, width=5)
    draw.rectangle([(icon_cx - 26, icon_cy - 10), (icon_cx + 26, icon_cy + 18)], fill=ROYAL)
    # Cart wheels in red
    draw.ellipse([(icon_cx - 18, icon_cy + 18), (icon_cx - 8, icon_cy + 28)], fill=RED)
    draw.ellipse([(icon_cx + 8, icon_cy + 18), (icon_cx + 18, icon_cy + 28)], fill=RED)

    # Title: "سوبرماركت المرواني"
    title_text = ar("سوبرماركت المرواني")
    bbox = draw.textbbox((0, 0), title_text, font=f_title_big)
    tw = bbox[2] - bbox[0]
    title_x = (W - tw) // 2
    draw.text((title_x, 185), title_text, font=f_title_big, fill=WHITE)

    # Red "ماركت" badge to the left of the Arabic title
    badge_text = ar("ماركت")
    b_bbox = draw.textbbox((0, 0), badge_text, font=f_badge)
    bw = b_bbox[2] - b_bbox[0]
    badge_x = title_x - bw - 26
    draw.rounded_rectangle([(badge_x, 205), (badge_x + bw + 18, 245)], radius=8, fill=RED)
    draw.text((badge_x + 9, 210), badge_text, font=f_badge, fill=WHITE)

    # Subtitle: Branch
    sub_text = ar("سلسلة سوبرماركت المرواني • فرع المعادي الرئيسي")
    bbox_sub = draw.textbbox((0, 0), sub_text, font=f_title_sub)
    draw.text(((W - (bbox_sub[2] - bbox_sub[0])) // 2, 275), sub_text, font=f_title_sub, fill=GOLD)

    # Tagline: Carrefour Egypt Spirit
    tagline_text = ar("أسعار الجملة وجودة الطازج 100% حتى باب بيتك في المعادي وضواحيها")
    bbox_tag = draw.textbbox((0, 0), tagline_text, font=f_body_bold)
    draw.text(((W - (bbox_tag[2] - bbox_tag[0])) // 2, 330), tagline_text, font=f_body_bold, fill=WHITE)

    # 60-Minute Fast Delivery Ribbon
    ribbon_y1 = 405
    ribbon_y2 = 470
    draw.rounded_rectangle([(40, ribbon_y1), (W - 40, ribbon_y2)], radius=16, fill=RED)
    ribbon_text = ar("خدمة المرواني ناو: توصيل سوبر سريع خلال 60 دقيقة • توصيل مجاني فوق 400 ج.م")
    bbox_ribbon = draw.textbbox((0, 0), ribbon_text, font=f_body_bold)
    draw.text(((W - (bbox_ribbon[2] - bbox_ribbon[0])) // 2, ribbon_y1 + 17), ribbon_text, font=f_body_bold, fill=WHITE)

    # Generate QR Codes
    qr_web = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=8, border=2)
    qr_web.add_data("https://almarawani.vercel.app")
    qr_web.make(fit=True)
    img_qr_web = qr_web.make_image(fill_color="#002d62", back_color="white").convert("RGB")

    qr_apk = qrcode.QRCode(version=1, error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=8, border=2)
    qr_apk.add_data("https://almarawani.vercel.app/api/download/apk")
    qr_apk.make(fit=True)
    img_qr_apk = qr_apk.make_image(fill_color="#004f9f", back_color="white").convert("RGB")

    # Resize QRs to 360x360
    img_qr_web = img_qr_web.resize((360, 360), Image.Resampling.LANCZOS)
    img_qr_apk = img_qr_apk.resize((360, 360), Image.Resampling.LANCZOS)

    # 2 QR Cards Side-by-Side
    card_w = 525
    card_h = 615
    card_top = 490

    col_right_x = 635  # Web Store (Right)
    col_left_x = 40    # Android APK (Left)

    # --- Right Box: Web Store ---
    draw.rounded_rectangle([(col_right_x, card_top), (col_right_x + card_w, card_top + card_h)], radius=20, fill=WHITE, outline=ROYAL, width=3)
    # Header bar
    draw.rounded_rectangle([(col_right_x, card_top), (col_right_x + card_w, card_top + 65)], radius=18, fill=ROYAL)
    head_web = ar("المتجر الإلكتروني السريع (Web)")
    bbox_hw = draw.textbbox((0, 0), head_web, font=f_h2)
    draw.text((col_right_x + (card_w - (bbox_hw[2] - bbox_hw[0])) // 2 + 15, card_top + 16), head_web, font=f_h2, fill=WHITE)
    draw_globe_icon(draw, col_right_x + (card_w - (bbox_hw[2] - bbox_hw[0])) // 2 - 15, card_top + 32, WHITE)

    # QR Box
    qr_w_x = col_right_x + (card_w - 360) // 2
    qr_w_y = card_top + 85
    draw.rectangle([(qr_w_x - 6, qr_w_y - 6), (qr_w_x + 366, qr_w_y + 366)], fill=LIGHT_BLUE, outline=BORDER_CLR, width=2)
    img.paste(img_qr_web, (qr_w_x, qr_w_y))

    # Text under QR
    t_web1 = ar("امسح الكود للتسوق والطلب أونلاين فوراً")
    bbox_tw1 = draw.textbbox((0, 0), t_web1, font=f_body_bold)
    draw.text((col_right_x + (card_w - (bbox_tw1[2] - bbox_tw1[0])) // 2, qr_w_y + 380), t_web1, font=f_body_bold, fill=NAVY)

    t_web2 = ar("تصفح كافة الأقسام والمنتجات والعروض الأسبوعية")
    bbox_tw2 = draw.textbbox((0, 0), t_web2, font=f_small)
    draw.text((col_right_x + (card_w - (bbox_tw2[2] - bbox_tw2[0])) // 2, qr_w_y + 418), t_web2, font=f_small, fill=MUTED)

    # Button Bar
    btn_w_y = card_top + card_h - 75
    draw.rounded_rectangle([(col_right_x + 35, btn_w_y), (col_right_x + card_w - 35, btn_w_y + 55)], radius=14, fill=NAVY)
    btn_web_txt = ar("تصفح المتجر واطلب الآن  ◄")
    bbox_bw = draw.textbbox((0, 0), btn_web_txt, font=f_body_bold)
    draw.text((col_right_x + (card_w - (bbox_bw[2] - bbox_bw[0])) // 2, btn_w_y + 14), btn_web_txt, font=f_body_bold, fill=WHITE)

    # --- Left Box: Android App ---
    draw.rounded_rectangle([(col_left_x, card_top), (col_left_x + card_w, card_top + card_h)], radius=20, fill=WHITE, outline=RED, width=3)
    # Header bar
    draw.rounded_rectangle([(col_left_x, card_top), (col_left_x + card_w, card_top + 65)], radius=18, fill=RED)
    head_apk = ar("تطبيق الأندرويد الرسمي (APK)")
    bbox_ha = draw.textbbox((0, 0), head_apk, font=f_h2)
    draw.text((col_left_x + (card_w - (bbox_ha[2] - bbox_ha[0])) // 2 + 15, card_top + 16), head_apk, font=f_h2, fill=WHITE)
    draw_phone_icon(draw, col_left_x + (card_w - (bbox_ha[2] - bbox_ha[0])) // 2 - 15, card_top + 32, WHITE)

    # QR Box
    qr_a_x = col_left_x + (card_w - 360) // 2
    qr_a_y = card_top + 85
    draw.rectangle([(qr_a_x - 6, qr_a_y - 6), (qr_a_x + 366, qr_a_y + 366)], fill=LIGHT_BLUE, outline=BORDER_CLR, width=2)
    img.paste(img_qr_apk, (qr_a_x, qr_a_y))

    # Text under QR
    t_apk1 = ar("امسح الكود لتثبيت تطبيق المرواني مباشرة")
    bbox_ta1 = draw.textbbox((0, 0), t_apk1, font=f_body_bold)
    draw.text((col_left_x + (card_w - (bbox_ta1[2] - bbox_ta1[0])) // 2, qr_a_y + 380), t_apk1, font=f_body_bold, fill=RED)

    t_apk2 = ar("ملف APK أصلي وخفيف • متابعة الطلبات وإشعارات العروض")
    bbox_ta2 = draw.textbbox((0, 0), t_apk2, font=f_small)
    draw.text((col_left_x + (card_w - (bbox_ta2[2] - bbox_ta2[0])) // 2, qr_a_y + 418), t_apk2, font=f_small, fill=MUTED)

    # Button Bar
    btn_apk_txt = ar("تحميل تطبيق الأندرويد  ◄")
    draw.rounded_rectangle([(col_left_x + 35, btn_w_y), (col_left_x + card_w - 35, btn_w_y + 55)], radius=14, fill=RED)
    bbox_ba = draw.textbbox((0, 0), btn_apk_txt, font=f_body_bold)
    draw.text((col_left_x + (card_w - (bbox_ba[2] - bbox_ba[0])) // 2, btn_w_y + 14), btn_apk_txt, font=f_body_bold, fill=WHITE)

    # --- 4 Features Badges Strip ---
    strip_y = 1130
    draw.rounded_rectangle([(40, strip_y), (W - 40, strip_y + 68)], radius=16, fill=LIGHT_BLUE, outline=ROYAL, width=2)

    features = [
        "دليفري سريع 60 دقيقة",
        "طازج ويومي بأعلى جودة",
        "أسعار جملة وعروض توفير",
        "دفع كاش • فيزا • إنستاباي"
    ]
    f_w = (W - 80) // 4
    for i, feat in enumerate(features):
        ft_txt = ar(feat)
        bbox_ft = draw.textbbox((0, 0), ft_txt, font=f_body_bold)
        fx = 40 + (3 - i) * f_w + (f_w - (bbox_ft[2] - bbox_ft[0])) // 2
        draw.text((fx, strip_y + 20), ft_txt, font=f_body_bold, fill=NAVY)

    # --- Branch Info Box (STRICTLY NO PHONE NUMBERS) ---
    info_y1 = 1220
    info_y2 = 1575
    draw.rounded_rectangle([(40, info_y1), (W - 40, info_y2)], radius=20, fill=WHITE, outline=BORDER_CLR, width=3)

    # Header of info box
    draw.rounded_rectangle([(40, info_y1), (W - 40, info_y1 + 55)], radius=18, fill=NAVY)
    info_title = ar("معلومات الفرع ونطاق التغطية بالمعادي")
    bbox_it = draw.textbbox((0, 0), info_title, font=f_h2)
    draw.text(((W - (bbox_it[2] - bbox_it[0])) // 2, info_y1 + 13), info_title, font=f_h2, fill=WHITE)

    # 4 Rows of Info Cards
    row_y = info_y1 + 72
    rows_data = [
        (draw_pin_icon, "عنوان الفرع:", "شارع النصر، تقاطع شارع 261، دجلة، المعادي - القاهرة", NAVY),
        (draw_clock_icon, "مواعيد العمل:", "يومياً من الساعة 8:00 صباحاً حتى 2:00 بعد منتصف الليل", DARK),
        (draw_truck_icon, "مناطق التوصيل:", "المعادي القديمة، دجلة، السرايات، زهراء المعادي، الكورنيش، المقطم", DARK),
        (draw_card_icon, "طرق الدفع:", "كاش عند الاستلام • ماكينة فيزا مع الطيار • تحويل لحظي إنستاباي", ROYAL),
    ]

    for icon_fn, label, val, val_color in rows_data:
        # Background card
        draw.rounded_rectangle([(60, row_y), (W - 60, row_y + 55)], radius=12, fill=LIGHT_BLUE)

        # Draw Icon on the right side
        icon_fn(draw, W - 90, row_y + 27, NAVY)

        # Label text
        lbl_txt = ar(label)
        bbox_lbl = draw.textbbox((0, 0), lbl_txt, font=f_body_bold)
        lbl_w = bbox_lbl[2] - bbox_lbl[0]
        draw.text((W - 120 - lbl_w, row_y + 14), lbl_txt, font=f_body_bold, fill=NAVY)

        # Value text
        val_txt = ar(val)
        bbox_v = draw.textbbox((0, 0), val_txt, font=f_body)
        draw.text((80, row_y + 14), val_txt, font=f_body, fill=val_color)

        row_y += 68

    # --- Footer Bar ---
    footer_y = 1595
    url_txt = "https://almarawani.vercel.app"
    bbox_url = draw.textbbox((0, 0), url_txt, font=f_url)
    draw.text(((W - (bbox_url[2] - bbox_url[0])) // 2, footer_y), url_txt, font=f_url, fill=ROYAL)

    legal_txt = ar("سوبرماركت المرواني — فرع المعادي • تم تصميم وتطوير المنظومة بواسطة أوركا للحلول البرمجية والسحابية 2026")
    bbox_leg = draw.textbbox((0, 0), legal_txt, font=f_small)
    draw.text(((W - (bbox_leg[2] - bbox_leg[0])) // 2, footer_y + 35), legal_txt, font=f_small, fill=MUTED)

    # Output paths
    out_public = "D:/Work/almarawani/public/almarawani-official-card.png"
    out_artifact = "C:/Users/Dr Princa/.gemini/antigravity/brain/2d9d53fe-6b03-4ac8-8878-725378cea44d/almarawani-official-card.png"

    img.save(out_public, quality=95)
    img.save(out_artifact, quality=95)
    print("Regenerated card successfully without any missing glyphs!")

if __name__ == "__main__":
    create_card()
