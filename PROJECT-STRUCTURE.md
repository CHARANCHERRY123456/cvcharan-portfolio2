# Portfolio Project Structure

## Overview
This portfolio has been reorganized into a modular structure where each section is separated into its own folder and file. This makes the codebase more maintainable and easier to manage.

## Project Structure
```
cvcharan-portfolio2/
├── index.html (original file - backup)
├── index-new.html (new modular version)
├── js/
│   └── section-loader.js (loads sections dynamically)
├── sections/
│   ├── header/
│   │   └── header.html
│   ├── home/
│   │   └── home.html
│   ├── about/
│   │   └── about.html
│   ├── skills/
│   │   ├── skills.html
│   │   └── skills.css
│   ├── qualification/
│   │   └── qualification.html
│   ├── achievements/
│   │   └── achievements.html
│   ├── certificates/
│   │   └── certificates.html
│   ├── portfolio/
│   │   └── portfolio.html
│   ├── contact/
│   │   └── contact.html
│   └── footer/
│       └── footer.html
├── packages/ (existing assets)
├── certificates/ (existing certificates)
└── other files...
```

## How to Use

1. **Main File**: Use `index-new.html` as your main file
2. **Section Management**: Each section is now in its own folder under `/sections/`
3. **Adding New Sections**: 
   - Create a new folder in `/sections/`
   - Add the HTML file
   - Update `section-loader.js` to include the new section
4. **Editing Sections**: Edit individual section files instead of the main HTML

## Benefits

- **Modularity**: Each section is independent
- **Maintainability**: Easy to find and edit specific sections
- **Scalability**: Easy to add new sections
- **Collaboration**: Multiple developers can work on different sections
- **Reusability**: Sections can be reused in other projects

## Migration Steps

1. Rename `index.html` to `index-backup.html`
2. Rename `index-new.html` to `index.html`
3. Test all sections load correctly
4. Update any deployment scripts if needed
