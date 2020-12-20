const pathToTitleMap = {
  '/products': 'Products',
  '/help': 'Help'
};

function getTitleFromPath(pathname) {
  const secondSlashIndex = pathname.indexOf('/', pathname.indexOf('/') + 1);
  if (secondSlashIndex === -1) {
    return pathToTitleMap[pathname];
  }
  return pathToTitleMap[pathname.substr(0, secondSlashIndex)];
}

export default getTitleFromPath;
