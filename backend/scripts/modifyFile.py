from PyPDF2 import PdfReader, PdfWriter
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
import sys

input_pdf = sys.argv[1]
output_pdf = sys.argv[1]

# Read the PDF and extract text
pdf = PdfReader(input_pdf)
text = ""
for page in pdf.pages:
    text += page.extract_text()

# Split text into words and bold the first 3 characters
modified_text = ""
for word in text.split():
    if word.strip():
        modified_text += "<b>{}</b>{} ".format(word[:3], word[3:])

# Create a new PDF with modified text
doc = SimpleDocTemplate(output_pdf, pagesize=letter)
styles = getSampleStyleSheet()
story = [Paragraph(modified_text, styles["Normal"])]
doc.build(story)
