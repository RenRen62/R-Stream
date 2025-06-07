from pdf2image import convert_from_path
import os
import glob

# ====== 設定 ======
script_dir = os.path.dirname(os.path.abspath(__file__))
pdf_files = glob.glob(os.path.join(script_dir, "*.pdf"))

# 出力先はスクリプトフォルダ内の output_images フォルダ一択
output_dir = os.path.join(script_dir, "png_images")

dpi = 300
poppler_path = r"C:\tools\poppler-24.08.0\Library\bin"

def convert_pdf_to_png(pdf_path, output_dir, dpi=300, poppler_path=None):
    if not os.path.exists(pdf_path):
        raise FileNotFoundError(f"PDFファイルが見つかりません: {pdf_path}")

    os.makedirs(output_dir, exist_ok=True)
    print(f"📄 PDF読み込み中: {pdf_path}")

    images = convert_from_path(pdf_path, dpi=dpi, poppler_path=poppler_path)

    pdf_base_name = os.path.splitext(os.path.basename(pdf_path))[0]
    for i, image in enumerate(images):
        # PDF名をファイル名に含めて連番付けする
        output_path = os.path.join(output_dir, f"{pdf_base_name}_png{i+1}.png")
        image.save(output_path, "PNG")
        print(f"✅ 保存完了: {output_path}")

    print("🎉 全ページ変換完了ワン！\n")

if __name__ == "__main__":
    if not pdf_files:
        print("⚠️ PDFファイルが見つかりませんでした。")
    else:
        for pdf_file in pdf_files:
            convert_pdf_to_png(pdf_file, output_dir, dpi=dpi, poppler_path=poppler_path)
