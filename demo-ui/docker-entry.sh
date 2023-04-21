#next binds to 127.0.0.1, this is allows debugging outside the cluster by port forwarding 9255 to 9233
nohup socat TCP-LISTEN:9255,fork TCP:localhost:9233 &
echo "Use 9255 to attach you nodejs debugger from your computer."
npm run dev
