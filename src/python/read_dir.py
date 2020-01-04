import os


def read_dir_files():
    dirPath = os.getcwd()
    print(dirPath)
    dirContent = list(os.listdir(dirPath))
    total_size = 0
    dirDict = dict()
    for folder in dirContent:  # Calculate size for all files here.
        dirStats = os.stat(folder)
        dirDict[folder] = dirStats

    for item in dirDict:
        total_size += dirDict[item].st_size
        print("File/Folder: {0:25s} Size: {1:5.3f} kB".format(
            item, dirDict[item].st_size/1024))
    print("SUMMARY: There are {0} files and folders in the path '{1}' with a total size of {2:5.3f} kB.".format(
        len(dirDict), dirPath, total_size/1024))


read_dir_files()
