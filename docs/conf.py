import os
import sys
sys.path.insert(0, os.path.abspath('..'))

project = 'TechShop'
author = 'Rafael Sedor'
release = '0.1'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode',
]

templates_path = ['_templates']
exclude_patterns = []

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
