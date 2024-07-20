from .base import *

if environ.get('DEBUG') == 'True':
    from .development import *
else:
    from .production import *