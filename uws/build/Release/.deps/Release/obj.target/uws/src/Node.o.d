cmd_Release/obj.target/uws/src/Node.o := g++ '-DNODE_GYP_MODULE_NAME=uws' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DBUILDING_NODE_EXTENSION' -I/var/www/node_modules/uws/.node-gyp/9.6.1/include/node -I/var/www/node_modules/uws/.node-gyp/9.6.1/src -I/var/www/node_modules/uws/.node-gyp/9.6.1/deps/uv/include -I/var/www/node_modules/uws/.node-gyp/9.6.1/deps/v8/include  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -O3 -std=c++11 -DUSE_LIBUV -MMD -MF ./Release/.deps/Release/obj.target/uws/src/Node.o.d.raw   -c -o Release/obj.target/uws/src/Node.o ../src/Node.cpp
Release/obj.target/uws/src/Node.o: ../src/Node.cpp ../src/Node.h \
 ../src/Socket.h ../src/Networking.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/opensslv.h \
 ../src/Backend.h ../src/Libuv.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-errno.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-version.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-unix.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-threadpool.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-linux.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/e_os2.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/opensslconf.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/./archs/linux-x86_64/opensslconf.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/comp.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/crypto.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/stack.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/safestack.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ossl_typ.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/symhacks.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/bio.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/x509.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/buffer.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/evp.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/objects.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/obj_mac.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/asn1.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/bn.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ec.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ecdsa.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ecdh.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/rsa.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/dsa.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/dh.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/sha.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/x509_vfy.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/lhash.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pkcs7.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pem.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pem2.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/hmac.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/kssl.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl2.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl3.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/tls1.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/dtls1.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pqueue.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl23.h \
 /var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/srtp.h
../src/Node.cpp:
../src/Node.h:
../src/Socket.h:
../src/Networking.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/opensslv.h:
../src/Backend.h:
../src/Libuv.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-errno.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-version.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-unix.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-threadpool.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/uv-linux.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/e_os2.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/opensslconf.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/./archs/linux-x86_64/opensslconf.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/comp.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/crypto.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/stack.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/safestack.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ossl_typ.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/symhacks.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/bio.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/x509.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/buffer.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/evp.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/objects.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/obj_mac.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/asn1.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/bn.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ec.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ecdsa.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ecdh.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/rsa.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/dsa.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/dh.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/sha.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/x509_vfy.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/lhash.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pkcs7.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pem.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pem2.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/hmac.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/kssl.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl2.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl3.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/tls1.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/dtls1.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/pqueue.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/ssl23.h:
/var/www/node_modules/uws/.node-gyp/9.6.1/include/node/openssl/srtp.h:
