module.exports = {
  handlers: {
    sectionIndex: function() {
      return require('./SectionIndex.jsx');
    },
    sectionItem: function() {
      return require('./SectionItem.jsx');
    },
    body: function() {
      return require('./Body.jsx');
    },
  }
}
