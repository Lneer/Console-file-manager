# Console-file-manager
File manager help:

For start input:
-npm run start -- --username=your_username

**Navigation commands:**
-up - _Go upper from current directory_
-cd path_to_directory  - _change directory_
-ls - _List all files and folder in current directory and print it to console (Don't check type of arguments after command)_

**Basic operations with files**

-cat path_to_file - _Read file and print it's content in console_
-add new_file_name - _Create empty file in current working directory_
-rn path_to_file new_filename - _Rename file_
-cp path_to_file path_to_new_directory - _Copy file_
-mv path_to_file path_to_new_directory - _Move file_
-rm path_to_file - _Delete file_

**Operating system info**

-os --EOL - _Get EOL (default system End-Of-Line)_
-os --cpus - _Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)_
-os --homedir - _Get home directory_
-os --username - _Get current system user name_
-os --architectur - _Get CPU architecture for which Node.js binary has compiled_

**Hash calculation**

-hash path_to_file - _Calculate hash for file and print it into console_

**Compress and decompress operations**

-compress path_to_file path_to_destination_file - _Compress file (using Brotli algorithm)_
-decompress path_to_file path_to_destination_file - _Decompress file (using Brotli algorithm)_