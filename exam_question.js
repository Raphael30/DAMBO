const PRELOADED_POOL = [
    {
        id: 1,
        text: "Refer to the exhibit. Users in the branch network of 2001:db8:0:4::/64 report that they cannot access the Internet. Which command is issued in IPv6 router EIGRP\n100 configuration mode to solve this issue?",
        choices: [
            "A. Issue the eigrp stub command on R1.",
            "B. Issue the no eigrp stub command on R1.",
            "C. Issue the eigrp stub command on R2.",
            "D. Issue the no eigrp stub command on R2."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 2,
        text: "Refer to the exhibit. Which configuration configures a policy on R1 to forward any traffic that is sourced from the 192.168.130.0/24 network to R2?\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 3,
        text: "R2 has a locally originated prefix 192.168.130.0/24 and has these configurations:\nWhat is the result when the route-map OUT command is applied toward an eBGP neighbor R1 (1.1.1.1) by using the neighbor 1.1.1.1 route-map OUT out\ncommand?",
        choices: [
            "A. R1 sees 192.168.130.0/24 as two AS hops away instead of one AS hop away.",
            "B. R1 does not accept any routes other than 192.168.130.0/24",
            "C. R1 does not forward traffic that is destined for 192.168.30.0/24",
            "D. Network 192.168.130.0/24 is not allowed in the R1 table"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 4,
        text: "Which method changes the forwarding decision that a router makes without first changing the routing table or influencing the IP data plane?",
        choices: [
            "A. nonbroadcast multiaccess",
            "B. packet switching",
            "C. policy-based routing",
            "D. forwarding information base"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 5,
        text: "Refer to the exhibit. The output of the trace route from R5 shows a loop in the network. Which configuration prevents this loop?\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 6,
        text: "Refer to the exhibit. An engineer configures a static route on a router, but when the engineer checks the route to the destination, a different next hop is chosen.\nWhat is the reason for this?",
        choices: [
            "A. Dynamic routing protocols always have priority over static routes.",
            "B. The metric of the OSPF route is lower than the metric of the static route.",
            "C. The configured AD for the static route is higher than the AD of OSPF.",
            "D. The syntax of the static route is not valid, so the route is not considered."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 7,
        text: "Refer to the exhibit. An engineer is trying to generate a summary route in OSPF for network 10.0.0.0/8, but the summary route does not show up in the routing\ntable. Why is the summary route missing?",
        choices: [
            "A. The summary-address command is used only for summarizing prefixes between areas.",
            "B. The summary route is visible only in the OSPF database, not in the routing table.",
            "C. There is no route for a subnet inside 10.0.0.0/8, so the summary route is not generated.",
            "D. The summary route is not visible on this router, but it is visible on other OSPF routers in the same area."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 8,
        text: "Refer to the exhibit. An engineer is trying to block the route to 192.168.2.2 from the routing table by using the configuration that is shown. The route is still present\nin the routing table as an OSPF route. Which action blocks the route?",
        choices: [
            "A. Use an extended access list instead of a standard access list.",
            "B. Change sequence 10 in the route-map command from permit to deny.",
            "C. Use a prefix list instead of an access list in the route map.",
            "D. Add this statement to the route map: route-map RM-OSPF-DL deny 20."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 9,
        text: "What is a prerequisite for configuring BFD?",
        choices: [
            "A. Jumbo frame support must be configured on the router that is using BFD.",
            "B. All routers in the path between two BFD endpoints must have BFD enabled.",
            "C. Cisco Express Forwarding must be enabled on all participating BFD endpoints.",
            "D. To use BFD with BGP, the timers 3 9 command must first be configured in the BGP routing process."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 10,
        text: "Refer to the exhibit. R2 is a route reflector, and R1 and R3 are route reflector clients. The route reflector learns the route to 172.16.25.0/24 from R1, but it does not\nadvertise to R3. What is the reason the route is not advertised?",
        choices: [
            "A. R2 does not have a route to the next hop, so R2 does not advertise the prefix to other clients.",
            "B. Route reflector setup requires full IBGP mesh between the routers.",
            "C. In route reflector setup, only classful prefixes are advertised to other clients.",
            "D. In route reflector setups, prefixes are not advertised from one client to another."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 11,
        text: "Refer to the exhibit. An engineer is trying to redistribute OSPF to BGP, but not all of the routes are redistributed. What is the reason for this issue?",
        choices: [
            "A. By default, only internal routes and external type 1 routes are redistributed into BGP",
            "B. Only classful networks are redistributed from OSPF to BGP",
            "C. BGP convergence is slow, so the route will eventually be present in the BGP table",
            "D. By default, only internal OSPF routes are redistributed into BGP"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 12,
        text: "Refer to the exhibit. In which circumstance does the BGP neighbor remain in the idle condition?",
        choices: [
            "A. if prefixes are not received from the BGP peer",
            "B. if prefixes reach the maximum limit",
            "C. if a prefix list is applied on the inbound direction",
            "D. if prefixes exceed the maximum limit"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 13,
        text: "Which attribute eliminates LFAs that belong to protected paths in situations where links in a network are connected through a common fiber?",
        choices: [
            "A. shared risk link group-disjoint",
            "B. linecard-disjoint",
            "C. lowest-repair-path-metric",
            "D. interface-disjoint"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 14,
        text: "Refer to the exhibit. An engineer is troubleshooting BGP on a device but discovers that the clock on the device does not correspond to the time stamp of the log\nentries. Which action ensures consistency between the two times?",
        choices: [
            "A. Configure the service timestamps log uptime command in global configuration mode.",
            "B. Configure the logging clock synchronize command in global configuration mode.",
            "C. Configure the service timestamps log datetime localtime command in global configuration mode.",
            "D. Make sure that the clock on the device is synchronized with an NTP server."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 15,
        text: "Refer to the exhibit. What is the result of applying this configuration?",
        choices: [
            "A. The router can form BGP neighborships with any other device.",
            "B. The router cannot form BGP neighborships with any other device.",
            "C. The router cannot form BGP neighborships with any device that is matched by the access list named “BGP”.",
            "D. The router can form BGP neighborships with any device that is matched by the access list named “BGP”."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 16,
        text: "Which command displays the IP routing table information that is associated with VRF-Lite?",
        choices: [
            "A. show ip vrf",
            "B. show ip route vrf",
            "C. show run vrf",
            "D. show ip protocols vrf"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 17,
        text: "Refer to the exhibit. Which subnet is redistributed from EIGRP to OSPF routing protocols?",
        choices: [
            "A. 10.2.2.0/24",
            "B. 10.1.4.0/26",
            "C. 10.1.2.0/24",
            "D. 10.2.3.0/26"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 18,
        text: "Which configuration adds an IPv4 interface to an OSPFv3 process in OSPFv3 address family configuration?",
        choices: [
            "A. router ospfv3 1 address-family ipv4",
            "B. Router(config-router)#ospfv3 1 ipv4 area 0",
            "C. Router(config-if)#ospfv3 1 ipv4 area 0",
            "D. router ospfv3 1 address-family ipv4 unicast"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 19,
        text: "Refer to the exhibit. Which statement about R1 is true?",
        choices: [
            "A. OSPF redistributes RIP routes only if they have a tag of one.",
            "B. RIP learned routes are distributed to OSPF with a tag value of one.",
            "C. R1 adds one to the metric for RIP learned routes before redistributing to OSPF.",
            "D. RIP routes are redistributed to OSPF without any changes."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 20,
        text: "Refer to the exhibit. An IP SLA was configured on router R1 that allows the default route to be modified in the event that Fa0/0 loses reachability with the router R3\nFa0/0 interface. The route has changed to flow through router R2. Which debug command is used to troubleshoot this issue?",
        choices: [
            "A. debug ip flow",
            "B. debug ip sla error",
            "C. debug ip routing",
            "D. debug ip packet"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 21,
        text: "Which configuration enabled the VRF that is labeled “Inet” on FastEthernet0/0?",
        choices: [
            "A. R1(config)# ip vrf Inet",
            "B. R1(config)#ip vrf Inet FastEthernet0/0",
            "C. R1(config)# ip vrf Inet",
            "D. R1(config)#router ospf 1 vrf Inet"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 22,
        text: "Refer to the exhibit. After redistribution is enabled between the routing protocols; PC2, PC3, and PC4 cannot reach PC1. Which action can the engineer take to\nsolve the issue so that all the PCs are reachable?",
        choices: [
            "A. Set the administrative distance 100 under the RIP process on R2.",
            "B. Filter the prefix 10.1.1.0/24 when redistributed from OSPF to EIGRP.",
            "C. Filter the prefix 10.1.1.0/24 when redistributed from RIP to EIGRP.",
            "D. Redistribute the directly connected interfaces on R2."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 23,
        text: "Which command allows traffic to load-balance in an MPLS Layer 3 VPN configuration?",
        choices: [
            "A. multi-paths eibgp 2",
            "B. maximum-paths 2",
            "C. maximum-paths ibgp 2",
            "D. multi-paths 2"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 24,
        text: "Refer to the exhibit. After applying IPsec, the engineer observed that the DMVPN tunnel went down, and both spoke-to-spoke and hub were not establishing.\nWhich two actions resolve the issue? (Choose two.)",
        choices: [
            "A. Change the mode from mode tunnel to mode transport on R3.",
            "B. Remove the crypto isakmp key cisco address 10.1.1.1 on R2 and R3.",
            "C. Configure the crypto isakmp key cisco address 192.1.1.1 on R2 and R3.",
            "D. Configure the crypto isakmp key cisco address 0.0.0.0 on R2 and R3.",
            "E. Change the mode from mode transport to mode tunnel on R2."
        ],
        answer: "A, D",
        explanation: ""
    },
    {
        id: 25,
        text: "Which statement about route distinguishers in an MPLS network is true?",
        choices: [
            "A. Route distinguishers allow multiple instances of a routing table to coexist within the edge router.",
            "B. Route distinguishers are used for label bindings.",
            "C. Route distinguishers make a unique VPNv4 address across the MPLS network.",
            "D. Route distinguishers define which prefixes are imported and exported on the edge router."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 26,
        text: "Which statement about MPLS LDP router ID is true?",
        choices: [
            "A. If not configured, the operational physical interface is chosen as the router ID even if a loopback is configured.",
            "B. The loopback with the highest IP address is selected as the router ID.",
            "C. The MPLS LDP router ID must match the IGP router ID.",
            "D. The force keyword changes the router ID to the specified address without causing any impact."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 27,
        text: "Refer to the exhibit. Which interface configuration must be configured on the spoke A router to enable a dynamic DMVPN tunnel with the spoke B router?\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 28,
        text: "Which list defines the contents of an MPLS label?",
        choices: [
            "A. 20-bit label; 3-bit traffic class; 1-bit bottom stack; 8-bit TTL",
            "B. 32-bit label; 3-bit traffic class; 1-bit bottom stack; 8-bit TTL",
            "C. 20-bit label; 3-bit flow label; 1-bit bottom stack; 8-bit hop limit",
            "D. 32-bit label; 3-bit flow label; 1-bit bottom stack; 8-bit hop limit"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 29,
        text: "Refer to the exhibit. What does the imp-null tag represent in the MPLS VPN cloud?",
        choices: [
            "A. Pop the label",
            "B. Impose the label",
            "C. Include the EXP bit",
            "D. Exclude the EXP bit"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 30,
        text: "Which transport layer protocol is used to form LDP sessions?",
        choices: [
            "A. UDP",
            "B. SCTP",
            "C. TCP",
            "D. RDP"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 31,
        text: "Refer to the exhibits. Phase-3 tunnels cannot be established between spoke-to-spoke in DMVPN. Which two commands are missing? (Choose two.)",
        choices: [
            "A. The ip nhrp redirect command is missing on the spoke routers.",
            "B. The ip nhrp shortcut command is missing on the spoke routers.",
            "C. The ip nhrp redirect command is missing on the hub router.",
            "D. The ip nhrp shortcut command is missing on the hub router.",
            "E. The ip nhrp map command is missing on the hub router."
        ],
        answer: "B, C",
        explanation: ""
    },
    {
        id: 32,
        text: "Which protocol is used to determine the NBMA address on the other end of a tunnel when mGRE is used?",
        choices: [
            "A. NHRP",
            "B. IPsec",
            "C. MP-BGP",
            "D. OSPF"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 33,
        text: "Refer to the exhibit. Which configuration denies Telnet traffic to router 2 from 198A:0:200C::1/64?\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 34,
        text: "Refer to the exhibit. During troubleshooting it was discovered that the device is not reachable using a secure web browser. What is needed to fix the problem?",
        choices: [
            "A. permit tcp port 443",
            "B. permit udp port 465",
            "C. permit tcp port 465",
            "D. permit tcp port 22"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 35,
        text: "Refer to the exhibit. An engineer is trying to configure local authentication on the console line, but the device is trying to authenticate using TACACS+. Which\naction produces the desired configuration?",
        choices: [
            "A. Add the aaa authentication login default none command to the global configuration.",
            "B. Replace the capital “C” with a lowercase “c” in the aaa authentication login Console local command.",
            "C. Add the aaa authentication login default group tacacs+ local-case command to the global configuration.",
            "D. Add the login authentication Console command to the line configuration"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 36,
        text: "Refer to the exhibit. An engineer is trying to connect to a device with SSH but cannot connect. The engineer connects by using the console and finds the displayed\noutput when troubleshooting. Which command must be used in configuration mode to enable SSH on the device?",
        choices: [
            "A. no ip ssh disable",
            "B. ip ssh enable",
            "C. ip ssh version 2",
            "D. crypto key generate rsa"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 37,
        text: "Which statement about IPv6 ND inspection is true?",
        choices: [
            "A. It learns and secures bindings for stateless autoconfiguration addresses in Layer 3 neighbor tables.",
            "B. It learns and secures bindings for stateless autoconfiguration addresses in Layer 2 neighbor tables.",
            "C. It learns and secures bindings for stateful autoconfiguration addresses in Layer 3 neighbor tables.",
            "D. It learns and secures bindings for stateful autoconfiguration addresses in Layer 2 neighbor tables."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 38,
        text: "While troubleshooting connectivity issues to a router, these details are noticed:\n-Standard pings to all router interfaces, including loopbacks, are successful.\n- Data traffic is unaffected.\n- SNMP connectivity is intermittent.\n- SSH is either slow or disconnects frequently.\nWhich command must be configured first to troubleshoot this issue?",
        choices: [
            "A. show policy-map control-plane",
            "B. show policy-map",
            "C. show interface | inc drop",
            "D. show ip route"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 39,
        text: "Refer to the exhibit. Why is user authentication being rejected?",
        choices: [
            "A. The TACACS+ server expects “user”, but the NT client sends “domain/user”.",
            "B. The TACACS+ server refuses the user because the user is set up for CHAP.",
            "C. The TACACS+ server is down, and the user is in the local database.",
            "D. The TACACS+ server is down, and the user is not in the local database."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 40,
        text: "Refer to the exhibit. Which control plane policy limits BGP traffic that is destined to the CPU to 1 Mbps and ignores BGP traffic that is sent at higher rate?",
        choices: [
            "A. policy-map SHAPE_BGP",
            "B. policy-map LIMIT_BGP",
            "C. policy-map POLICE_BGP",
            "D. policy-map COPP"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 41,
        text: "Which statement about IPv6 RA Guard is true?",
        choices: [
            "A. It does not offer protection in environments where IPv6 traffic is tunneled.",
            "B. It cannot be configured on a switch port interface in the ingress direction.",
            "C. Packets that are dropped by IPv6 RA Guard cannot be spanned.",
            "D. It is not supported in hardware when TCAM is programmed."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 42,
        text: "An engineer is trying to copy an IOS file from one router to another router by using TFTP. Which two actions are needed to allow the file to copy? (Choose two.)",
        choices: [
            "A. Copy the file to the destination router with the copy tftp: flash: command",
            "B. Enable the TFTP server on the source router with the tftp-server flash: <filename> command",
            "C. TFTP is not supported in recent IOS versions, so an alternative method must be used",
            "D. Configure a user on the source router with the username tftp password tftp command",
            "E. Configure the TFTP authentication on the source router with the tftp-server authentication local command"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 43,
        text: "Refer to the exhibit. Users report that IP addresses cannot be acquired from the DHCP server. The DHCP server is configured as shown. About 300 total\nnonconcurrent users are using this DHCP server, but none of them are active for more than two hours per day. Which action fixes the issue within the current\nresources?",
        choices: [
            "A. Modify the subnet mask to the network 192.168.1.0 255.255.254.0 command in the DHCP pool",
            "B. Configure the DHCP lease time to a smaller value",
            "C. Configure the DHCP lease time to a bigger value",
            "D. Add the network 192.168.2.0 255.255.255.0 command to the DHCP pool"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 44,
        text: "Refer to the exhibit. ISP 1 and ISP 2 directly connect to the Internet. A customer is tracking both ISP links to achieve redundancy and cannot see the Cisco IOS IP\nSLA tracking output on the router console. Which command is missing from the IP SLA configuration?",
        choices: [
            "A. Start-time 00:00",
            "B. Start-time 0",
            "C. Start-time immediately",
            "D. Start-time now"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 45,
        text: "Refer to the exhibit. An administrator noticed that after a change was made on R1, the timestamps on the system logs did not match the clock. What is the reason\nfor this error?",
        choices: [
            "A. An authentication error with the NTP server results in an incorrect timestamp.",
            "B. The keyword localtime is not defined on the timestamp service command.",
            "C. The NTP server is in a different time zone.",
            "D. The system clock is set incorrectly to summer-time hours."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 46,
        text: "A network engineer is investigating a flapping (up/down) interface issue on a core switch that is synchronized to an NTP server. Log output currently does not\nshow the time of the flap. Which command allows the logging on the switch to show the time of the flap according to the clock on the device?",
        choices: [
            "A. service timestamps log uptime",
            "B. clock summer-time mst recurring 2 Sunday mar 2:00 1 Sunday nov 2:00",
            "C. service timestamps log datetime localtime show-timezone",
            "D. clock calendar-valid"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 47,
        text: "When provisioning a device in Cisco DNA Center, the engineer sees the error message “Cannot select the device. Not compatible with template”. What is the\nreason for the error?",
        choices: [
            "A. The template has an incorrect configuration.",
            "B. The software version of the template is different from the software version of the device.",
            "C. The changes to the template were not committed.",
            "D. The tag that was used to filter the templates does not match the device tag."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 48,
        text: "While working with software images, an engineer observes that Cisco DNA Center cannot upload its software image directly from the device. Why is the image not\nuploading?",
        choices: [
            "A. The device must be resynced to Cisco DNA Center.",
            "B. The software image for the device is in install mode.",
            "C. The device has lost connectivity to Cisco DNA Center.",
            "D. The software image for the device is in bundle mode"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 49,
        text: "An engineer configured the wrong default gateway for the Cisco DNA Center enterprise interface during the install. Which command must the engineer run to\ncorrect the configuration?",
        choices: [
            "A. sudo maglev-config update",
            "B. sudo maglev install config update",
            "C. sudo maglev reinstall",
            "D. sudo update config install"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 50,
        text: "Refer to the exhibit. An administrator that is connected to the console does not see debug messages when remote users log in. Which action ensures that debug\nmessages are displayed for remote logins?",
        choices: [
            "A. Enter the transport input ssh configuration command.",
            "B. Enter the terminal monitor exec command.",
            "C. Enter the logging console debugging configuration command.",
            "D. Enter the aaa new-model configuration command."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 51,
        text: "Refer to the exhibit. Network operations cannot read or write any configuration on the device with this configuration from the operations subnet. Which two\nconfigurations fix the issue? (Choose two.)",
        choices: [
            "A. Configure SNMP rw permission in addition to community ciscotest.",
            "B. Modify access list 1 and allow operations subnet in the access list.",
            "C. Modify access list 1 and allow SNMP in the access list.",
            "D. Configure SNMP rw permission in addition to version 1.",
            "E. Configure SNMP rw permission in addition to community ciscotest 1."
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 52,
        text: "Refer to the exhibit. Why is the remote NetFlow server failing to receive the NetFlow data?",
        choices: [
            "A. The flow exporter is configured but is not used.",
            "B. The flow monitor is applied in the wrong direction.",
            "C. The flow monitor is applied to the wrong interface.",
            "D. The destination of the flow exporter is not reachable."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 53,
        text: "Drag and drop the MPLS VPN concepts from the left onto the correct descriptions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 54,
        text: "Drag and drop the addresses from the left onto the correct IPv6 filter purposes on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 55,
        text: "Drag and drop the MPLS terms from the left onto the correct definitions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 56,
        text: "Drag and drop the OSPF adjacency states from the left onto the correct descriptions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 57,
        text: "Drag and drop the DHCP messages from the left onto the correct uses on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 58,
        text: "Drag and drop the packet types from the left onto the correct descriptions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 59,
        text: "Drag and drop the SNMP attributes in Cisco IOS devices from the left onto the correct SNMPv2c or SNMPV3 categories on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 60,
        text: "Refer to the exhibit.\nA router receiving BGP routing updates from multiple neighbors for routers in AS 690. What is the reason that the router still sends traffic that isdestined to AS 690\nto a neighbor other than10.222.10.1?",
        choices: [
            "A. The local preference value in another neighbor statement is higher than 250.",
            "B. The local preference value should be set to the same value as the weight in the route map.",
            "C. The route map is applied in the wrong direction.",
            "D. The weight value in another statement is higher than 200."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 61,
        text: "Which security feature can protect DMVPN tunnels?",
        choices: [
            "A. IPsec",
            "B. TACACS+",
            "C. RTBH",
            "D. RADIUS"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 62,
        text: "Which two methods use IPsec to provide secure connectivity from the branch office to the headquarters office? (Choose two.)",
        choices: [
            "A. DMVPN",
            "B. MPLS VPN",
            "C. Virtual Tunnel Interface (VTI)",
            "D. SSL VPN",
            "E. PPPoE"
        ],
        answer: "A, C",
        explanation: ""
    },
    {
        id: 63,
        text: "Which protocol is used in a DMVPN network to map physical IP addresses to logical IP addresses?",
        choices: [
            "A. BGP",
            "B. LLDP",
            "C. EIGRP",
            "D. NHRP"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 64,
        text: "Which Cisco VPN technology can use multipoint tunnel, resulting in a single GRE tunnel interface on the hub, to support multiple connections from multiple spoke\ndevices?",
        choices: [
            "A. DMVPN",
            "B. GETVPN",
            "C. Cisco Easy VPN",
            "D. FlexVPN"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 65,
        text: "Which option is the best for protecting CPU utilization on a device?",
        choices: [
            "A. fragmentation",
            "B. COPP",
            "C. ICMP redirects",
            "D. ICMP unreachable messages"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 66,
        text: "Which SNMP verification command shows the encryption and authentication protocols that are used in SNMPV3?",
        choices: [
            "A. show snmp group",
            "B. show snmp user",
            "C. show snmp",
            "D. show snmp view"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 67,
        text: "What is the role of a route distinguisher via a VRF-Lite setup implementation?",
        choices: [
            "A. It extends the IP address to identify which VFP instance it belongs to.",
            "B. It manages the import and export of routes berween two or more VRF instances",
            "C. It enables multicast distribution for VRF-Lite setups to enhance EGP routing protocol capabilities",
            "D. It enables multicast distribution for VRF-Lite setups to enhance IGP routing protocol capabilities"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 68,
        text: "Refer to the following output:\nRouter#show ip nhrp detail\n1.1.2/8 via 10.2.1.2, Tunnel1 created 00:00:12, expire 01:59:47 TypE. dynamic, Flags: authoritative unique nat registered used NBMA address:\n10.12.1.2\nWhat does the authoritative flag mean in regards to the NHRP information?",
        choices: [
            "A. It was obtained directly from the next-hop server.",
            "B. Data packets are process switches for this mapping entry.",
            "C. NHRP mapping is for networks that are local to this router.",
            "D. The mapping entry was created in response to an NHRP registration request.",
            "E. The NHRP mapping entry cannot be overwritten"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 69,
        text: "Which two protocols can cause TCP starvation? (Choose two)",
        choices: [
            "A. TFTP",
            "B. SNMP",
            "C. SMTP",
            "D. HTTPS",
            "E. FTP"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 70,
        text: "Which two statements about VRF-Lite configurations are true? (Choose two.)",
        choices: [
            "A. They support the exchange of MPLS labels",
            "B. Different customers can have overlapping IP addresses on different VPNs",
            "C. They support a maximum of 512.000 routes",
            "D. Each customer has its own dedicated TCAM resources",
            "E. Each customer has its own private routing table.",
            "F. They support IS-IS"
        ],
        answer: "B, E",
        explanation: ""
    },
    {
        id: 71,
        text: "A network engineer needs to verify IP SLA operations on an interface that shows on indication of excessive traffic. Which command should the engineer use to\ncomplete this action?",
        choices: [
            "A. show frequency",
            "B. show track",
            "C. show reachability",
            "D. show threshold"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 72,
        text: "Which protocol does VRF-Lite support?",
        choices: [
            "A. S-IS",
            "B. ODR",
            "C. EIGRP",
            "D. IGRP"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 73,
        text: "Refer to Exhibit.Which statement about redistribution from BGP into OSPF process 10 is true?",
        choices: [
            "A. Network 172.16.1.0/24 is not redistributed into OSPF.",
            "B. Network 10.10 10.0/24 is not redistributed into OSPF",
            "C. Network 172.16.1.0/24 is redistributed with administrative distance of 1.",
            "D. Network 10.10.10.0/24 is redistributed with administrative distance of 20."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 74,
        text: "Which two statements about redistributing EIGRP into OSPF are true? (Choose two)",
        choices: [
            "A. The redistributed EIGRP routes appear as type 3 LSAs in the OSPF database",
            "B. The redistributed EIGRP routes appear as type 5 LSAs in the OSPF database",
            "C. The administrative distance of the redistributed routes is 170",
            "D. The redistributed EIGRP routes appear as OSPF external type 1",
            "E. The redistributed EIGRP routes as placed into an OSPF area whose area ID matches the EIGRP autonomous system number",
            "F. The redistributed EIGRP routes appear as OSPF external type 2 routes in the routing table"
        ],
        answer: "B, F",
        explanation: ""
    },
    {
        id: 75,
        text: "Refer to the exhibit.Which routes from OSPF process 5 are redistributed into EIGRP?",
        choices: [
            "A. E1 and E2 subnets matching access list TO-OSPF",
            "B. E1 and E2 subnets matching prefix list TO-OSPF",
            "C. only E2 subnets matching access list TO-OSPF",
            "D. only E1 subnets matching prefix listTO-OS1"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 76,
        text: "Users were moved from the local DHCP server to the remote corporate DHCP server. After the move, none of the users were able to use the network.Which two\nissues will prevent this setup from working properly? (Choose two)",
        choices: [
            "A. Auto-QoS is blocking DHCP traffic.",
            "B. The DHCP server IP address configuration is missing locally",
            "C. 802.1X is blocking DHCP traffic",
            "D. The broadcast domain is too large for proper DHCP propagation",
            "E. The route to the new DHCP server is missing"
        ],
        answer: "B, E",
        explanation: ""
    },
    {
        id: 77,
        text: "What is the output of the following command:\nshow ip vrf",
        choices: [
            "A. Show's default RD values",
            "B. Displays IP routing table information associated with a VRF",
            "C. Show's routing protocol information associated with a VRF.",
            "D. Displays the ARP table (static and dynamic entries) in the specified VRF"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 78,
        text: "Which command is used to check IP SLA when an interface is suspected to receive lots of traffic with options?",
        choices: [
            "A. show track",
            "B. show threshold",
            "C. show timer",
            "D. show delay"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 79,
        text: "Refer to the exhibit. AAA server 10.1.1.1 is configured with the default authentication and accounting settings, but the switch cannot communicate with the server.\nWhich action resolves this issue?",
        choices: [
            "A. Correct the timeout value",
            "B. Match the authentication port",
            "C. Correct the shared secret",
            "D. Match the accounting port"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 80,
        text: "Refer to the exhibit. A company is evaluating multiple network management system tools. Trending graphs generated by SNMP data are returned by the NMS and\nappear to have multiple gaps. While troubleshooting the issue, an engineer noticed the relevant output. What solves the gaps in the graphs?",
        choices: [
            "A. Remove the class map NMS from being part of control plane policing",
            "B. Remove the exceed-rate command in the class map",
            "C. Configure the CIR rate to a lower value that accommodates all the NMS tools",
            "D. Separate the NMS class map in multiple class maps based on the specific protocols with appropriate CoPP actions"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 81,
        text: "Drag and drop the credentials from the left onto the remote login information on the right to resolve a failed login attempt to vtys. Not all credentials are\nused.\naaa new-model\naaa authentication login default none\naaa authentication login telnet local\n!\nusername cisco password 0 Ocsic\n!\nline vty 0\npassword LetMeIn\nlogin authentication telnet\ntransport input telnet\nline vty 1\npassword LetMeIn\ntransport input telnet\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 82,
        text: "Refer to the exhibit. An engineer is monitoring reachability of the configured default routes to ISP1 and ISP2. The default route from ISP1 is preferred if available.\nHow is this issue resolved?",
        choices: [
            "A. Use the icmp-echo command to track both default routes",
            "B. Start IP SLA by matching numbers for track and ip sla commands",
            "C. Start IP SLA by defining frequency and scheduling it",
            "D. Use the same AD for both default routes"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 83,
        text: "Refer to the exhibit. Redistribution is enabled between the routing protocols, and now PC2 PC3, and PC4 cannot reach PC1. What are the two solutions to fix the\nproblem? (Choose two)",
        choices: [
            "A. Filter RIP and OSPF routes back into OSPF from EIGRP when redistributing into OSPF in R2",
            "B. Filter all routes except EIGRP routes when redistributing into OSPF in R3",
            "C. Filter OSPF routes into RIP from EIGRP when redistributing into RIP in R2",
            "D. Filter all routes except RIP routes when redistributing into EIGRP in R2",
            "E. Filter RIP routes back into RIP when redistributing into RIP in R2"
        ],
        answer: "C, E",
        explanation: ""
    },
    {
        id: 84,
        text: "Which label operations are performed by a label edge router?",
        choices: [
            "A. PUSH and PHP",
            "B. SWAP and POP",
            "C. SWAP and PUSH",
            "D. PUSH and POP"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 85,
        text: "Refer to the exhibit. The network administrator configured VRF lite for customer A. The technician at the remote site misconfigured VRF on the router.\nWhich configuration will resolve connectivity for both sites of customer A?\nip vrf customer_a\nrd 1:1\nroute-target export 1:1\nroute-target import 1:1\n!\ninterface FastEthernetO.1\nencapsulation dot1Q 2\nip vrf forwarding customer_a\nip address 192.168.4.1 255.255.255.0\n!\nrouter ospf 1\nlog-adj adjacency-changes\n!\nrouter ospf 2 vrf customer_a\nlog-adj adjacency-changes\nnetwork 192.168.4.0 0.0.0.255 area 0\n!\nend",
        choices: [
            "A. ip vrf customer_a",
            "B. ip vrf customer_a",
            "C. ip vrf customer_a",
            "D. ip vrf customer_a"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 86,
        text: "Drag and drop the operations from the left onto the locations where the operations are performed on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 87,
        text: "After some changes in the routing policy, it is noticed that the router in AS 45123 is being used as a transit AS router for several service providers.\nWhich configuration ensures that the branch router in AS 45123 advertises only the local networks to all SP neighbors?",
        choices: [
            "A. ip as-path access-list 1 permit ^45123$",
            "B. ip as-path access-list 1 permit ^45123",
            "C. ip as-path access-list 1 permit ^$",
            "D. ip as-path access-list 1 permit"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 88,
        text: "Refer to the exhibit. An engineer is trying to get a packet destined for 192.168.32.100 forwarded through 10.1.1.1, but it was forwarded through 10.1.1.2.\nWhat action forwards the packets through 10.1.1.1?\nRouter#show ip route\n...\nD 192.168.32.0/19 [90/25789217] via 10.1.1.1\nR 192.168.32.0/24 [120/4] via 10.1.1.2\nO 192.168.32.0/26 [110/229840] via 10.1.1.3",
        choices: [
            "A. Configure EIGRP to receive 192.168.32.0 route with lower metric",
            "B. Configure EIGRP to receive 192.168.32.0 route with lower administrative distance",
            "C. Configure EIGRP to receive 192.168.32.0 route with equal or longer prefix than /24",
            "D. Configure EIGRP to receive 192.168.32.0 route with longer prefix than /19"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 89,
        text: "Refer to the exhibit. A junior engineer updated a branch router configuration. Immediately after the change, the engineer receives calls from the help\ndesk that branch personnel cannot reach any network destinations. Which configuration restores service and continues to block 10.1.1.100/32?",
        choices: [
            "A. ip prefix-list 102 seq 15 permit 0.0.0.0/32 le 32",
            "B. route-map FILTER-IN permit 20",
            "C. ip prefix-list 102 seq 5 permit 0.0.0.0/32 le 32",
            "D. route-map FILTER-IN deny 5"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 90,
        text: "An engineer configured a leak-map command to summarize EIGRP routes and advertise specifically loopback 0 with an IP of 10.1.1.1 255.255.255.252\nalong with the summary route. After finishing configuration, the customer complained not receiving summary route with specific loopback address.\nWhich two configurations will fix it? (Choose two)\nrouter eigrp 1\n!\nroute_map Leak-Route deny 10\n!\ninterface Serial 0/0\nip summary-address eigrp 1 10.0.0.0 255.0.0.0 leak-map Leak-Route",
        choices: [
            "A. Configure route-map Leak-Route permit 10 and match access-list 1",
            "B. Configure access-list 1 permit 10.1.1.1 0.0.0.252",
            "C. Configure access-list 1 and match under route-map Leak-Route",
            "D. Configure route-map Leak-Route permit 20",
            "E. Configure access-list 1 permit 10.1.1.0 0.0.0.3"
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 91,
        text: "Refer to the exhibit. An IP SLA is configured to use the backup default route when the primary is down, but it is not working as desired. Which command\nfixes the issue?\nR1(config)#ip route 0.0.0.0 0.0.0.0 1.1.1.1\nR1(config)#ip route 0.0.0.0 0.0.0.0 2.2.2.2 10\nR1(config)#ip sla 1\nR1(config)#icmp-echo 1.1.1.1 source-interface FastEthernet0/0\nR1(config)#ip sla schedule 1 life forever start-time now\nR1(config)#track 1 ip sla 1 reachability",
        choices: [
            "A. R1(config)# ip route 0.0.0.0 0.0.0.0 1.1.1.1 track 1",
            "B. R1 (config)# ip route 0.0.0 0 0.0.0 0 2.2.2 2",
            "C. R1 (config)# ip route 0.0.0.0 0.0.0.0 2.2.2.2 10 track 1",
            "D. R1(config)# ip sla track 1"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 92,
        text: "What is an advantage of using BFD",
        choices: [
            "A. It detects local link failure at layer 1 and updates routing table",
            "B. It detects local link failure at layer 3 and updates routing protocols",
            "C. It has sub-second failure detection for layer 1 and layer 2 problems",
            "D. It has sub-second failure detection for layer 1 and layer 3 problems"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 93,
        text: "Refer to the exhibit. The ACL is placed on the inbound GigabitEthernet 0/1 interface of the router. Host 192.168.10.10 cannot SSH to host\n192.168.100.1 even though the flow is permitted. Which action resolves the issue without opening full access to this router?\nip address 192.168.10.1 255.255.255.0\nip access-group FILTER in",
        choices: [
            "A. Temporarily move the permit ip any any line to the beginning of the ACL to see if it the flow works",
            "B. Run the show access-list FILTER command to view if the SSH entry has any hit statistics associated with it",
            "C. Move the SSH entry to the beginning of the ACL",
            "D. Temporarily remove the ACL from the interface to see if the flow works"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 94,
        text: "Which component of MPLS VPN is used to extend the IP address so that an engineer is able to identify to which VPN it belongs?",
        choices: [
            "B. VPNv4 address family",
            "D. LDP"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 95,
        text: "Refer to the exhibit. BGP is flapping after the CoPP policy is applied. What are the two solutions to fix the issue? (Choose two)\npolicy-mapp COPP-7600\nclass COPP-CRITICAL-7600\npolice cir 2000000 bc 62500\nconform-action transmit\nexceed-action transmit\n!\nclass class-default\npolice cir 2000000 bc 6250\nconform-action transmit\nexceed-action drop\n!\nclass-map match-all COPP-CRITICAL-7600\nmatch access-group name COPP-CRITICAL-7600\n!\nip access-list extended COPP-CRITICAL-7600\npermit ip any any eq http\npermit ip any any eq https",
        choices: [
            "A. Configure BGP in the COPP-CRITICAL-7600 ACL",
            "B. Configure a higher value for CIR under the default class to allow more packets during peak traffic",
            "C. Configure a higher value for CIR under the class COPP-CRITICAL-7600",
            "D. Configure a three-color policer instead of two-color policer under class COPP-CRITICAL",
            "E. Configure IP CEF to CoPP policy and BGP to work"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 96,
        text: "Drag and drop the MPLS VPN device types from the left onto the definitions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 97,
        text: "Refer to the exhibit. A client is concerned that passwords are visible when running this show archive log config all. Which router configuration is needed to resolve\nthis issue?",
        choices: [
            "A. MASS-RTR(config-archive-log-cfg)#hidekeys",
            "B. MASS-RTR(config)#service password-encryption",
            "C. MASS-RTR(config)#aaa authentication arap",
            "D. MASS-RTR(config-archive-log-cfg)#password encryption aes"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 98,
        text: "Refer to the exhibit. A user cannot SSH to the router. What action must be taken to resolve this issue?",
        choices: [
            "A. Configure transport input ssh",
            "B. Configure transport output ssh",
            "C. Configure ip ssh version 2",
            "D. Configure ip ssh source-interface loopback0"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 99,
        text: "Refer to the exhibit. R1 is being monitored using SNMP and monitoring devices are getting only partial information. What action should be taken to resolve this\nissue?",
        choices: [
            "A. Modify the CoPP policy to increase the configured exceeded limit for SNMP",
            "B. Modify the access list to include snmptrap.",
            "C. Modify the CoPP policy to increase the configured CIR limit for SNMP",
            "D. Modify the access list to add a second line to allow udp any any eg snmp"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 100,
        text: "Refer to the exhibit. The server for the finance department is not reachable consistently on the 200.30.40.0/24 network and after every second month it gets a new\nIP address. What two actions must be taken to resolve this issue? (Choosetwo.)",
        choices: [
            "A. Configure the server to use DHCP on the network with default gateway 200.30.40.100.",
            "B. Configure the server with a static IP address and default gateway",
            "C. Configure the router to exclude a server IP address",
            "D. Configure the server to use DHCP on the network with default gateway 200.30.30.100.",
            "E. Configure the router to exclude a server IP address and default gateway."
        ],
        answer: "B, C",
        explanation: ""
    },
    {
        id: 101,
        text: "What does IPv6 Source Guard utilize to determine if IPv6 source addresses should be forwarded?",
        choices: [
            "A. ACLs",
            "B. Binding Table",
            "C. ACE",
            "D. DHCP"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 102,
        text: "During the maintenance window, an administrator accidentally deleted the Telnet-related configuration that permits a Telnet connection from the inside network\n(Eth0/0) to the outside of the network between Friday - Sunday night hours only.\nWhich configuration resolves the issue?",
        choices: [
            "A. interface Ethernet0/0",
            "B. interface Ethernet0/0",
            "C. interface Ethernet0/0",
            "D. interface Ethernet0/0"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 103,
        text: "Refer to the exhibit. An engineer wanted to set a taq of 30 to route 10.1.80.65/32 but it failed. How is the issue fixed?",
        choices: [
            "A. Modify route-map ospf-to-eigrp permit10 and match prefix-list ccnp2",
            "B. Modify prefix-list ccnp3 to add 10.1.64.0/20 ge 32",
            "C. Modify prefix-list ccnp3 to add 10.1.64.0/20 le 24",
            "D. Modify route-map ospf-to-eigrp permit 30 and match prefix-list ccnp2."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 104,
        text: "Refer to the exhibit. Which action resolves intermittent connectivity observed with the SNMP trap packets?",
        choices: [
            "A. Add one new entry in the ACL 120 to permit the UDP port 161",
            "B. Increase the CIR of the mgmt class map",
            "C. Add a new class map to match TCP traffic.",
            "D. Decrease the committed burst size of the mgmt class map."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 105,
        text: "Refer to the exhibit. An IT staff member comes into the office during normal office hours and cannot access devices through SSH. Which action should be taken to\nresolve this issue?",
        choices: [
            "A. Modify the access list to use the correct IP address.",
            "B. Configure the correct time range.",
            "C. Modify the access list to correct the subnet mask.",
            "D. Configure the access list in the outbound direction."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 106,
        text: "Refer to the exhibit. A network administrator configured an IPv6 access list to allow TCP return traffic only, but it is not working as expected. Whin changes resolve\nthis issue?",
        choices: [
            "A. ipv6 access-list inbound",
            "B. ipv6 access-list inbound",
            "C. ipv6 access-list inbound",
            "D. ipv6 access-list inbound"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 107,
        text: "Refer to the exhibit. An engineer receives this error message when trying to access another router in-band from the serial interface corfnected to the console of\nR1. Which configuration is needed on R1 to resolve this issue?",
        choices: [
            "A. R1(config)#line console 0",
            "B. R1(config)#line vty 0",
            "C. R1(config)#line vty 0",
            "D. R1(confia)#line console 0"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 108,
        text: "An engineer configured a company's multiple area OSPF Head Office router and Site A Cisco routers with VRF lite. Each site router is connected to a PE router of\nan MPLS backbone:\nAfter finishing both site router configurations, none of the LSA 3, 4, 5, and 7 are installed at Site A router. Which configuration resolves this issue?",
        choices: [
            "A. configure capability vrf-lite on Head Office and its connected PE router under router ospf 1 vrf abc",
            "B. configure capability vrf-lite on both PE routers connected to Head Office and Site A routers under router ospf 1 vrf abc.",
            "C. configure capability vrf-lite on Site A and its connected PE router under router ospf 1 vrf abc",
            "D. configure capability vrf-lite on Head Office and Site A routers under router ospf 1 vrf abc"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 109,
        text: "Refer to the exhibit. R1 is connected with R2 via GigabitEthernet0/0, and R2 cannot ping R1. What action will fix the issue?",
        choices: [
            "A. Fix route dampening configured on the router.",
            "B. Replace the SFP module because it is not supported.",
            "C. Fix IP Event Dampening configured on the interface",
            "D. Correct the IP SLA probe that failed."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 110,
        text: "Refer to the exhibit. An IP SLA is configured to use the backup default route when the primary is down, but it is not working as desired. Which ommand fixes the\nissue?",
        choices: [
            "A. R1(config)# ip route 0.0.0.0 0.0.0.0 2.2.2.2 10 track 1",
            "B. R1(config)# ip route o.0.0.0 0.0.0.0 2.2.2.2",
            "C. R1(config)#ip sla track 1",
            "D. R1(config)# ip route 0.0.0.0 0.0.0.0 1.1.1.1 track 1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 111,
        text: "Refer to the exhibit. To provide reachability to network 10.1.1.0 /24 from R5, the network administrator redistributes EIGRP into OSPF on R3 but.notices that R4 is\nnow taking a suboptimal path through R5 to reach 10.1.1.0 /24 network. Which action fixes the issue while keeping the.reachability from R5 to 10.1.1.0/24\nnetwork?",
        choices: [
            "A. Change the administrative distance of the external EIGRP to 90",
            "B. Apply the outbound distribution list on R5 toward R4 in OSPF.",
            "C. Change the administrative distance of OSPF to 200 on R5",
            "D. Redistribute OSPF into EIGRP on R4"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 112,
        text: "What does the PE router convert the IPv4 prefix to within an MPLS VPN?",
        choices: [
            "A. VPN-IPv4 prefix combined with the 64-bit route distinguisher",
            "B. 48-bit route combining the IP and PE router-id",
            "C. prefix that combines the ASN, PE router-id, and IP prefix",
            "D. eBGP path association between the PE and CE sessions"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 113,
        text: "Which IGPs are supported by the MPLS LDP autoconfiguration feature?",
        choices: [
            "A. ISIS and RIPv2",
            "B. RIPv2 and OSPF",
            "C. OSPFand EIGRP",
            "D. OSPF and ISIS"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 114,
        text: "An engineer configured a leak-map command to summarize EIGRP routes and advertise specifically loopback O with an IP of 10.1.1.1 255.255.255.252 along with\nthe summary route. After finishing configuration, the customer complained about not receiving the summary route with the specific loopback address. Which two\nconfigurations will fix this issue? (Choose two.)\nrouter eigrp 1\n!\nroute_map Leak-Route deny 10\n!\ninterface Serial 0/0\nip summary-address eigrp 1 10.0.0.0 255.0.0.0 leak-map Leak-Route",
        choices: [
            "A. Configure access-list 1 permit 10.1.1.0 0.0.0.3.",
            "B. Configure access-list 1 permit 10.1.1.1 0.0.0.252.",
            "C. Confiqure access-list 1 and match under route-map Leak-Route.",
            "D. Configure route-map Leak-Route permit 10 and match access-list 1.",
            "E. Configure route-map Leak-Route permit 20."
        ],
        answer: "A, D",
        explanation: ""
    },
    {
        id: 115,
        text: "Refer to the exhibit. An engineer has configured DMVPN on a spoke router. What is the WAN IP address of another spoke router within the DMVF network?",
        choices: [
            "A. 192.168.1.1",
            "B. 172.18.46.2",
            "C. 172.18.16.2",
            "D. 192.168.1.4"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 116,
        text: "Refer to the exhibit. A network engineer for AS64512 must remove the inbound and outbound traffic from link A during maintenance without closing the BGP\nsession so that there is still a backup link over link A toward the ASN. Which BGP configuration on R1 accomplishes this goal?",
        choices: [
            "A. route-map link-a-in permit 10",
            "B. route-map link-a-in permit 10",
            "C. route-map link-a-in permit 10",
            "D. route-map link-a-in permit 10"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 117,
        text: "Refer to the exhibit. Which interface configuration must be configured on the HUB router to enable MVPN with mGRE mode?",
        choices: [
            "A. interface Tunnel0",
            "B. interface Tunnel0",
            "C. interface Tunnel0",
            "D. interface Tunnel0"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 118,
        text: "An engineer is configuring a network and needs packets to be forwarded to an interface for any destination address that is not in the routing table.What should be\nconfigured to accomplish this task?",
        choices: [
            "A. set ip next-hop",
            "B. set ip default next-hop",
            "C. set ip next-hop recursive",
            "D. set ip next-hop verify-availability"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 119,
        text: "Which protocol does MPLS use to support traffic engineering?",
        choices: [
            "A. Resource Reservation Protocol",
            "B. Label Distribution Protocol",
            "C. Border Gateway Protocol",
            "D. Tag Distribution Protocol"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 120,
        text: "Refer to the exhibit. Which two actions should be taken to access the server? (Choose two.)",
        choices: [
            "A. Modify the access list to add a second line of permit ip any.",
            "B. Modify the access list to deny the route to 192.168.2.2",
            "C. Modify distribute list seq 10 to permit the route to 192.168.2.2",
            "D. Add a sequence 20 in the route map to permit access list 1",
            "E. Add a floating static route to reach to 192.168 2 2 with administrative distance higher than OSPF"
        ],
        answer: "C, E",
        explanation: ""
    },
    {
        id: 121,
        text: "An engíineer needs dynamic routing between two routers and is unable to establish OSPF adjacency. The output of the show ip ospf neighbor command shows\nthat the neighbor state is EXSTART/EXCHANGE. Which action should be taken to resolve this issue?",
        choices: [
            "A. match the passwords",
            "B. match the hello timers",
            "C. match the MTUs",
            "D. match the network types"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 122,
        text: "Drag and Drop the IPv6 First-Hop Security features from the left onto the definitions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 123,
        text: "An engineer configured access list NON-CISCO in a policy to influence routes.\nroute-map PBR, deny, sequence 5\nMatch clauses:\nip address (access-list): NON-CISCO\nSet clauses:\nPolicy routing matches: 0 packets, 0 bytes\nroute-map PBR, permit, sequence 10\nMatch clauses:\nSet clauses:\nip next-hop 192.168.1.5\nPolicy routing matches: 388888023 packets, 222229775077 bytes\nWhat are the two effects of this route map configuration? (Choose two.)",
        choices: [
            "A. Packets are forwarded to the default gateway",
            "B. Packets are dropped by the access list",
            "C. Packets are not evaluated by sequence 10",
            "D. Packets are evaluated by sequence 10",
            "E. Packets are forwarded using normal route lookup."
        ],
        answer: "D, E",
        explanation: ""
    },
    {
        id: 124,
        text: "What are two functions of IPv6 Source Guard? (Choose two.)",
        choices: [
            "A. It denies traffic by inspecting neighbor discovery packets for specific patterns.",
            "B. It denies traffic from unknown sources or unallocated addresses",
            "C. It uses the populated binding table for allowing legitimate traffic.",
            "D. It works independent from IPv6 neighbor discovery.",
            "E. It blocks certain traffic by inspecting DHCP packets for specific sources."
        ],
        answer: "B, C",
        explanation: ""
    },
    {
        id: 125,
        text: "Refer to the exhibit. A user has set up an IP SLA probe to test if a non SLA host web server on IP address 10.1.1.1 accepts HTTP sesons prior to deployment. The\nprobe is failing. Which action should the network administrator recommend for the probe to succeed?",
        choices: [
            "A. Modify the ip sla schedule frequency to forever",
            "B. Add the control disable option to the tcp connect",
            "C. Add icmp-echo command for the host",
            "D. Re-issue the ip sla schedule command"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 126,
        text: "How are MPLS Layer 3 VPN services deployed?",
        choices: [
            "A. The RD and RT values must match under the VRF",
            "B. The label switch path must be available between the local and remote PE routers.",
            "C. The import and export RT values under a VRF must always be the same.",
            "D. The RD and RT values under a VRF must match on the remote PE router"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 127,
        text: "Refer to the exhibit. The network administrator must mutually redistribute routes at the Chicago router to the LA and NewYork routers. The confiquration of the\nChicago router is this：\nrouter ospf 1\nredistribute eigrp 100\nrouter eigrp 100\nredistribute ospf 1\nAfter the configuration, the LA router receives all the NewYork routes, but NewYork router does not receive any LA routes. Which set of configurations fixes the\nproblem on the Chicago router?",
        choices: [
            "A. router eigrp 100",
            "B. router eigrp 100",
            "C. router ospf 1",
            "D. router ospf 1"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 128,
        text: "Refer to the exhibit. The R1 and R2 configurations are:\nR1\nrouter bap 100\nneighbor 10.1.1.2 remote-as 200\nR2\nrouter bgp 200\nneighbor 10.1.1.1 remote-as 100\nThe neighbor relationship is not coming up. Which two sets of configurations bring the neighbors up? (Choose two.)",
        choices: [
            "A. R2",
            "B. R2",
            "C. R2",
            "D. R1",
            "E. R1"
        ],
        answer: "B, E",
        explanation: ""
    },
    {
        id: 129,
        text: "An engineer configured SNMP notifications sent to the management server using authentication and encrypting data with DES. An error in the response PDU is\nreceived as\"UNKNOWNUSERNAME. WRONGDIGEST\". Which action resolves the issue?",
        choices: [
            "A. Configure correct authentication and privacy passwords using SNMPv3 authNoPriv",
            "B. Configure the correct authentication password using SNMPv3 authNoPriv",
            "C. Configure the correct authentication password using SNMPv3 authPriv.",
            "D. Configure correct authentication and privacy passwords using SNMPv3 authPrivy."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 130,
        text: "#R1 show ip roue\nRefer to the exhibits. All the serial links between R1, R2, and R3 have the same bandwidth. Users on the 192.168.1.0/24 network report slow response times while\nthey access resources on network 192 168.3.0/24. When a traceroute is run on the path, it shows that the packet is getting forwarded via R2 to R3 although the\nlink between R1 and R3 is still up. What must the network administrator do to fix the slowness?",
        choices: [
            "A. Add a static route on R1 using the next hop of R3.",
            "B. Redistribute the R1 static route to EIGRP",
            "C. Change the Administrative Distance of EIGRP to 5",
            "D. Remove the static route on R1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 131,
        text: "Reter to the exhibits. A company with autonomous system number AS65401 has obtained IP address block 209.165.200.224/27 from ARIN. The company needed\nmore IP addresses and was assigned block 209.165.202.128/27 from ISP2. An engineer in ISP1 reports that they are receiving ISP2 routes from AS65401. Which\nconfiquration on R1 resolves the issue?",
        choices: [
            "A. access-list 10 deny 209.165.202.128 0.0.0.31",
            "B. access-list 10 deny 209.165.202.128 0.0.0.31",
            "C. ip route 209.165.200.224 255.255.255.224 209.165.201.1",
            "D. ip route 0.0.0.0 0.0.0.0 209.165.201.1"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 132,
        text: "Refer to the exhibits. An engineer identified a Layer 2 loop using DNAC. Which command fixes the problem in the SF-D9300-1 switch?",
        choices: [
            "A. spanning-tree backbonefast",
            "B. no spanning-tree uplinkfast",
            "C. spanning-tree loopguard default",
            "D. spanning-tree portfast bpduguard"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 133,
        text: "Refer to the exhibit. Which two actions restrict access to router R1 by SSH? (Choose two.)",
        choices: [
            "A. Remove class-map ANY from service-policy CoPP",
            "B. Configure transport output ssh on line vty and remove sequence 10 from access list 199",
            "C. Configure transport output ssh on line vty and remove sequence 20 from access list 100",
            "D. Remove sequence 10 from access list 100 and add sequence 20 deny tcp any any eq telnet to access list 199",
            "E. Configure transport input ssh on line vty and remove sequence 30 from access list 100"
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 134,
        text: "Refer to the exhibit. An IPv6 network was newly deployed in the environment and the help desk reports that R3 cannot SSH to the R2s Loopback interface. Which\naction resolves the issue?",
        choices: [
            "A. Modify line 10 of the access list to permit instead of deny.",
            "B. Remove line 60 from the access list.",
            "C. Modify line 30 of the access list to permit instead of deny",
            "D. Remove line 70 from the access list"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 135,
        text: "What are two functions of LDP? (Choose two.)",
        choices: [
            "A. It uses Forwarding Equivalence Class.",
            "B. It advertises labels per Forwarding Equivalence Class.",
            "C. It requires MPLS Traffic Engineering.",
            "D. It is defined in RFC 3038 and 3039.",
            "E. It must use Resource Reservation Protocol."
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 136,
        text: "Refer to the exhibit. A network administrator is using the DNA Assurance Dashboard panel to troubleshoot an OSPF adiacency that failed between Edge NYC\nInterface GiqabitEthernet1/3 with Neighbor Edge SNJ. The administrator observes that the neighborship is stuck in exstart state. How does the administrator fix\nthis issue?",
        choices: [
            "A. Configure to match the OSPF interface unique IP address and subnet mask on both routers.",
            "B. Configure to match the OSPF interface network types on both routers.",
            "C. Configure to match the OSPF interface speed and duplex settings on both routers",
            "D. Configure to match the OSPF interface MTU settings on both routers"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 137,
        text: "Refer to the exhibit. A network administrator is discovering a Cisco Catalyst 9300 and a Cisco WLC 3504 in Cisco DNA Center. The Catalyst 9300 is added\nsuccessfully. However, the WLC is showing error \"uncontactable\" when the administrator tries to add it in Cisco DNA Center. Which action discovers WLC in\nCisco DNA Center successfully?",
        choices: [
            "A. Delete the WLC 3504 from Cisco DNA Center and add it to Cisco DNA Center again.",
            "B. Copy the pem file from the Cisco DNA Center on the USB and upload it to the WLC 3504",
            "C. Copy the .cert file from the Cisco DNA Center on the USB and upload it to the WLC 3504",
            "D. Add the WLC 3504 under the hierarchy of the Catalyst 9300 connected devices"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 138,
        text: "Refer to the exhibit. Bangkok is using ECMP to reach to the 192 168.5.0/24 network. The administrator must configure Bangkok in such a way that Telnet traffic\nfrom 192 168 3 0/24 and 192. 168. 4.0/24 networks uses the HongKong router as the preferred route Which set of configurations accomplishes this task?",
        choices: [
            "A. access-list 101 permit ip 192.168.3.0 0.0.0.255 192.168.5.0 0.0.0.255",
            "B. access-list 101 permit tcp 192.168.3.0 0.0.0.255 192.168.5.0 0.0.0.255 eq 23",
            "C. access-list 101 permit tcp 192.168.3.0 0.0.0.255 192.168.5.0 0.0.0.255 eq 23",
            "D. access-list 101 permit ip 192.168.3.0 0.0.0.255 192.168.5.0 0.0.0.255"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 139,
        text: "Refer to the exhibit. Which action resolves the authentication problem?",
        choices: [
            "A. Configure the user name on the TACACS+ server",
            "B. Configure the UDP port 1812 to be allowed on the TACACS+ server",
            "C. Confiqure the TCP port 49 to be reachable by the router",
            "D. Configure the same password between the TACACS+ server and router."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 140,
        text: "Refer to the exhibits. A user on the 192.168.1.0/24 network can successfully ping 192.168.3.1, but the administrator cannot ping 192.168.3.1 from the LA router.\nWhich set of configurations fixes the issue?",
        choices: [
            "A. Chicago Router",
            "B. LA Router",
            "C. Chicago Router",
            "D. Chicago Router"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 141,
        text: "An engineer configured a Cisco router to send reliable and encrypted notifications for any events to the management server. It was noticed that the notification\nmessages are reliable but not encrypted. Which action resolves the issue?",
        choices: [
            "A. Configure all devices for SNMPv3 traps with auth.",
            "B. Configure all devices for SNMPv3 traps with priv.",
            "C. Configure all devices for SNMPv3 informs with auth.",
            "D. Configure all devices for SNMPv3 informs with priv"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 142,
        text: "Refer to the exhibits.\nWhen DMVPN is configured, which configuration allows spoke-to-spoke communication using\nloopback as tunnel source?",
        choices: [
            "A. Configure crypto isakmp key cisco address 0.0.0.0 on the hub.",
            "B. Configure crypto isakmp key Cisco address 200.1.0.0 255.255.0.0 on the hub.",
            "C. Configure crypto isakmp key cisco address 200.1.0.0 255.255.0.0 on the spokes.",
            "D. Configure crypto isakmp key cisco address 0.0.0.0 on the spokes"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 143,
        text: "Refer to the exhibit.\nThe administrator can see the traps for the failed login attempts, but cannot see the traps of\nsuccessful login attempts. What command is needed to resolve the issue?",
        choices: [
            "A. Configure logging history 2",
            "B. Configure logging history 3",
            "C. Configure logging history 4",
            "D. Configure logging history 5"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 144,
        text: "Refer to the exhibit\nA network administrator configured mutual redistribution on R1 and R2 routers, which caused\ninstability in the network. Which action resolves the issue?",
        choices: [
            "A. Set a tag in the route map when redistributing EIGRP into OSPF on R1. and match the same tag on R2 to allow when redistributing",
            "B. Apply a prefix list of EIGRP network routes in OSPF domain on R1 to propagate back into the EIGRP routing domain.",
            "C. Set a tag in the route map when redistributing EIGRP into OSPF on R1, and match the same tag on R2 to deny when redistributing",
            "D. Advertise summary routes of EIGRP to OSPF and deny specific EIGRP routes when redistributing into OSPF."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 145,
        text: "Refer to the exhibit Which action restores the routes from neighbors while still filtering 1 1 1 0/24?",
        choices: [
            "A. Add a second line in the access list to permit any",
            "B. Modify the route map to permit the access list instead of deny it",
            "C. Modify the access list to deny instead of permit it",
            "D. Add a second sequence in the route map permit 20"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 146,
        text: "Drap and drop the actions from the left into the correct order on the right to configure a policy to avoid following packet forwarding based on the normal routing\npath.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 147,
        text: "Refer to the exhibit.The administrator successfully logs into R1 but cannot access privileged mode commands.what should be configured to resolve the issue ?",
        choices: [
            "A. aaa authorization reverse-access",
            "B. secret cisco 123! at the end of the username command instead of password cisco123!",
            "C. matching password on vty lines as cisco123!",
            "D. enable secret or enable password commands to enter into privileged mode"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 148,
        text: "Drap and drop the MPLS concepts from the left onto the descriptions on the right\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 149,
        text: "Refer to the exhibit.The DHCP client is unable to receive an IP address from the DHCP server. RouterB is configured as follows:\nInterface fastethernet 0/0\nDescription client DHCP ID388888888\nIp address 172.31.1.1 255.255.255.0\n!\nIp route 172.16.1.0 255.255.255.0 10.1.1.2\nWhich command is required on the fastethernet 0/0 interface of RouterB to resolve this issue ?",
        choices: [
            "A. RouterB(config-if)#ip helper-address 255.255.255.255",
            "B. RouterB(config-if)#ip helper-address 172.31.1.1",
            "C. RouterB(config-if)#ip helper-address 172.16.1.2",
            "D. RouterB(config-if)#ip helper-address 172.16.1.1"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 150,
        text: "Refer to the exhibit An engineer has successfully set up a floating static route from the BRANCH router to the HQ network using HQ_R 1 as the primary default\ngateway. When the g0/0 goes down on HQ_R1, the branch network cannot reach the HQ network 192 168 20 0/24. Which set of configurations resolves the\nissue?",
        choices: [
            "A. HQ_R3(config)# ip sla responder",
            "B. BRANCH(config)# ip sla 1",
            "C. HQ R3(config)# ip sla responder",
            "D. BRANCH(config)# ip sla 1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 151,
        text: "Refer to the exhibits An engineer filtered messages based on severity to minimize log messages .After applying the filter, the engineer noticed that it filtered\nrequired messages as well Which action must the engineer take to resolve the issue?",
        choices: [
            "A. Configure syslog level 2",
            "B. Configure syslog level 3",
            "C. Configure syslog level 4",
            "D. Configure syslog level 5"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 152,
        text: "A DMVPN single hub topology is using IPsec + mGRE with OSPF. What should be configured on the hub to ensure it will be the designated router ?",
        choices: [
            "A. OSPF priority greater than 1",
            "B. OSPF priority to 0",
            "C. tunnel interface of the hub with ip nhrp ospf dr",
            "D. route map to set the metrics of learned routes to 110"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 153,
        text: "An engineer is troubleshooting on the console session of a router and turns on multiple debug commands.The console screen is filled with scrolling debug\nmessages that none of the commands can be verified if entered correctly or display any output Which action allows the engineer to see\nentered console commands while still continuing the analysis of the debug messages?",
        choices: [
            "A. configure the term no mon command globally",
            "B. Configure the no logging console debugging command globally",
            "C. Configure the logging synchronous command",
            "D. Configure the logging synchronous level all command"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 154,
        text: "An engineer configured policy-based routing for a destination IP address that does not exist in the routing table。How is the packet treated through the policy for\nconfiguring the set ip default next-hop command?",
        choices: [
            "A. Packets are forwarded based on a static route",
            "B. Packets are not forwarded to the specific next hop",
            "C. Packets are forwarded based on the touting table",
            "D. Packets are forwarded to the specific next hop"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 155,
        text: "An engineer must configure a Cisco router to initiate secure connections from the router to other devices in the network but kept failing. When two actions resolve\nthe issue? (Choose two )",
        choices: [
            "A. Configure a domain name",
            "B. Configure transport input ssh command on the console",
            "C. Configure a source port for the SSH connection to initiate",
            "D. Configure a crypto key to be generated",
            "E. Configure a TACACS+ server and enable it"
        ],
        answer: "A, D",
        explanation: ""
    },
    {
        id: 156,
        text: "Refer to the exhibit The Los Angeles and New York routers are receiving routes from Chicago but not from each other. Which configuration fixes the issue?",
        choices: [
            "A. interface Tunnel 1",
            "B. interface Tunnel 1",
            "C. interface Tunnel 1",
            "D. interface Tunnel 1"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 157,
        text: "Refer to the exhibits. An engineer identified a Layer 2 loop using DNAC. Which command fixes the problem in the SF switch?",
        choices: [
            "A. no spanning-tree uplinkfast",
            "B. spanning-tree loopguard default",
            "C. spanning-tree portfast bpduguard",
            "D. spanning-tree backbonefast"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 158,
        text: "Refer to the exhibit.The remote server is failing to receive the Netflow data. Which action resolve the issue?",
        choices: [
            "A. Modify the interface command to ip flow monitor FLOW-MONITOR-1 input",
            "B. Modify the udp port under flow exporter profile to ip transport udp 4739",
            "C. Modify the flow record command record v4_r1 to move under flow exporter profile",
            "D. Moftity the flow transport command transport udp 2065 to move under flow monitor profile"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 159,
        text: "Refer to the exhibit The network administrator has configured the Customer Edge router (AS 64511) to send only summarized routes toward ISP -1 (AS 100) and\nISP-2 (AS 200).\nrouter bgp 64511\nnetwork 172.16.20.0 mask 255.255.255.0\nnetwork 172.16.21.0 mask 255.255.255.0\nnetwork 172.16.22.0 mask 255.255.255.0\nnetwork 172.16.23.0 mask 255.255.255.0\naggregate-address 172.16.20.0 255.255.252.0\nAfter this configuration, ISP-1 and ISP-2 continue to receive the specific routes and the summary route. Which configuration resolves the issue?",
        choices: [
            "A. router bgp 64511",
            "B. ip prefix-list PL_BLOCK_SPECIFIC deny 172.16.20.0/22 ge 22",
            "C. interface E 0/0",
            "D. router bgp 64511"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 160,
        text: "Refer to the exhibit. A network administrator redistributed the default static route into OSPF toward all internal routers to reach to Internet.Which set of commands\nrestores reachability to the internet by internal routers?",
        choices: [
            "A. router ospf 1",
            "B. router ospf 1",
            "C. router ospf 1",
            "D. router ospf 1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 161,
        text: "Refer to the exhibit.An engineer has configured DMVPN on a spoke router.What is the WAN IP address of another spoke router within the DMVPN network?",
        choices: [
            "A. 172.18.46.2",
            "B. 172.18.16.2",
            "C. 192.168.1.1",
            "D. 192.168.1.4"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 162,
        text: "When configuring Control Plane Policing on a router to protect it from malicious traffic, an engineer observes that the configured routing protocols start flapping on\nthat device.Which action in the Control Plane Policy prevents this problem in a production environment while achieving the security objective?",
        choices: [
            "A. Set the conform-action to transmit and exceed-action to drop to test the ACLs and transmit rates and apply the Control Plane Policy in the input direction",
            "B. Set the conform-action to transmit and exceed-action to drop to test the ACLs and transmit rates and apply the Control Plane Policy in the output direction",
            "C. Set the conform-action and exceed-action to transmit initially to test the ACLs and transmit rates and apply the Control Plane Policy in the output direction",
            "D. Set the conform-action and exceed action to transmit initially to test the ACLs and transmit rates and apply the Control Plane Policy in the intput direction"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 163,
        text: "Refer to the exhibit. R2 has two paths to reach 192.168.13.0/24. but traffic is sent only through R3. Which action allows traffic to use both paths ?",
        choices: [
            "A. Configure the variance 2 command under the EIGRP process on R2",
            "B. Configure the bandwidth 2000 command under interface FastEthernet0/0 on R2",
            "C. Configure the variance 4 command under the EIGRP process on R2",
            "D. Configure the delay 1 command under interface FastEthernet0/0 on R2"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 164,
        text: "Refer to the exhibit R1 and R2 cannot establish an EIGRP adjacency Which action establishes EIGRP adjacency?",
        choices: [
            "A. Remove the current autonomous system number on one of the routers and change to a different value",
            "B. Add the no auto-summary command to the R2 configuration so that it matches the R1 configuration",
            "C. Add the passive-interface command to the R1 configuration so that it matches the R2 configuration",
            "D. Remove the passive-interface command from the R2 configuration so that it matches the R1 configuration"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 165,
        text: "In which two ways does the IPv6 First-Hop Security Binding Table operate?(choose two)",
        choices: [
            "A. by IPv6 routing protocols to securely build neighborships without the need of authentication",
            "B. by storing hashed keys for IPsec tunnels for the built-in IPsec features",
            "C. by IPv6 HSRP to make sure neighbors are authenticated before being used as gateways",
            "D. by various IPv6 guard features to validate the data link layer address",
            "E. by the recovery mechanism to recover the binding table in the event of a device reboot"
        ],
        answer: "D, E",
        explanation: ""
    },
    {
        id: 166,
        text: "An engineer configured two routers connected to two different service providers using BGP with default attributes. One of the links is presenting high delay, which\ncauses slowness in the network. Which BGP attribute must the engineer configure to avoid using the high-delay ISP link if the second ISP link is up?",
        choices: [
            "A. AS-PATH",
            "B. WEIGHT",
            "C. LOCAL_PREF",
            "D. MED"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 167,
        text: "What are two functions of MPLS Layer 3 VPNs?(choose two)",
        choices: [
            "A. Customer traffic is encapsulated in a VPN label when it is forwarded in MPLS network",
            "B. BGP is used for signaling customer VPNv4 routes between PE nodes",
            "C. LDP and BGP can be used for Pseudowire signaling",
            "D. It is used for transparent pomt-to-multipomt connectivity between Ethernet links/sites",
            "E. A packet with node segment ID is forwarded along with shortest path to destination"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 168,
        text: "What are two MPLS label characteristics? (Choose two.)",
        choices: [
            "A. The label edge router swaps labels on the received packets",
            "B. Labels are imposed in packets after the Layer 3 header",
            "C. LDP uses TCP for reliable delivery of information",
            "D. An MPLS label is a short identifier that identifies a forwarding equivalence class.",
            "E. A maximum of two labels can be imposed on an MPLS packet"
        ],
        answer: "C, D",
        explanation: ""
    },
    {
        id: 169,
        text: "Refer to the exhibit.The ospf neighbor relationship is not coming up.What must be configured to restore OSPF neighbor adjacency?",
        choices: [
            "A. OSPF on the remote router",
            "B. matching mtu values",
            "C. matching hello timers",
            "D. use router ID"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 170,
        text: "Refer to the exhibit The administrator configured route advertisement to a remote low resources router to use only the default route to reach any\nnetwork but failed. Which action resolves this issue?",
        choices: [
            "A. Remove the line with the sequence number 5 from the prefix list",
            "B. Remove the line with the sequence number 10 from the prefix list",
            "C. Change the direction of the distribute-list command from out to in",
            "D. Remove the prefix keyword from the distribute-list command"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 171,
        text: "Refer to the exhibit A network administrator configured NTP on a Cisco router to get synchronized time for system and logs from a unified time\nsource The configuration did not work as desired Which service must be enabled to resolve the issue?",
        choices: [
            "A. Enter the service timestamps log datetime clock-period global command",
            "B. Enter the service timestamps log datetime localtime global command",
            "C. Enter the service timestamps log datetime synchronize global command",
            "D. Enter the service timestamps log datetime console global command"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 172,
        text: "What are two purposes of using IPv4 and VPNv4 address-family configurations in a Layer 3 MPLS VPN? (Choose two.)",
        choices: [
            "A. RD is prepended to the IPv4 route to make it unique",
            "B. The VPNv4 address consists of a 64-bit route distmguisher that is prepended to the IPv4 prefix",
            "C. MP-BGP is used to allow overlapping IPv4 addresses between customers to advertise through the network",
            "D. The IPv4 address is needed to lag the MPLS label",
            "E. The VPNv4 address is used to advertise the MPLS VPN label"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 173,
        text: "which protocol does MPLS use to support traffic engineering ?",
        choices: [
            "A. LDP",
            "B. BGP",
            "C. RSVP",
            "D. TDP"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 174,
        text: "Refer to the exhibit The network administrator configured the branch router for IPv6 on the E 0/0 interface The neighboring router is fully configured\nto meet requirements, but the neighbor relationship is not coming up. Which action fixes the problem on the branch router to bnng the IPv6\nneighbors up?",
        choices: [
            "A. Disable OSPF for IPv4 using the no ospfv3 4 area 0 ipv4 command under the E 0/0 interface",
            "B. Enable the IPv4 address family under the E 0/0 interface by using the address-family ipv4 unicast command",
            "C. Enable the IPv4 address family under the router ospfv3 4 process by using the address-family ipv4 unicast command",
            "D. Disable IPv6 on the E 0/0 interface using the no ipv6 enable command"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 175,
        text: "An engineer coonfigured a DHCP server for Cisco IP phones to download its configuration from a TFTP sever,but the IP phones failed to load the\nconfiguration.what must be configured to resolve the issue ?",
        choices: [
            "A. BOOTP port 67",
            "B. DHCP option 66",
            "C. BOOTP port 68",
            "D. DHCP option 69"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 176,
        text: "Refer to the exhibit The engineer configured and connected Router2 to Router1.The link came up but could not establish a Telnet connection to\nRouter1 IPv6 address of 2001:DB8::1. Which configuration allows Router2 to establish a Telnet connection to Router1?",
        choices: [
            "A. ipv6 unicast-routing",
            "B. permit ICMPv6 on access list INGRESS for Router2 to obtain IPv6 address",
            "C. permit ip any any on access list EGRESS2 on Router1",
            "D. IPv6 address on GigabitEthernet0/0"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 177,
        text: "Refer to the exhibit The OSPF routing protocol is redistributed into the BGP routing protocol, but not all the OSPE routes are distributed into BGP Which action\nresolves the issue?",
        choices: [
            "A. Include the word external in the redistribute command.",
            "B. Use a route-map command to redistribute OSPF external routes defined in an access list.",
            "C. Include the word internal external in the redistribute command.",
            "D. Use a route-map command to redistribute OSPF external routes defined in a prefix list."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 178,
        text: "A customer reports to the support desk that they cannot print from their PC to the local printer id: XXXXXXXX. Which tool must be used to diagnose the issue\nusing Cisco DNA Center Assurance?",
        choices: [
            "A. application trace",
            "B. path trace",
            "C. ACL trace",
            "D. device trace"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 179,
        text: "Refer to the exhibit. The Math and Science departments connect through the corporate IT router, but users in the Math department must not be able to reach the\nScience department and vice versa. Which configuration accomplishes this task?",
        choices: [
            "A. vrf definition Science",
            "B. vrf definition Science",
            "C. vrf definition Science",
            "D. vrf definition Science"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 180,
        text: "An engineer configured Reverse Path Forwarding on an interface and noticed that the routes are dropped when a route lookup fails on that interface.for a prefix\nthat is available in the routing table. Which interface configuration resolves the issue?",
        choices: [
            "A. ip verify unicast source reachable-via rx",
            "B. ip verify unicast source reachable-via any",
            "C. ip verify unicast source reachable-via allow-default",
            "D. ip verify unicast source reachable-via l2-sre"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 181,
        text: "Refer to the exhibit. NTP is confiqured across the network infrastructure and Cisco DNA Center. An NTP issue was reported on the Cisco DNA Center at 17:15.\nWhich action resolves the issue?",
        choices: [
            "A. Reset the NTP server to resolve any synchronization issues for all devices.",
            "B. Check and confiqure NTP on the WLC and synchronize with Cisco DNA Center",
            "C. Check and resolve reachability between Cisco DNA Center and the NTP server.",
            "D. Check and resolve reachability between the WLC and the NTP server."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 182,
        text: "Refer to the exhibit. Which action resolves the failed authentication attempt to the router?",
        choices: [
            "A. Confiqure aaa authorization console global command",
            "B. Confiqure aaa authorization console command on line vty 0 4",
            "C. Configure aaa authorization login command on line console",
            "D. Configure aaa authorization login command on line vty 0 4"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 183,
        text: "Refer to the exhibit. The network administrator configured redistribution on an ASBR to reach to all WAN networks but failed. Which action resolves. the issue?",
        choices: [
            "A. The OSPF process must have a metric when redistributing prefixes from",
            "B. EIGRPD EIGRP must redistribute the 10.0.106.0/24 route instead of usina the network statement.",
            "C. The route map must have the keyword prefix-list to evaluate the prefix list entries",
            "D. The route map EIGRP.>OSPF must have the 10.0.106.0/24 entry to exist in one of the three prefix lists to pass"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 184,
        text: "Refer to the exhibit. Routing protocols are mutually redistributed on R3 and R1. Users report intermittent connectivity to services hosted on the.10.1.1.0/24 prefix.\nSignificant routing update changes are noticed on R3 when the show ip route profile command is run. How must the services be stabilized?",
        choices: [
            "A. The issue with using BGP must be resolved by using another protocol and redistributing it into EIGRP on R3.",
            "B. The issue with using iBGP must be fixed by running eBGP between R3 and R4.",
            "C. The routing loop must be foxed by reducing the admin distance of OSPF from 110 to 80 on R3",
            "D. The routing loop must be fixed by reducing the admin distance of iBGP from 200 to 100 on R3"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 185,
        text: "Refer to the exhibit AS 111 wanted to use AS 200 as the preferred path for 172 20.5.0/24 and AS 100 as the backup. After the configuration, AS 100 is not used\nfor any other routes. Which confiquration resolves the issue?",
        choices: [
            "A. route-mmap SETLP permit 10",
            "B. route-map SETLP permit 10",
            "C. router bgp 111",
            "D. router bap 111"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 186,
        text: "Refer to the exhibit. Troubleshoot and ensure that branch B only ever uses the MPLS B network to reach HQ. Which action achieves this requirement?",
        choices: [
            "A. Increase the local preference for all HQ prefixes received at branch B from the MPLS B network to be higher than the local preferences used on the MPLS A",
            "B. Modify the weight of all HQ prefixes received at branch B from the MPLS B network to be higher than the weights used on the MPLS A network",
            "C. Introduce AS path prepending on the branch A MPLS B network connection so that any HQ advertisements from branch A toward the MPLS B network are",
            "D. Introduce an AS path filter on branch A routers so that only local prefixes are advertised into BGP"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 187,
        text: "Refer to the exhibit. The neighbor relationship is not coming up. Which two configurations bring the adjacency up? (Choose two.)",
        choices: [
            "A. NY",
            "B. LA",
            "C. NY",
            "D. LA",
            "E. LA"
        ],
        answer: "B, E",
        explanation: ""
    },
    {
        id: 188,
        text: "Refer to the exhibit. An engineer confiqured R2 and R5 as route reflectors and noticed that not all routes are sent to R1 to advertise to the eBGP peers. Which\niBGP routers must be confiqured as route reflectors to advertise all routes to restore reachability across all networks?",
        choices: [
            "A. R1 and R4",
            "B. R1 and R5",
            "C. R4 and R5",
            "D. R2 and R5"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 189,
        text: "Which configuration feature should be used to block roque router advertisements instead of using the IPV6 Router Advertisement Guard feature?",
        choices: [
            "A. PVLANs with promiscuous ports associated to route advertisements and isolated ports for nodes",
            "B. IPV4 ACL blocking route advertisements from nonauthorized hosts",
            "C. VACL blocking broadcast frames from nonauthorized hosts",
            "D. PVLANs with community ports associated to route advertisements and isolated ports for nodes"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 190,
        text: "Refer to the exhibit. A network administrator enables DHCP snooping on the Cisco Catalyst 3750-X switch and confiqures the uplink port (Portchannel2) as a\ntrusted port. Clients are not receiving an IP address, but when DHCP snooping is disabled, clients start receiving IP addresses. Which global command resolves\nthe issue?",
        choices: [
            "A. ip dhcp snooping trust",
            "B. ip dhcp snooping",
            "C. no ip dhcp snooping information option",
            "D. ip dhcp relay information trust portchannel2"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 191,
        text: "Refer to the exhibit. A network administrator logs into the router using TACACS+ username and password credentials, but the administrator cannot.run any\nprivileged commands. Which action resolves the issue?",
        choices: [
            "A. Configure TACACS+ synchronization with the Active Directory admin group",
            "B. Configure an authorized IP address for this user to access this router.",
            "C. Configure full access for the username from TACACS+ server",
            "D. Configure the username from a local database"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 192,
        text: "Which two protocols work in the control plane of IP routers across the MPLS cloud? (Choose two.)",
        choices: [
            "A. ECMP",
            "B. LSP",
            "C. LDP",
            "D. MPLS OAM",
            "E. RSVP"
        ],
        answer: "C, E",
        explanation: ""
    },
    {
        id: 193,
        text: "Refer to the exhibit. SanFrancisco and Boston routers are choosing slower links to reach each other despite the direct links being up. Whic configuration fixes the\nissue?",
        choices: [
            "A. All Routers",
            "B. SanFrancisco Router",
            "C. All Routers",
            "D. Boston Router"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 194,
        text: "When determining if a system is capable of support, what is the minimum time spacing required for a BFD control packet to receive once a control packet is\narrived?",
        choices: [
            "A. Desired Min TX Interval",
            "B. Detect Mult",
            "C. Required Min RX Interval",
            "D. Required Min Echo RX Interval"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 195,
        text: "Refer to the exhibit PC-2 failed to establish a Telnet connection to the terminal server. Which confiquration resolves the issue?",
        choices: [
            "A. Gateway-Router(config)#ipv6 access-list Default Access",
            "B. Gateway-Router(confia)#ipv6 access-list Default Access",
            "C. Gateway-Router(confia)#ipv6 access-list Default Access",
            "D. Gateway-Router(confia)#ipv6 access-list Default Access"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 196,
        text: "Which protocol does MPLS use to support traffic engineering?",
        choices: [
            "A. BGP",
            "B. RSVP",
            "C. TDP",
            "D. LDP"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 197,
        text: "How does an MPLS Laver 3 VPN function?",
        choices: [
            "A. set of sites interconnect privately over the Intemet for security",
            "B. multiple customer sites interconnect through a service provider network using customer edge to provider edge connectivity",
            "C. set of sites use multiprotocol BGP at the customer site for aggregation",
            "D. multiple customer sites interconnect through service provider network to create secure tunnels between customer edge devices"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 198,
        text: "Refer to the exhibit. A network administrator added one rauter in the Cisco DNA Center and checked its discovery and health from the Network Heaith\nDashboard.The network administrator observed that the router is still showing up as unmonitored. What must be confiqured on the router to mount it in the Cisco\nDNA Center?",
        choices: [
            "A. Configure router with routing to reach Cisco DNA Center.",
            "B. Configure router with NetFlow data.",
            "C. Configure router with the telemetry data",
            "D. Configure router with SNMPv2c or SNMPv3 traps"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 199,
        text: "Drag and drop the LDP features from the left onto the descriptions on the right\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 200,
        text: "A network administrator is tasked to permit http and https traffic only toward the internet from the User1 laptop to adhere to company’s security policy. The\nadministrator can still ping to www.cisco.com Which interface should the access list 101 be applied to resolve this issue?",
        choices: [
            "A. Interface G0/48 in the incoming direction",
            "B. Interface G0/0 in the outgoing direction.",
            "C. Interface S1/0 in the outgoing direction.",
            "D. Interface G0/0 in the incoming direction."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 201,
        text: "Refer to the exhibit. While troubleshooting an EIGRP neighbor adjacency problem, the network engineer notices that the interface connected to the neighboring\nrouter is not participating in the EIGRP process. Which action resolves the issues?",
        choices: [
            "A. Configure the network command to network 172.16.0.1 0.0.0.0",
            "B. Configure the network command under EIGRP address family vrf CLIENT1",
            "C. Configure EIGRP metrics on interface FastEthernet0/3",
            "D. Configure the network command under EIGRP address family ipv4"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 202,
        text: "Refer to the exhibit Which set of commands restore reachability to loopback0?",
        choices: [
            "A. interface loopback0",
            "B. interface loopback0",
            "C. interface loopback0",
            "D. interface loopback0"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 203,
        text: "Refer to the exhibit. BGP and EIGRP are mutually redistributed on R3, and EIGRP and OSPF are mutually redistributed on R1. Users report packet loss and\ninterruption of service to aplications hosted on the 10.1.1.0/24 prefix. An engineer tested the link from R3 to R4 with no packet loss present but has noticed\nfrequent routing changes on R3 when running the debug ip route command. Which action stabilizes the service?",
        choices: [
            "A. Reduce trequent OSPF SPF calculations on R3 that cause a high CPU and packet loss on taffic traversing R3",
            "B. Repeat the test from R4 using ICMP ping on the local 10.1.1 0/24 prefx, and fx any Layer 2 errors on the host or switch side of the subnet.",
            "C. Tag the 10 1.1.0/24 prefix and deny the prefix from being redistributed into OSPF on R1.",
            "D. Place an OSPF distribute-list outbound on R3 to block the 10.1.0/24 prefix from being advertised back to R3."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 204,
        text: "Users report issues with reachability between areas as soon as an engineer configured summary routes between areas in a multiple area OSPF autonomous\nsystem. Which action resolves the issue?",
        choices: [
            "A. Configure the summary-address command on the ABR",
            "B. Contigure the area range command on the ASBR.",
            "C. Configure the summary-address command on the ASBR.",
            "D. Configure the area range command on the ABR"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 205,
        text: "Rofer to the exhibit When the FastEthemet0/1 goes down, the route to 172.29 0.0/16 via 192 168 253.2 is not installed in the RIB. Which action resolves the\nissue?",
        choices: [
            "A. Configure reported distance greater than the feasible distance",
            "B. Configure feasible distance greater than the successor's feasible distance.",
            "C. Configure reported distance greater than the successor's feasible distance",
            "D. Configure feasible distance greater than the reported distance."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 206,
        text: "Refer to the exhibit. A network is under a cyberattack. A network engineer connected to R1 by SSH and enabled the terminal monitor via SSH session to find the\nsource and destination of the attack. The session was flooded with messages,which made it impossible for the engineer to troubleshoot the issue. Which\ncommand resolves this issue on R1?",
        choices: [
            "A. (config)#no terminal monitor",
            "B. #terminal no monitor",
            "C. #no terminal monitor",
            "D. (config)#terminal no monitor"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 207,
        text: "Refer to the exhibit Which action resolves the adjacency issue?",
        choices: [
            "A. Match the hello interval timers",
            "B. Match the authentication keys.",
            "C. Configure the same autonomous system numbers.",
            "D. Configure the sarme EIGRP process IDs."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 208,
        text: "How is VPN routing information distributed in an MPLS network?",
        choices: [
            "A. it is controlled through the use of RD.",
            "B. It is established using VPN lPsec peers.",
            "C. The top level of the customer data packet directs it to the correct CE device.",
            "D. it is controlled using of VPN target communities."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 209,
        text: "Refer to the exhibit.\nA network administrator is trying to access a branch router using TACACS+ username and password credentials, but the administrator cannot log in to the router\nbecause the WAN connectivity is down. The branch router\nhas following AAA configuration.\naaa new-model\naaa authorization commands 15 default group tacacs+\naaa accounting commands 1 default stop-only group tacacs+\naaa accounting commands 15 default stop-only group tacacs+\ntacacs-server host 10.100.50.99\ntacacs-server key CI$co123\nWhich command will resolve this problem when WAN connectivity is down?",
        choices: [
            "A. aaa authentication login default group tacacs+ local",
            "B. aaa authentication login console group tacacs+ enable",
            "C. aaa authentication login default group tacacs+ console",
            "D. aaa authentication login default group tacacs+ enable"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 210,
        text: "Refer to the exhibit. A network administrator has developed a Python script on the local Linux machine and is trying to transfer it to the router. However, the\ntransfer fails. Which action resolves this issue?\nadmin@liunx:-$ scp script.py admin@198.51.100.64:script.py\nPssword:\nAdministratively disabled.\nadmin@linux:-$ Connection to 198.51.100.64 closed by remote\nhost.",
        choices: [
            "A. The SSH access must be allowed on the VTY lines using the transport input ssh command",
            "B. The SSH service must be enabled with the crypto key generate rsa command",
            "C. The Python interpreter must first be enabled with the guestshell enable command",
            "D. The SCP service must be enabled with the ip scp server enable command"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 211,
        text: "Refer to the exhibit. An engineer must establish multipoint GRE tunnels between hub router R6 and branch routers R1, R2, and R3.Which configuration\naccomplishes this task on R1?",
        choices: [
            "A. interface Tunnel 1",
            "B. interface Tunnel 1",
            "C. interface Tunnel 1",
            "D. interface Tunnel1"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 212,
        text: "Which mechanism must be chosen to optimize the reconvergence time for OSPF at company location XXXXX that is less CPU-intensive than reducing the hello\nand dead timers?",
        choices: [
            "A. Dead Peer Detection keepalives",
            "B. BFD",
            "C. OSPF demand circuit",
            "D. SSO"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 213,
        text: "Refer to the exhibit Anetwork administator reviews the branch router console log to troubleshoot the OSPF adjacency issue with the DR router Whnich action\nresolves this issue?",
        choices: [
            "A. Configure the WAN interface for DR site in the related OSPF area",
            "B. Advertise the branch WAN interface matching subnet for the DR site.",
            "C. Stabilize the DR site flapping linik to establish OSPF adjacency",
            "D. Configure matching hello and dead intervals between sites."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 214,
        text: "Refer to the exhibit. The network administrator can see the DHCP discovery packet in R1, but R2 is not replying to the DHCP request. The R1 related interface is\nconfigured with the DHCP helper address. If the PC is directly connected to the Fa0/1 interface on R2, the DHCP server assigns as IP address from the DHCP\npool to the PC. Which two commands resolve this issue? (Choose two.)",
        choices: [
            "A. service dhcp command on R1",
            "B. ip dhcp relay information enable command on R1",
            "C. service dhcp-relay command on R1",
            "D. ip dhcp relay information trust-all command on R2",
            "E. ip dhcp option 82 command on R2"
        ],
        answer: "A, D",
        explanation: ""
    },
    {
        id: 215,
        text: "Refer to the exhibit. An engineer has configured policy-based routing and applied the configuration to the correct interface. How is the configuration applied to the\ntraffic that matches the access list?",
        choices: [
            "A. It is dropped.",
            "B. It is sent to 209.165.202.129",
            "C. It is sent to 209.165.202.131",
            "D. It is forwarded using the routing table lookup."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 216,
        text: "Refer to the exhibit. AS65510 iBGP is configured for directly connected neighbors. R4 cannot ping or traceroute network 192.168.100.0/24. Which action resolves\nthis issue?",
        choices: [
            "A. Configure R4 as a route reflector server and configure R2 and R3 as route reflector clients.",
            "B. Configure R1 as a route reflector server and configure R4 as a route reflector client.",
            "C. Configure R4 as a route reflector server and configure R1 as a route reflector client.",
            "D. Configure R1 as a route reflector server and configure R2 and R3 as route reflector clients."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 217,
        text: "A network administrator is troubleshooting a high utilization issue on the route processor of a router that was reported by NMS. The administrator logged into the\nrouter to check the control plane policing and observed that the BGP process is dropping a high number of routing packets and causing thousands of routes to\nrecalculate frequently. Which solution resolves this issue?",
        choices: [
            "A. Shape the cir for BGP, conform-action transmit, and exceed action transmit",
            "B. Shape the pir for BGP, conform-action set-prec-transmit, and exceed action set-frde-transmit.",
            "C. Police the cir for BGP, conform-action transmit, and exceed action transmit.",
            "D. Police the pir for BGP, conform-action set-prec-transmit, and exceed action set-clp-transmit."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 218,
        text: "Refer to the exhibit. An engineer configured BGP between routers R1 and R3. The BGP peers cannot establish neighbor adjacency to be able to exchange routes.\nWhich configuration resolves this issue?",
        choices: [
            "A. R1",
            "B. R1",
            "C. R3",
            "D. R3"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 219,
        text: "Refer to the exhibit. An engineer is troubleshooting failed access by contractors to the business application server via Telnet or HTTP during the weekend. Which\nconfiguration resolves the issue?",
        choices: [
            "A. R4",
            "B. R1",
            "C. R4",
            "D. R1"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 220,
        text: "Refer to the exhibit. Which two commands provide the administrator with the information needed to resolve the issue? (Choose two.)",
        choices: [
            "A. debug snmp packet",
            "B. show snmp user",
            "C. debug snmpv3 engine-id",
            "D. debug snmp engine-id",
            "E. show snmpv3 user"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 221,
        text: "Refer to the exhibit. An engineer configured SNMP communities on the Core_Sw1, but the SNMP server cannot obtain information from Core_Sw1. Which\nconfiguration resolves this issue?",
        choices: [
            "A. access-list 20 permit 10.221.10.11",
            "B. access-list 20 permit 10.221.10.12",
            "C. snmp-server group NETADMIN v3 priv read NETVIEW write NETADMIN access 22",
            "D. snmp-server group NETVIEW v2c priv read NETVIEW access 20"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 222,
        text: "Refer to the exhibit. AS111 is receiving its own routes from AS200 causing a loop in the network. Which configuration provides loop prevention?",
        choices: [
            "A. router bgp 111",
            "B. router bgp 111",
            "C. router bgp 111",
            "D. router bgp 111"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 223,
        text: "What is a characteristic of Layer 3 MPLS VPNs?",
        choices: [
            "A. LSP signaling requires the use of unumbered IP links for traffic engineering.",
            "B. Traffic engineering supports multiple IGP instances",
            "C. Traffic engineering capabilities provide QoS and SLAs.",
            "D. Authentication is performed by using digitat certificates or preshared keys."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 224,
        text: "Refer to the exhibit. R1 is configured with IP SLA to check the availability of the server behind R6 but it kept failing Which configuration resolves the issue?",
        choices: [
            "A. R6(config)# ip sla responder",
            "B. R6(config)# ip sla responder udp-echo ip address 10.10.10.1 port 5000",
            "C. R6(config)# ip access-list extended DDOS",
            "D. R6(config)# ip access-list extended DDOS"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 225,
        text: "An engineer is implementing a coordinated change with a server team. As part of the change. the engineer must configure interface GigabitEthernet2 in an\nexisting VRF \"RED\" then move the interface to an existing VRF \"BLUE\" when the server teamis ready. The engineer\nconfigured interface GigabitEthemet2 in VRF \"RED\"\ninterface GigabitEthernet2\nvrf forwarding RED\nip address 10.0.0.0 255.255.255.254\nnegotiation auto\nWhich configuration completes the change?",
        choices: [
            "A. interface GigabitEthernet2",
            "B. interface GigabitEthernet2",
            "C. interface GigabitEthernet2",
            "D. interface GigabitEthernet2"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 226,
        text: "Refer to the exhibit An engineer has configured R1 as EIGRP stub router. After the configuration, router R3 failed to reach to R2 loopback address Which action\nadvertises R2 loopback back into the R3 routing table?",
        choices: [
            "A. Add a static route for R2 loopback address in R1 and redistributeit to advertise to R3.",
            "B. Use a leak map on R3 that matches the required prefix and apply it with the EIGRP stub feature.",
            "C. Add a static null route for R2 loopback address in R1 and redistribute it to advertise to R3",
            "D. Use a leak map on R1 that matches the required prefix and apply it with the distribute list command toward R3."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 227,
        text: "Refer to the exhibit While monitoring VTY access to a router an engineer notices that the router does not have any fiter and anyone can access the router with\nusemame and password even though an ACL is configured. Which command resolves this issue?",
        choices: [
            "A. ipv6 traffic-filter INTERNET in",
            "B. access-class INTERNET in",
            "C. ipv6 access-class INTERNET in",
            "D. ip access-group INTERNET in"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 228,
        text: "Refer to the exhibit. A network administrator is troubleshooting IPv6 address assignment for a DHCP client that is not getting an IPv6 adress from the server\nWhich configuration retrieves the client lPv6 address from the DHCP server?\nipv6 dhcp server: .\nipv6 unicast routing\nint e0/1\nipv6 enable\nipv6 add 20011:1/64\nipv6 nd other config-flag\nno shut\nipv6 dhcp server IPv6Pool\n!\nipv6 dhcp pool IPv6Pool\ndns-server 2002:555.:1\ndomain-name my:net\nipv6 ahcp client:\ninterface Ethernet0/1\nno ip address\nipv6 address dhcp\nipv6 enable\nno shut",
        choices: [
            "A. service dhcp command on DHCP server",
            "B. ipv6 dhcp relay-agent command on the interface",
            "C. ipv6 dhcp server automatic command on DHCP server",
            "D. ipv6 address autoconfig command on the intertace"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 229,
        text: "Refer to the exhibit. R5 should not recerve any routes originated in the EIGRP domain Which set of configuration changes removes the EIGRP routes from the R5\nrouting table to fix the issue?\nR2\nroute-map E20 permit 10\nset tag 111\n!\nrouter eigrp 111\nredistribute ospf 1 metric 10 10 10 10 10\n!\nrouter ospf 1\nredistribute eigrp 111 route-map E20 subnets\nR4\nrouter rip\nredistribute ospf 1 metric 1",
        choices: [
            "A. route-map O2R deny 10",
            "B. R2",
            "C. R4",
            "D. R4"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 230,
        text: "Reter to the exhibit. An engineer is troubleshooting a TACACS problem Which action resolves the issue?",
        choices: [
            "A. Configure a matching TACACS server IP",
            "B. Generate authentication from a relative source interface",
            "C. Configure a matching preshared key",
            "D. Apply a configured AAA profile to the VTY"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 231,
        text: "Refer to the exhibit An engineer configured NetFlow on R1 but the flows do not reach the NMS sever from R1. Which configuration resives this issue?",
        choices: [
            "A. R1(config)#flow monitor FlowMonitort",
            "B. R1(config)#interface Ethernet0/1",
            "C. R1(confg)#flow exporter FlowExporter1",
            "D. R1(config)#interface Ethernet0/0"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 232,
        text: "Refer to the exhibit. An engineer configured IP SLA on R1 to avoid the ISP link flapping problem, but it is not working as designed. IP SLA should wait 30 seconds\nbefore switching traffic to a secondary connection and then revert to theprimary link after waiting 20 seconds, when the primary link is available and stabilized.\nWhich configuration resolves theissue?",
        choices: [
            "A. R1(config)#ip sla 700",
            "B. R1(config)#ip sla 700",
            "C. R1(config)#track 700 ip sla 700",
            "D. R1(config)#track 700 ip sla 700"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 233,
        text: "Refer to the exhibit. Which configuration allows spoke-to-spoke communication using loopback as a tunnel source?",
        choices: [
            "A. Configure crypto isakmp key cisco address 0.0.0.0 on the hub.",
            "B. Configure crypto isakmp key cisco address 200.1.0.0 255.255.0.0 on the hub.",
            "C. Configure crypto isakmp key cisco address 0.0.0.0 on the spokes",
            "D. Configure crypto isakmp key cisco address 200.1.0.0 255.255.0.0 on the spokes"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 234,
        text: "Refer to the exhibit A network administrator sets up an OSPF routing protocol for a DMVPN network on the hub router Which configuration command is required to\nestablish a DMVPN tunnel with multiple spokes?",
        choices: [
            "A. ip ospf network point-to-multipoint on both spoke routers",
            "B. ip ospf network point-to-point on the hub router",
            "C. ip ospf network point-to-multipoint on one spoke router",
            "D. ip ospf network point to-point on both spoke routers"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 235,
        text: "Refer to the exhibit. The Intermnet tafic should always prefer Site A ISP-1 if the link and BGP connection are up; otherwise, all Internet traffic should goto ISP-2\nRedistribution is configured between BGP and OSPF routing protocols, and it is not working as expected What action resolves the issue?",
        choices: [
            "A. Set metric-type 2 at Site A RTR1 and set metric-type 1 at Site-B RTR2",
            "B. Set OSPF Cost 100 at Site-A RTR1 and set OSPF Cost 200 at Site-B RTR2",
            "C. Set OSPF Cost 200 at Site-A RTR1 and set OSPF Cost 100 at Site-B RTR2",
            "D. Set metric-type 1 at Site A RTR1 and set metric-type 2 at Site-B RTR2"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 236,
        text: "Reter to the exhibit. The AP status from Cisco DNA Center Assurance Dashboard shows some physical connectrity issues from access switch interface G1/0/14\nWhich command generates the diagnostic data to resolve the physical connectvity issues ?",
        choices: [
            "A. test cable-diagnostics tdr interface GigabitEthernet1/0/14",
            "B. check cable-diagnostics tdr interface GigabitEthernet1/0/14",
            "C. show cable-diagnostics tdr interface GigabitEthernet1/0/14",
            "D. verify cable-diagnostics tar interface GigabitEtheret1/0/14"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 237,
        text: "An engineer creates a Cisco DNA Center cluster with three nodes. but all the services are running on one host node. Which action resolves this issue?",
        choices: [
            "A. Restore the link on the switch interface that is connected to a cluster link on the Cisco DNA Center.",
            "B. Click the master host node with all the services and select services to be moved to other hosts",
            "C. Enable service distribution from the Systems 360 page.",
            "D. Click system updates, and upgrade to the latest version of Cisco DNA Center."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 238,
        text: "R1 and R2 are configured as eBGP neighbors. R1 is in AS100 and R2 is in AS200. R2 is advertising these networks to R1:\n172.16.16.0/20\n172.16.3.0/24\n172.16.4.0/24\n192.168.1.0/24\n192.168.2.0/24\n172.16.0.0/16\nThe network administrator on R1 must improve convergence by blocking all subnets of 172.16.0.0/16 major network with a mask lower than 23 from coming in.\nWhich set of configurations accomplishes the task on R1?",
        choices: [
            "A. ip prefix-list PL-1 deny 172.16.0.0/16 le 23",
            "B. ip prefix-list PL-1 deny 172.16.0.0/16 ge 23",
            "C. access-list 1 deny 172.16.0.0 0.0.254.255",
            "D. ip prefix-list PL-1 deny 172.16.0.0/16"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 239,
        text: "Refer to the exhibit An engineer must block access to the console ports for all corporate remote Cisco devices based on the recent corporate security policy but\nthe secunty team stil can connect through the console port Which configuration on the console port resolves the issue?",
        choices: [
            "A. transport input telnet",
            "B. login and password",
            "C. no exec",
            "D. exec 0 0"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 240,
        text: "The network admnistrator configured R1 to authenticate Telnet connections based on Cisco ISE using TACACS+. ISE has been configured with an IP address of\n192.168.1.5 and with a network device pointing toward R1 (192.168.1.1) with a shared secret password of Cisco123.\nThe administrator has configured this on R1:\naaa new-model\n!\ntacacs server ISE1\naddress ipv4 192.168.1.5\nkey Cisco123\n!\naaa group server tacacs+ TAC-SERV\nserver name ISE1\n!\naaa authentication login telnet group TAC-SERV\nThe network administrator cannot authenticate to R1 based on ISE Which configuration fixes the issue?",
        choices: [
            "A. ip tacacs-server host 192.168.1.5 key Cisco123",
            "B. line vty 0 4",
            "C. line vty 0 4",
            "D. tacacs-server host 192.168.1.5 key Cisco123"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 241,
        text: "Refer to the exhibit. A network administrator successfully logs in to a switch using SSH from a RADIUS server. When the network administrator uses a console\nport to access the switch, the RADIUS server returns shell:priv-lvl=15\" and the switch asks to enter the enable command When the command is entered, it gets\nrejected. Which command set is used to troubleshoot and resolve this issue?",
        choices: [
            "A. line con 0",
            "B. line con 0",
            "C. line con 0",
            "D. line con 0"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 242,
        text: "Refer to the exhibit. The network administrator configured the network to connect two disjointed networks and all the connectivity is up except the virtual link, which\ncauses area 250 to be unreachable. Which two configurations resolve this issue? (Choose two.)",
        choices: [
            "A. R4",
            "B. R4",
            "C. R2",
            "D. R2",
            "E. R2"
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 243,
        text: "Which mechanism provides traffic segmentation within a DMVPN network?",
        choices: [
            "A. RSVP",
            "B. BGP",
            "C. MPLS",
            "D. IPsec"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 244,
        text: "What are two characteristics of IPv6 Source Guard? (Choose two.)",
        choices: [
            "A. requires that validate prefix be enabled",
            "B. recovers missing binding table entries",
            "C. requires the user to configure a static binding",
            "D. used in service provider deployments to protect DDoS attacks",
            "E. requires IPv6 snooping on Layer 2 access or trunk ports"
        ],
        answer: "C, E",
        explanation: ""
    },
    {
        id: 245,
        text: "How does an MPLS Layer 3 VPN differentiate the IP address space used between each VPN?",
        choices: [
            "A. by RD",
            "B. by address-family",
            "C. by MP-BGP",
            "D. by RT"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 246,
        text: "Refer to the exhibit. R1 is configured with uRPF, and ping to R1 is failing from a source present in the R1 routing table via the GigabitEthernet 0/0 interface. Which\naction resolves the issue?",
        choices: [
            "A. Remove the access list from the interface GigabitEthernet 0/0.",
            "B. Modify the uRPF mode from strict to loose.",
            "C. Enable Cisco Express Forwarding to ensure that uRPF is functioning correctly",
            "D. Add a floating static route to the source on R1 to the GigabitEthernet 0/1 interface"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 247,
        text: "Which OSI model is used to insert an MPLS label?",
        choices: [
            "A. between Layer 5 and Layer 6",
            "B. between Layer 1 and Layer 2",
            "C. between Layer 3 and Layer 4",
            "D. between Layer 2 and Layer 3"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 248,
        text: "Which function does LDP provide in an MPLS topology?",
        choices: [
            "A. It enables a MPLS topology to connect multiple VPNs to P routers.",
            "B. It provides hop-by-hop fonwarding in an MPLS topology for LSRs",
            "C. It exchanges routes for MPLS VPNS across different VRFS.",
            "D. It provides a means for LSRs to exchange IP routes."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 249,
        text: "er to the exhibit. The branch router is configured with a default route toward the internet and has no routes confgured for the HQ site that is connected through\ninterface G2/0. The HQ router is fully configured and does not require changesWhich configuration on the branch router makes the intranet website (TCP port 80)\navailable to the branch office users?",
        choices: [
            "A. access-list 100 permit tcp any host intranet-webserver-ip eq 80",
            "B. access-list 101 permit tcp any any eq 80",
            "C. access-list 101 permit tcp any any eq 80",
            "D. acceslist 100 permit tcp host intranet-webserverip eq 80 any"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 250,
        text: "Refer to the exhibit. An engineer configured NetFlow on R1 but the NMS server cannot see the flow from R1 Which configuration resolves the issue?",
        choices: [
            "A. flow monitor Flowmonitor1",
            "B. flow exporter FlowAnalyzer1",
            "C. interface Ethernet0/1",
            "D. interface Ethernet0/0"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 251,
        text: "Refer to the exhibit An engineer configured NetFlow on R1 but the NMS server cannot see the flow from ethernet 0/0 of R1. Which configuration resolves the\nissue?",
        choices: [
            "A. flow monitor Flowmonitor1",
            "B. interface Ethernet0/1",
            "C. interface Ethernet0/0",
            "D. flow exporter FlowAnalyzer1"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 252,
        text: "R2#show ip route eigrp | include 10.1.\nD 10.1.1.0/ 24\nR3#show ip route eigrp | include 10.1.\nD 10.1.1.0/ 24\nRefer to the exhibit. An engineer configures DMVPN and receives the hub loacation prefix of 10.1.1.0/24 on R2 and R3. The R3 prefix of 10.1.3.0/24 is not\nreceived on R2, and the R2 prefix 10.1.2.0/24 is not received on R3. Which action resolves the issue?",
        choices: [
            "A. Split honzon prevents the routes from being advertised between spoke routers. It should be disabled with the command no ip split-horizon eigrp 10 on the",
            "B. There is no spoke-to-spoke connection DMVPN configuration should be modified to enable a tunnel connection between R2 and R3 and neighbor relationship",
            "C. Split horizon prevents the routes from being advertised between spoke routers It should be disabled with the no ip split-horizon eigrp 10 command on the",
            "D. There is no spoke-to-spoke connection DMVPN configuration should be modified with a manual neighbor relationship configured between R2 and R3 and"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 253,
        text: "Refer to the exhibit. The ISP router is fully configured for customer A and customer B using the VRF-Lite feature. What is the minimum configuration required for\ncustomer A to communicate between routers A1 and A2?",
        choices: [
            "A. A1:",
            "B. A1:",
            "C. A1:",
            "D. A1:"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 254,
        text: "The network administator configured R1 for Control Plane Policing so that the inbound Telnet traffic is policed to 100 kbps. This policy must not apply to traffic\ncoming in from 10.1.1.1/32 and 172.16.1.1/32 The administrator has configured\nthis:\naccess-list 101 permit tcp host 10.1.1.1 any eq 23\naccess-list 101 permit tcp host 172.16.1.1 any eq 23\n!\nclass-map CoPP-TELNET\nmatch access-group 101\n!\npolicy-map PM-CoPP\nclass CoPP-TELNET\npolice 100000 conform transmit exceed drop\n!\ncontrol-plane\nservice-policy input PM-CoPP\nThe network administrator is not getting the desired results. Which set of configurations resolves this issue?",
        choices: [
            "A. no access-list 101",
            "B. no access-list 101",
            "C. control-plane",
            "D. control-plane"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 255,
        text: "Refer to the exhibit. An OSPF neighbor relationship between R2 and R3 is showing stuck in EXCHANGE/EXSTART state. The neighbor is established between\nR1 and R2. The network engineer can ping from R2 to R3 and vice versa, but the neighbor is still down. Which action resolves the issue?",
        choices: [
            "A. Restore the Layer 2/Layer 3 conectivity issue in the ISP network.",
            "B. Match MTU on both router interfaces or ignore MTU.",
            "C. Administrative \"shut then no shut\" both router interfaces",
            "D. Enable OSPF on the interface, which is required."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 256,
        text: "Refer to the exhibit. An engineer is troubleshooting a failed Telnet session from PC to the DHCP server. Which action resolves the issue?",
        choices: [
            "A. Remove sequence 30 and add it back to the IPv6 traffic filter as sequence 5.",
            "B. Remove sequence 20 and add it back to the IPv6 traffic filter as sequence 5.",
            "C. Remove sequence 10 to add the PC source IP address and add it back as sequence 10.",
            "D. Remove sequence 20 for sequence 40 in the access list to allow Telnet."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 257,
        text: "Refer to the exhibit. The administrator noticed that the connection was flapping between the two ISPs instead of switching to ISP2 when the ISP1 failed. Which\naction resolves the issue?",
        choices: [
            "A. Include a valid source-interface keyword in the icmp-echo statement.",
            "B. Reference the track object 1 on the default route through ISP2 instead of ISP1.",
            "C. Modifty the static routes to refer both to the next hop and the outgoing intertace.",
            "D. Modify the threshold to match the administrative distance of the ISP2 route."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 258,
        text: "Refer to the exhibit. After a security audit, the administrator implemented an ACL in the route reflector. The RR became unreachable from any router in the\nnetwork. Which two actions resolve the issue? (Choose two.)",
        choices: [
            "A. Enable the ND proxy feature on the default gateway.",
            "B. Configure a link-local address on the Ethernet0/1 interface.",
            "C. Permit ICMPv6 neighbor discovery taffic in the ACL.",
            "D. Remove the ACL entry 80.",
            "E. Change the next hop of the default route to the link-local address of the default gateway."
        ],
        answer: "B, C",
        explanation: ""
    },
    {
        id: 259,
        text: "Refer to the exhibit. Which command must be configured to make VRF CCNP work?",
        choices: [
            "A. interface Loopback0",
            "B. interface Loopback0",
            "C. interface Loopback0",
            "D. interface Loopback0"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 260,
        text: "A network administrator performed a Compact Flash Memory upgrade on a Cisco Catalyst 6509 Switch. Everything is functioning normally except SNMP, which\nwas configured to monitor the bandwidth of key interfaces but the interface indexes are changed. Which global configuration resolves the issue?",
        choices: [
            "A. snmp-server ifindex persist",
            "B. snmp ifindex permanent",
            "C. snmp ifindex persist",
            "D. snmp-server ifindex permanent"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 261,
        text: "IPv6 is enabled in the infrastructure to support customers with an IPv6 network over WAN and to connect the head office to branch offices in the local network One\nof the customers is already running IPv6 and wants to enable IPv6 over the DMVPN network infrastructure between the headend and branch sites. Which\nconfiguration command must be appied to establish an mGRE IPv6 tunnel neighborship?",
        choices: [
            "A. ipv6 nhrp holdtime 30",
            "B. tunnel protection mode ipv6",
            "C. tunnel mode gre multipoint ipv6",
            "D. ipv6 unicast-routing"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 262,
        text: "RR\nrouter bgp 100\nneighbor 10.1.1.1 remote-as 100\nneighbor 10.1.2.2 remote-as 100\nneighbor 10.1.3.3 remote-as 100\nASBR3\nrouter bgp 100\nneighbor 10.1.1.4 remote- as 100\nASBR3\nrouter bgp 100\nneighbor 10.1.2.4 remote- as 100\nASBR4\nrouter bgp 100\nneighbor 10.1.3.4 remote-as 100\nRefer to the exhibit The administrator configured the network devices for end-to end reachability, but the ASBRs are not propagating routes to each other. Which\nset of configurations resolves this issue?",
        choices: [
            "A. router bgp 100",
            "B. router bgp 100",
            "C. router bgp 100",
            "D. router bgp 100"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 263,
        text: "A company is expanding business by opening 35 branches over the Internet A network engineer must configure DMVPN at the branch routers to connect with the\nhub router and allow NHRP to add spoke routers securely to the multicast NHRP mappings automatically. Which configuration meets this requirement at the hub\nrouter?",
        choices: [
            "A. interface Tunnel0",
            "B. interface Tunnel0",
            "C. interface Tunnel0",
            "D. interface Tunnel0"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 264,
        text: "What is an advantage of implementing BFD?",
        choices: [
            "A. BFD provides faster updates for any flapping route.",
            "B. BFD provides millisecond failure detection.",
            "C. BFD is deployed without the need to run any routing protocol.",
            "D. BFD provides better capabilities to maintain the routing table."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 265,
        text: "What is a function of IPv6 Source Guard?",
        choices: [
            "A. It works with address glean or ND to find existing addresses.",
            "B. It inspects ND and DHCP packets to build an address binding table.",
            "C. It denies traffic from known sources and allocated addresses.",
            "D. It notifies the ND protocol to inform hosts if the traffic is denied by it."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 266,
        text: "What is the purpose of the DHCPv6 Guard?",
        choices: [
            "A. It messages between a DHCPv6 server and a DHCPv6 client (or relay agent).",
            "B. It shows that clients of a DHCPv6 server are affected.",
            "C. It blocks DHCPv6 messages from relay agents to a DHCPv6 server.",
            "D. It allows DHCPv6 reply and advertisements from (rogue) DHCPv6 servers"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 267,
        text: "Which type of ports are protected by IPv6 Source Guard?",
        choices: [
            "A. trunk ports",
            "B. Layer 3 ports",
            "C. Layer 2 ports",
            "D. access ports"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 268,
        text: "Reterto the exhibit A network adminstrator is troubleshooting an authentcation failure issue during login into R2 using a RADIUS server user account. The network\nadministrator can ping the RADIUS server, but the user access to SSH is denied on R2. Which action resolves the issue?",
        choices: [
            "A. Modily the aaa command to replace TACACS+ with RADIUS",
            "B. Remove ''local'' from the aaa authentication command",
            "C. Enable AAA authorzation to allow SSH connections",
            "D. Conigure the usemame in RADIUS server database"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 269,
        text: "What does the MP-BGP OPEN message contain?",
        choices: [
            "A. MPLS labels and the IP address of the router that receives the message",
            "B. the version number and the AS number to which the router belongs",
            "C. IP routing information and the AS number to which the router belongs",
            "D. NLRI, path attributes, and IP addresses of the sending and receiving routers"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 270,
        text: "What statement about route distinguishes in an MPLS network is true?",
        choices: [
            "A. Route distinguishes make a unique VPNv4 address across the MPLS network.",
            "B. Route distinguishers allow multiple instances of a routing table to coexist within the edge router.",
            "C. Route distinguishes are used for label bindings",
            "D. Route distinguishes define which prefixes are imported and exported on the edge router"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 271,
        text: "Refer to the exhibit. An engineer configures the router 10.1.100.10 for EIGRP autosummarization so that R1 should receive the summary route of 10.0.0.0/8.\nHowever, R1 receives more specific /24 routes. Which action resolves this issue?",
        choices: [
            "A. Router R1 should configure ip summary address eigrp (AS number) 10.0.0.0 255.0.0.0 for the R1 Fast Ethernet 0/0 connected interface.",
            "B. Router R1 should configure ip route 10.0.0.0 255.0.0.0 null 0 for the routes that are received on R1.",
            "C. Router 10.1.100.10 should configure ip route 10.0.0.0 255.0.0.0 null 0 for the routes that are summarized toward R1.",
            "D. Router 10.1.100.10 should configure ip summary address eigrp (AS number) 10.0.0.0 255.0.0.0 for the R1 Fast Ethernet 0/0 connected interface."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 272,
        text: "Refer to the exhibit. Although summarization is configured for R1 to receive 10.0.0.0/8. more specific routes are received by R1. How should the 10.0.0.0/8\nsummary route be received from the neighbor, attached to R1 via Fast Ethernet0/0 interface?",
        choices: [
            "A. R1 should configure the ip summary-address eigrp <AS number> 10.0.0.0.255.0.0.0 command under the Fast Ethernet 0/0 interface.",
            "B. The summarization condition is not met Router 10 1 100.10 requires a route for 10 0.0.0/8 that points to null 0",
            "C. The summarization condition is not met. The network 10.1.100.0/24 should be changed to 172.16.0.0/24.",
            "D. R1 should configure the ip summary-address eigrp <AS number> 10.0.0.0 0.0.0.255 command under the Fast Ethernet 0/0 interface"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 273,
        text: "Refer to the exhibit. A junior engineer configured SNMP to network devices. Malicious users have uploaded different configurations to the network devices using\nSNMP and TFTP servers. Which configuration prevents changes from unauthorized NMS and TFTP servers?",
        choices: [
            "A. access-list 20 permit 10.221.10.11",
            "B. access-list 20 permit 10.221.10.11",
            "C. access-list 20 permit 10.221.10.11",
            "D. access-list 20 permit 10.221.10.11"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 274,
        text: "Refer to the exhibit. An engineer configured BGP and wants to select the path from 10.77.255.57 as the best path instead of current best path. Which action\nresolves the issue?",
        choices: [
            "A. Configure AS_PATH prepend for the current best path",
            "B. Configure higher MED to select as the best path",
            "C. Configure AS_PATH prepend for the desired best path",
            "D. Configure lower LOCAL_PREF to select as the best path"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 275,
        text: "The network administrator configured CoPP so that all HTTP and HTTPS traffic from the administrator device located at 172.16 1.99 toward the router CPU is\nlimited to 500 kbps. Any traffic that exceeds this limit must be dropped. CoPP failed to capture the desired traffic and the CPU load is getting higher. Which two\nconfigurations resolve the issue? (Choose two.)\naccess-list 100 permit ip host 172.16.1.99 any\n!\nclass-map CM-ADMIN\nmatch access-group 100\n!\npolicy-map PM-COPP\nclass CM-ADMIN\npolice 500000 conform-action transmit\n!\ninterface E0/0\nservice-policy input PM-COPP",
        choices: [
            "A. interface E0/0",
            "B. policy-map PM-COPP",
            "C. no access-list 100",
            "D. no access-list 100",
            "E. policy-map PM-COPP"
        ],
        answer: "A, D",
        explanation: ""
    },
    {
        id: 276,
        text: "Refer to the exhibit. A prefix list is created to filter routes inbound to an EIGRP process except for network 10 prefixes After the prefix list is applied no network 10\nprefixes are visible in the routing table from EIGRP. Which configuration resolves the issue?\nR1(config)#ip prefix-list EIGRP seq 10 deny 0.0.0.0/0 le 32\nR1(config)#ip prefix-list EIGRP seq 20 permit 10.0.0.0/8\nR1(config)#router eigrp 10\nR1(config-router)#distribute-list prefix EIGRP in Ethernet0/0\nR1#show ip route eigrp",
        choices: [
            "A. ip prefix-list EIGRP seq 20 permit 10.0.0.0/8 ge 9.",
            "B. ip prefix-list EIGRP seq 10 permit 0.0.0.0/0 le 32",
            "C. ip prefix-list EIGRP seq 5 permit 10.0.0.0/8 ge 9 no ip prefix-list EIGRP seq 20 permit 10.0.0.0/8",
            "D. ip prefix-list EIGRP seq 20 permit 10.0.0.0/8 ge 9 ip prefix-list EIGRP seq 10 permit 0.0.0.0/0 le 32"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 277,
        text: "What are the two prerequisites to enable BFD on Cisco routers? (Choose two)",
        choices: [
            "A. A supported IP routing protocol must be configured on the participating routers.",
            "B. OSPF Demand Circuit must run BFD on all participating routers.",
            "C. ICMP must be allowed on all participating routers.",
            "D. UDP port 1985 must be allowed on all participating routers",
            "E. Cisco Express Forwarding and IP Routing must be enabled on all participating routers."
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 278,
        text: "Which two solutions are used to overcome a flapping link that causes a frequent label binding exchange between MPLS routers? (Choose two)",
        choices: [
            "A. Create link dampening on links to protect the session.",
            "B. Increase input queue on links to protect the session.",
            "C. Create targeted hellos to protect the session.",
            "D. Increase a hold-timer to protect the session.",
            "E. Increase a session delay to protect the session."
        ],
        answer: "A, C",
        explanation: ""
    },
    {
        id: 279,
        text: "Refer to the exhibit. An engineer cannot copy the IOS.bin. Which action resolves the issue?",
        choices: [
            "A. Allow file permissions to download the file from the FTP server.",
            "B. Add the IOS.bin file, which does not exist on FTP server.",
            "C. Make memory space on the switch flash or USB drive to download the file",
            "D. Use the copy flash:/ ftp://cisco@10.0.0.2/IOS.bin command"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 280,
        text: "Drag and frop the descriptions from the left onto the corresponding MPLS components on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 281,
        text: "Drag and drop the ICMPv6 neighbor discovery messages from the left onto the correct packet types on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 282,
        text: "Drag and drop the descriptions from the left onto the IPv6 first hop security features on the right. Not all options are used.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 283,
        text: "An engineer must establish a connection between two CE routers for two customers with overlapping IP addresses. Customer_a is connected to interfaces Gig0/0,\nand Customer_b is connected to interfaces Gig0/1. Routers CE1 and CE2 are configured as follows:\nip vrf customer_a\nrd 1:1\nroute-target both 1:1\n!\nip vrf customer_b\nrd 2:2\nroute-target both 2:2\nDrag and drop the code snippets from the right onto the boxes in the configuration to establish the needed connection. Snippets may be used more than once.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 284,
        text: "Tasks:\nConfigure individual VRFS for cach customer according to the topology to achieve these goals:\n1. VRF \"cu-red\" has interfaces on routers R1 and R2. Both routers are preconfigured with IP addressing, VRFS, and BGP.\nDo not use the BGP network statement for advertisement.\n2. VRF \"cu-green\" has interfaces on routers R1 and R2.\n3. BGP on router R1 populates VRF routes between router R1 and R2.\n4. BGP on router R2 populates VRF routes between router R1 and R2.\n5. LAN to LAN is reachable between SW1 and SW3 for VRF \"cu-red\" and between SW2 and SW4 for VRF \"cu-green\". All\nswitches are preconfigured.\nAnswer:\nR1# config t\nR1(config)# int e0/0\nR1(config-if)# ip vrf forwarding cu-red\nR1(config-if)# ip add 192.168.1.254 255.255.255.0\nR1(config-if)# int e0/1\nR1(config-if)# ip vrf forwarding cu-green\nR1(config-if)# ip add 192.168.20.254 255.255.255.0\nR1(config-if)# int e0/2.100\nR1(config-subif)# ip vrf forwarding cu-red\nR1(config-subif)# ip add 10.10.10.1 255.255.255.252\nR1(config-subif)# int e0/2.200\nR1(config-subif)# ip vrf forwarding cu-green\nR1(config-subif)# ip add 10.10.20.1 255.255.255.252\nR1(config-subif)# exit\nR1(config)# router bgp 65000\nR1(config-router)# address-family ipv4 vrf cu-red\nR1(config-router-af)# redistribute connected\nR1(config-router-af)# neighbor 10.10.10.2 remote-as 65000\nR1(config-router-af)# neighbor 10.10.10.2 activate\nR1(config-router-af)# exit\nR1(config-router)# address-family ipv4 vrf cu-green\nR1(config-router-af)# redistribute connected\nR1(config-router-af)# neighbor 10.10.20.2 remote-as 65000\nR1(config-router-af)# neighbor 10.10.20.2 activate\nR1(config-router-af)# do wr\nR2:\nR2# config t\nR2(config)# int e0/0\nR2(config-if)# ip vrf forwarding cu-red\nR2(config-if)# ip add 192.168.2.254 255.255.255.0\nR2(config-if)# int e0/1\nR2(config-if)# ip vrf forwarding cu-green\nR2(config-if)# ip add 192.168.22.254 255.255.255.0\nR2(config-if)# int e0/2.100\nR2(config-subif)# ip vrf forwarding cu-red\nR2(config-subif)# ip add 10.10.10.2 255.255.255.252\nR2(config-subif)# int e0/2.200\nR2(config-subif)# ip vrf forwarding cu-green\nR2(config-subif)# ip add 10.10.20.2 255.255.255.252\nR2(config-subif)# exit\nR2(config)# router bgp 65000\nR2(config-router)# address-family ipv4 vrf cu-red\nR2(config-router-af)# redistribute connected\nR2(config-router-af)# neighbor 10.10.10.1 remote-as 65000\nR2(config-router-af)# neighbor 10.10.10.1 activate\nR2(config-router-af)# exit\nR2(config-router)# address-family ipv4 vrf cu-green\nR2(config-router-af)# redistribute connected\nR2(config-router-af)# neighbor 10.10.20.1 remote-as 65000\nR2(config-router-af)# neighbor 10.10.20.1 activate\nR2(config-router-af)# do wr\nSW1# ping 192.168.1.1\nSW2# ping 192.168.20.1\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 285,
        text: "task:\nA company is connected to an ISP and some of the networks between the ISP and the company are not reachable.\nTroubleshoot and resolye the issues to achieve these goals:\n1. A single 16 is advertised for all infrastructure-connected interfaces that belong to the 10.20.x.x network using BGP network commands from border routers\nconnected to the ISP. Configuration modification is allowed in R4 and R5 to achieve the results. Do not use the BGP aggregate command.\n2. R6 receives the ISP R2 Loopback2 from R4 and receives a summary address for both Loopbacks of ISP R2 from R4 or R5. Use BGP attribute local-preference,\nadd <default value + router number>, for example, for R6, use \"default+6 = value to be used\". Use the existing prefix lists or route maps with the sequence\nnumbering starting at 10 and added in increments of 10\n3. R6 receives the ISP R2 Loopback1 from R5 and receives a summary address for both Loopbacks of ISP R2 from R4 or R5 using the same guidelines.\n4. R6 advertises its Loopback1 /24 address through BGP.\nAnswer:\nR4/R5# config t\nR4/R5(config)# ip route 10.20.0.0 255.255.0.0 null 0\nR4/R5(config)# no route-map AS65001-in\nR4/R5(config)# route-map AS65001-in permit 10\nR4/R5(config-route-map)# match ip address prefix-list AS65001-in\nR4/R5(config-route-map)# do wr\nR6:\nR6# config t\nR6(config)# router bgp 65000\nR6(config-router)# address-family ipv4\nR6(config-router-af)# no network 172.16.6.0\nR6(config-router-af)# network 172.16.6.0 mask 255.255.255.0\nR6(config-router-af)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 286,
        text: "Task:\nA network is configured with CoPP to protect the CORE router route processor for stability and DDoS protection. As a company policy, a class named class-\ndefault is preconfigured and must not be modified or deleted. Troubleshoot CoPP to resolve the issues introduced during the maintenance window to ensure that:\n1. Dynamic routing policies are under CoPP-CRITICAL and are allowed only from the 10.10.x.x range. .\n2. Telnet, SSH, and ping are under CoPP-IMPORTANT and are allowed strictly to/from 10.10.x.x to the CORE router (Hint: you can verify using Loopback1).\n3. All devices ping (UDP) any CORE router interface successfully to/from the 10.10.x.x range and do not allow any other IP address.\n4. All devices run a successful traceroute (UDP) to any interface on the CORE router to/from the 10.10.x.x range, are under CoPP-NORMAL, and do not allow any\nother IP address (make sure default traceroute TTL is accounted for). The traceroute is to be under COPP-NORMAL (Hint: Traceroute port range 33434 33464).\n====\nAnswer:\nCORE# config t\nCORE(config)# policy-map CoPP\nCORE(config-pmap)# class CoPP-CRITICAL\nCORE(config-pmap-c)# police 1000000 50000 50000 conform-action transmit exceed-action transmit\nCORE(config-pmap-c-police)# end\nCORE# config t\nCORE(config)# ip access-list extended 120\nCORE(config-ext-nacl)# permit eigrp 10. 10.0.0 0.0.255.255 any\nCORE(config-ext-nacl)# exit\nCORE(config)# ip access-list extended 121\nCORE(config-ext-nacl)# permit tcp 10.10.0.0 0.0.255.255 10.10.0.0 0.0.255.255 range 22 23\nCORE(config-ext-nacl)# permit icmp 10.10.0.0 0.0.255.255 10.10.0.0 0.0.255.255\nCORE(config-ext-nacl)# exit\nCORE(config)# ip access-list extended 122\nCORE(config-ext-nacl)# permit udp 10.10.0.0 0.0.255.255 10.10.0.0 0.0.255.255 range 33434 33464\nCORE(config-ext-nacl)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 287,
        text: "Refer to the exhibit. An engineer must establish a point-to-point GRE VPN between R1 and the remote site. Which configuration accomplishes the task for the\nremote site?\nTunnel source 199.1.1.1, destination 200.1.1.3\nTunnel protocol/transport GRE/1P\nKey disabled, sequencing disabled\nChecksumming of packets disabled\nTunnel TTL 255, Fast tunneling enabled\nTunnel transport MTU 1476 bytes\nTunnel transmit bandwidth 8000 (kbps)\nTunnel receive bandwidth 8000 (kbps)",
        choices: [
            "A. Interface Tunnel1",
            "B. Interface Tunnel1",
            "C. Interface Tunnel1",
            "D. Interface Tunnel"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 288,
        text: "Refer to Exhibit. PC2 is directly connected to R1. A user at PC2 cannot Telnet to 2001:db8:a:b::10. The user can ping 2001:db8:a:b::10 and receive DHCP-related\ninformation from the DHCP server. Which action resolves the issue?\nR1#sh ipv6 access-list GUARD\nIPv6 access list GUARD\ndeny tcp any host 2001:DB8:A:B::10 eq telnet (6 matches) sequence 10\npermit tcp host 2001:DB8:A:A::20 host 2001:DB8:A:B:10 eq telnet sequence 20\npermit tcp host 2001:DB8:A:A::2 host 2001:DB8:D::1 eq www sequence 30\npermit ipv6 2001:DB8:A.A:/64 any (67 matches) sequence 40",
        choices: [
            "A. Remove sequence 10 and put it back as sequence 25",
            "B. Remove sequence 20 and put it back as sequence 45.",
            "C. Remove sequence 30 and put it back as sequence 5.",
            "D. Remove sequence 40 and put it back as sequence 15."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 289,
        text: "Refer to the exhibit. The remote server is failing to receive the NetFlow data Which action resolves the issue?\nconfig t\nflow record v4_ r1\nmatch ipv4 tos\nmatch ipv4 protocol\nmatch ipv4 source address\nmatch ipv4 destination address\nmatch transport source-port\nmatch transport destination-port\ncollect counter bytes long\ncollect counter packets long\n！\nflow exporter EXPORTER-1\ndestination 172.16.10.2\ntransport udp 2055\nexit\n！\nflow monitor FLOW-MONITOR-1\nexporter EXPORTER-1\nrecord v4_ r1\nexit\n!\nflow monitor v4_ r1\n!\nip cef\n!\ninterface Ethernet0/0.1\nip address 172.16.6.2 255.255.255.0\nip flow monitor v4_ r1 input",
        choices: [
            "A. Modify the flow transport command transport udp 2055 to move under flow monitor profile.",
            "B. Modify the interlace command to Ip flow monitor FLOW-MONITOR-1 Input.",
            "C. Modify the udp port under flow exporter profile to Ip transport udp 4739.",
            "D. Modify the flow record command record v4_r1 to move under flow exporter profile."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 290,
        text: "What is a function of an end device configured with DHCPv6 guard?",
        choices: [
            "A. If it is configured as a server, only prefix assignments are permitted.",
            "B. If it is configured as a relay agent, only prefix assignments are permitted.",
            "C. If it is configured as a client, messages are switched regardless of the assigned role.",
            "D. If it is configured as a client, only DHCP requests are permitted."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 291,
        text: "The network administrator configured the router for Control Plane Policing to limit OSPF traffic to be policed to 1 Mbps. Any traffic that exceeds this limit must also\nbe allowed at this point for traffic analysis. The router configuration is:\naccess-list 100 permit ospf any any\n!\nclass-map CM-OSPF\nmatch access-group 100\n!\npolicy-map PM-COPP\nclass CM-OSPF\npolice 1000000 conform-action transmit\n!\ncontrol-plane\nservice-policy output PM-COPP\nThe Control Plane Policing failed to monitor and police OSPF traffic. Which configuration resolves this issue?",
        choices: [
            "A. policy-map PM-COPP",
            "B. policy-map PM-COPP",
            "C. control-plane",
            "D. no access-list 100"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 292,
        text: "A CoPP policy is applied for receiving SSH traffic from the WAN interface on a Cisco ISR4321 router. However, the SSH response from the router is abnormal\nand stuck during the high link utilization. The problem is identified as SSH traffic does not match in the ACL. Which action resolves the issue?",
        choices: [
            "A. Rate-limit SSH traffic to ensure dedicated bandwidth.",
            "B. Apply CoPP on the control plane interface.",
            "C. Increase the IP precedence value of SSH traffic to 6.",
            "D. Apply CoPP on the WAN interface inbound direction."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 293,
        text: "Refer to the exhibit. The network engineer configured the summarization of the RIP routes into the OSPF domain on R5 but still sees four different 172.16.0.0/24\nnetworks on R4. Which action resolves the issue?\nR5# show ip ospf 1 | begin Area 36\nArea 36\nNumber of interfaces in this area is 2\nIt is a NSSA area\nArea has no authentication\nSPF algorithm last executed 00:32:46.376 ago\nSFF algorithm executed 13 times\nArea ranges are\n172.16.0.0/16 Passive Advertise",
        choices: [
            "A. R5(config)#router ospf 1",
            "B. R4(config)#router ospf 99",
            "C. R4(config)#router ospf 1",
            "D. R5(config)#router ospf 99"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 294,
        text: "How are MPLS Layer 3 VPN services deployed?",
        choices: [
            "A. The RD and RT values must match under the VRR",
            "B. The RD and RT values under a VRF must match on the remote PE router",
            "C. The import and export RT values under a VRF must always be the same",
            "D. The label switch path must be available between the local and remote PE routers."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 295,
        text: "Which feature minimizes DoS attacks on an IPv6 network?",
        choices: [
            "A. IPv6 Binding Security Table",
            "B. IPv6 Router Advertisement Guard",
            "C. IPv6 Prefix Guard",
            "D. IPv6 Destination Guard"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 296,
        text: "Refer to the exhibit. An administrator is configuring a GRE tunnel to establish an EIGRP neighbor to a remote router. The other tunnel endpoint is already\nconfigured. After applying the configuration as shown, the tunnel started flapping. Which action resolves the issue?\nR2(config)# int tun0\n*Jun 23 00:42:06.179 :%LINEPROTO-5-UPDOWN Line protocol on\ninterface Tunnel0 changed state to down\nR2(config-if)# ip address 192.168.12.2 255.255.255.0\nR2(config-if)# tunnel source lo0\nR2(config-if)# tunnel destination 10.255.255.1\nJun 23 00:42:15.845 %LINEPROTO-5-UPDOWN Line protocol on\nInterface Tunnel0, changed state to up\nR2(config-if)# router eigrp E\nR2(config-router)# address-family ipv4 autonomous-system 1\nR2(config-router-af)# net 192.168.12.2 0.0.0.0\n*Jun 23 00:43:05.730 %DUAL 5-NBRCHANGE: EIGRP-IPV4 1: Neighbor\n192.168.12.1 (Tunnel0) is up: new adjacency\n* Jun 23 00:43:05.9931 %ADJ-5-PARENT: Midchain parent maintenance\nfor IP midchain out of Tunnel0 - looped chain attempting to stack\n*Jun 23 00:43:15.193: %TUN-5-RECURDOWN Tunnel0 temporarily\ndisabled due to recursive routing\n*Jun 23 00:43:15.193: %LINEPROTO-5-UPDOWN Line protocol on\nInterface Tunnel0, changed state to down",
        choices: [
            "A. Modify the network command to use the Tunnel0 interface netmask",
            "B. Advertise the Loopback0 interface from R2 across the tunnel",
            "C. Stop sending a route matching the tunnel destination across the tunnel",
            "D. Readdress the IP network on the Tunnel0 on both routers using the /31 netmask"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 297,
        text: "Refer to the exhibit An engineer must advertise routes into IPv6 MP-BGP and failed. Which configuration resolves the issue on R1?",
        choices: [
            "A. router bgp 65000",
            "B. router bgp 65000",
            "C. router bgp 64900",
            "D. router bgp 64900"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 298,
        text: "Refer to the exhibit The administrator is trying to overwrite an existing file on the TFTP server that was previously uploaded by another router.However, the attempt\nto update the file fails. Which action resolves this issue?",
        choices: [
            "A. Make sure to run the TFTP service on the TFTP server",
            "B. Make the package.conf file writable by all on the TFTP server.",
            "C. Make the package.conf file executable by all on the TFTP server.",
            "D. Make the TFTP folder writable by all on the TFTP server."
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 299,
        text: "Refer to the exhibit. R1 and R2 are configured for EIGRP peering using authentication and the neighbors failed to come up. Which action resolves the issue?",
        choices: [
            "A. Configure a matching lowest key-id on both routers.",
            "B. Configure a matching key-id number on both routers.",
            "C. Configure a matching key-chain name on both routers.",
            "D. Configure a matching authentication type on both routers."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 300,
        text: "A network administrator added a new spoke site with dynamic IP on the DMVPN network .Which configuration command passes traffic on the DMVPN tunnel from\nthe spoke router?",
        choices: [
            "A. ip nhrp registration ignore",
            "B. ip nhrp registration dynamic",
            "C. ip nhrp registration no-unique",
            "D. ip nhrp regjistration no-registration"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 301,
        text: "Drag and drop the terminology from the left onto the corresponding definitions on the right.\n[DRAG AND DROP - See exhibit for matching items]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E",
            "F. Option F"
        ],
        answer: "(Refer to exhibit)",
        explanation: ""
    },
    {
        id: 302,
        text: "Refer to the exhibit. In an attempt to increase the network security, the administrator applied the Gi3-in ACL to the Gi3 interface. After the ACL was applied, clients\nin the network connected to Gi3 lost their ability to obtain IP settings from DHCP.Which two configuration commands must be added to the Gi3-in ACL to reinstate\nthe DHCP service for the clients? (Choose two.)",
        choices: [
            "A. 74 permit udp 192.168.30.0 0.0.0.255 eq bootpc host 192.168.255.3 eq bootps",
            "B. 71 permit udp host 0.0.0.0 eq bootps host 255.255.255.255 eq bootpc",
            "C. 73 permit udp host 0.0.0.0 eq bootpc host 192.168.255.3 eq bootps",
            "D. 72 permit udp host 192.168.255.3 eq bootps 192.168.30.0 0.0.0.255 eq bootpc",
            "E. 75 permit udp host 0.0.0.0 eq bootpc host 255.255.255.255 eq bootps"
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 303,
        text: "Refer to the exhibit. Which configuration resolves the IP SLA issue from R1 to the server?",
        choices: [
            "A. R6(config)#ip sla responder",
            "B. R6(config)#ip sla 650",
            "C. R6(config)#ip sla responder udp-echo ipaddress 10.60.60.6 po 5000",
            "D. R6(config)#ip sla schedule 10 life forever start-time now"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 304,
        text: "A customer requested a GRE tunnel through the provider network between two customer sites using loopback to hide internal networks. Which configuration on\nR2 establishes the tunnel with R1?",
        choices: [
            "A. R2(config)#interface Tunnel1",
            "B. R2(config)interface Tunnel1",
            "C. R2(config)#interface Tunnel1",
            "D. R2(config)# interface Tunnel1"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 305,
        text: "Refer to the exhibit. Which action fixes the OSPF routes redistribution into EIGRP?",
        choices: [
            "A. Match external type to type-1",
            "B. Match OSPF and EIGRP IDs",
            "C. Set a default metric in the route map",
            "D. Set tags before matching into EIGRP."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 306,
        text: "Refer to the exhibit. Packets arriving from source 209.165.200.215 must be sent with the precedence bit set to 1,and packets arriving from source 209.165\n200.216 must be sent with the precedence bit set to 5. Which action resolves the issue?",
        choices: [
            "A. set ip precedence priority in route-map Texas permit 20",
            "B. set ip precedence critical in route-map Texas permit 20",
            "C. set ip precedence immediate in route-map Texas permit 10",
            "D. set ip precedence critical in route-map Texas permit 10"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 307,
        text: "Refer to the exhibit. Which configuration enables OSPF for area 0 interfaces to establish adjacency with a neighboring router with the same VRF?",
        choices: [
            "A. router ospf 1",
            "B. router ospf 1 vrf CCNP",
            "C. router ospf 1vrf CCNP",
            "D. router ospf 1 vrf CCNP"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 308,
        text: "Refer to the exhibit. The control plane is heavily impacted after the CoPP configuration is applied to the router Which command removal lessens the impact on the\ncontrol plane?",
        choices: [
            "A. access-list 120 permit eigrp any host 224.0.0.10",
            "B. access-list 120 permit tcp any gt 1024 eq bgp log",
            "C. access-list 120 permit udp any any eq pim-auto-rp",
            "D. access-list 120 permit ospf any"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 309,
        text: "A customer reports that traffic is not passing on an EIGRP enabled multipoint interface on a router configured as below.\ninterface Serial0/0/0\nno ip address\ninterface Serial0/0/0.9 multipoint\nip address 10.1.1.1 255.255.255.248\nip split-horizon eigrp 1\nWhich action resolves the issue?",
        choices: [
            "A. Disable split horizon.",
            "B. Enable poison reverse.",
            "C. Disable poison reverse.",
            "D. Enable split horizon."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 310,
        text: "Refer to the exhibit. The R2 loopback interface is advertised with RIP and EIGRP using default values. Which configuration changes make R1 reach the R2\nloopback using RIP?",
        choices: [
            "A. R1(config)#router rip",
            "B. R1(config)#router rip",
            "C. R1(config)#router eigrp 1",
            "D. R1(config)#router eigrp 1"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 311,
        text: "Refer to the exhibit Spoke routers do not learn about each other's routes in the DMVPN Phase2 network. Which action resolves the issue?",
        choices: [
            "A. Disable EIGRP split horizon on the Tunnel0 interface of the hub router.",
            "B. Rectify incorrect wildcard mask configured on the hub router network command.",
            "C. Remove default route from spoke routers to establish a spoke-to-spoke tunnel.",
            "D. Configure a static route in each spoke to establish a spoke-to-spoke tunnel"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 312,
        text: "Refer to the exhibit. R4 is experiencing packet drop when trying to reach 172.16.2.7 behind R2. Which action resolves the issue?",
        choices: [
            "A. Insert a/16 floating static route on R2 toward R3 with metric 254.",
            "B. Insert a /24 floating static route on R2 toward R3 with metric 254.",
            "C. Disable auto summarization on R2",
            "D. Enable auto summarization on all three routers R1,R2. and R3."
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 313,
        text: "Which two components are required for MPLS Layer 3 VPN configuration? (Choose two.)",
        choices: [
            "A. Use a unique RD per customer VRE",
            "B. Use pseudowire for Layer 2 routes.",
            "C. Use OSPF between PE and CE.",
            "D. Use LDP for customer routes.",
            "E. Use MP-BGP for customer routes."
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 314,
        text: "R2#sh ipv6 route ospf\n0 2002:ABCD::/64[110/1]\nvia FastEthernet0/1,directly connected\n0 2004:BBAB: :/64[110/1]\nVia FastEthernet0/0,directly connected\n0 2004:BBAC: :/64[110/1]\nvia FastEthernet1/0,directly connected\n0 3010:2:4:0:15:8/128[110/1]\nvia FE80::C804:1DFF:FE20:8，FastEthernet0/0\nRefer to the exhibit. A network engineer applied a filter for LSA traffic on OSPFV3 interarea routes on the area 5 ABR to protect advertising the internal routes of\narea 5 to the business partner network. All other areas should receive the area 5 internal routes. After the respective route\nfiltering configuration is applied on the ABR, area 5 routes are not visible on any of the areas. How must the filter list be applied on the ABR to resolve this issue?",
        choices: [
            "A. in the \"out\" direction for area 5 on router R1",
            "B. in the \"in\" direction for area 20 on router R2",
            "C. in the \"in\" direction for area 5 on router R1",
            "D. in the \"out\" direction for area 20 on router R2"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 315,
        text: "Refer to the exhibit. An engineer is trying to add an encrypted user password that should not be visible in the router configuration. Which two configuration\ncommands resolve the issue? (Choose two.)",
        choices: [
            "A. username Admin secret Cisco@123",
            "B. service password-encryption",
            "C. password encryption aes",
            "D. username Admin password Cisco@123",
            "E. username Admin password 5 Cisco@123",
            "F. no service password-encryption"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 316,
        text: "Refer to the exhibit. TCP traffic should be reaching host 10.10.10.10/24 via R2 Which action resolves the issue?",
        choices: [
            "A. Allow TCP in the access list with no changes to the route map.",
            "B. Add a permit 20 statement in the route map to allow TCP traffic",
            "C. Set IP next-hop to 10 10 12 2 under the route-map permit 10 to allow TCP traffic.",
            "D. TCP traffic will reach the destination via R2 without any changes."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 317,
        text: "A newly installed spoke router is configured for DMVPN with the ip mtu 1400 command. Which configuration allows the spoke to use fragmentation with the\nmaximum negotiated TCP MTU over GRE?",
        choices: [
            "A. ip tcp payload-mtu 1360",
            "B. ip tcp adjust-mss 1360",
            "C. ip tcp payload-mtu 1360",
            "D. ip tcp adjust-mss 1360"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 318,
        text: "An engineer failed to run diagnostic commands on devices using Cisco DNA Center. Which action in Cisco DNA Center resolves the issue?",
        choices: [
            "A. Enable Secure Shell.",
            "B. Enable CDP",
            "C. Enable APIs.",
            "D. Enable Command Runner."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 319,
        text: "Which method provides failure detection in BFD?",
        choices: [
            "A. short duration, low overhead",
            "B. short duration, high overhead",
            "C. long duration, low overhead",
            "D. long duration, high overhead"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 320,
        text: "Refer to the exhibit. During ISP router maintenance, the network produced many alerts because of the flapping interface. Which configuration on R1 resolves the\nissue?",
        choices: [
            "A. no snmp trap link-status",
            "B. snmp trap ip verify drop-rate",
            "C. ip verify drop-rate notify hold-down 60",
            "D. snmp trap link-status down"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 321,
        text: "Refer to the exhibit. A loop occurs between R1, R2, and R3 while EIGRP is run with poison reverse enabled. Which action prevents the loop between R1, R2, and\nR3?",
        choices: [
            "A. Configure route filtering.",
            "B. Enable split horizon.",
            "C. Configure R3 as stub receive-only.",
            "D. Configure route tagging."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 322,
        text: "Refer to the exhibit. R6 should reach R1 via R5>R2>R1.Which action resolves the issue?",
        choices: [
            "A. Increase the cost to 61 between R2 and R3.",
            "B. Increase the cost to 61 between R2-R3-R1.",
            "C. Decrease the cost to 2 between R6-R5-R2",
            "D. Decrease the cost to 41 between R2 and R1."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 323,
        text: "ipv6 dhcp pool DHCPPOOL\naddress prefix 2001:14:4:/64 lifetime infinite infinite\ninterface FastEthernet0/0\nip address 10.0.0.1 255 255255.240\nduplex auto\nspeed auto\nipv6 address 2001:0:1:4..1/64\nipv6 enable\nipv6 nd ra suppress\nipv6 ospf 1 area 1\nipv6 dhcp server DHCPPOOL\nRefer to the exhibit. Reachability between servers in a network deployed with DHCPv6 is unstable. Which command must be removed from the configuration to\nmake DHCPv6 function?",
        choices: [
            "A. address prefix 2001:0:1:4::/64 lifetime infinite infinite",
            "B. ipv6 dhcp server DHCPPOOL",
            "C. ipv6 address 2001:0:1:4::1/64",
            "D. ipv6 nd ra suppress"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 324,
        text: "Refer to the exhibit. A network administrator notices these console messages from host 10.11.110.12 originating from interface E1/0. The administrator considers\nthis an unauthorized attempt to access SNMP on R1. Which action prevents the attempts to reach R1 E1/0?",
        choices: [
            "A. Add a permit statement including the host 10.11.110.12 into ACL 90",
            "B. Configure IOS control plane protection using ACL 90 on interface E1/0.",
            "C. Configure IOS management plane protection using ACL 90 on interface E1/0",
            "D. Create an inbound ACL on interface E1/0 to deny SNMP from host 10.11.110.12"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 325,
        text: "Refer to the exhibit Mutual redistribution is enabled between RIP and EIGRP on R2 and R5 Which configuration resolves the routing loop for the 192.168.1.0/24\nnetwork?",
        choices: [
            "A. R2:",
            "B. R2:",
            "C. R2:",
            "D. R2:"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 326,
        text: "Refer to the exhibit. Router R2 should be learning the route for 10.123.187.0/24 via EIGRP. Which action resolves the issue without introducing more issues?",
        choices: [
            "A. Remove route redistribution in R2 for this route in OSPF.",
            "B. Use distribute-list to modify the route as an internal EIGRP route.",
            "C. Redistribute the route in EIGRP with metric, delay, and reliability.",
            "D. Use distribute-list to filter the external routes in OSPF."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 327,
        text: "Refer to the exhibit. An administrator wanted to make R1 always elected as DR, R2 as BDR, and R3 as DROTHER but could not achieve the desired results.\nWhich two configurations resolve the issue? (Choose two)",
        choices: [
            "A. On the R2 F0/0 interface, configure OSPF priority to 200",
            "B. On the R1 F0/0 interface, configure OSPF priority to 202",
            "C. On the R2 F0/0 interface, configure OSPF priority to 201",
            "D. On the R1 F0/0 interface, configure OSPF priority to 255",
            "E. On the R3 F0/0 interface, configure OSPF priority to 201"
        ],
        answer: "C, D",
        explanation: ""
    },
    {
        id: 328,
        text: "Refer to the exhibit.Routers R1, R2, R3, and R4 use EIGRP. However, traffic always prefers R1 to R5 backup links in non failure scenarios. Which configuration\nresolves the issue?\nR1#show ip route\n1.0.0.0/32 is subnetted, 1 subnets\nC 1.1.1.1/32 is directly connected, Loopback0\n2.0.0.0/32 is subnetted, 1 subnets\nO 2.2.2.2/32 [110/2] via 10.10.10.2, 00:09:30, GigabitEthernet0/0/0\n10.0.0.0/8 is variably subnetted, 7 subnets, 2 masks\nC 10.10.10.0/30 is directly connected, GigabitEthernet0/0/0\nL 10.10.10.1/32 is directly connected, GigabitEthernet0/0/0\nC 10.10.20.0/30 is directly connected, GigabitEthernet0/0/1\nL 10.10.20.1/32 is directly connected, GigabitEthernet0/0/1\nD 10.20.10.0/30 [90/3072] via 10.10.10.2, 00:09:30, GigabitEthernet0/0/0\nO 10.30.10.0/30 [90/3328] via 10.10.10.2, 00:05:48, GigabitEthernet0/0/0\nS 10.40.10.0/30 [1/0] via 10.10.20.2",
        choices: [
            "A. R1(config)#no ip route 10.40.10.0 255.255.255.252 10.10.20.2",
            "B. R1(config)#int gigabitEthernet 0/0/0",
            "C. R1(config-if)#int gigabitEthernet 0/0/0",
            "D. R1(config)#no ip route 10.40.10.0 255.255.255.252 10.10.20.2"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 329,
        text: "Refer to the exhibit. Which action restores OSPF adjacency between R1 and R2?",
        choices: [
            "A. Change the IP MTU of R1 Fa1/0 to 1300",
            "B. Change the IP MTU of R2 Fa0/0 to 1300",
            "C. Change the IP MTU of R1 Fa1/0 to 1500",
            "D. Change the IP MTU of R2 Fa0/0 to 1500"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 330,
        text: "R2#show run | begin bgp\nrouter bgp 64512\nneighbor 10.1.1.1 remote-as 1\nnetwork 10.10.10.0 mask 255.255.255.0 route-map COMM\nroute-map COMM permit 10\nset community 64512:600\nR2#show ip bgp 10.10.10. 0\nBGP routing table entry for 10.10 10.0/24，version 1320 Paths: (1 available, best #1)\nLocal 0.0.0.0 from 0.0.0.0 (1.1.1.1)\nOrigin IGP, metric 0, localpref100, weight 32768,\nvalid, sourced, local, best\nCommunity 64512:600\nRefer to the exhibit. The eBGP neighbor 10.1.1.1 of router R2 receives and installs the prefix,but the community\nvalue is not found in the BGP routing table. How must this issue be resolved?",
        choices: [
            "A. R2 is not sending the community value to neighbor R1, configure R2 to send community",
            "B. Community values are nontransitive and R2 is an eBGP peer, configure R2 to send community",
            "C. R1 must have a route map assigned to neighbor R2, which is not matching the community values",
            "D. R1 must have a route map assigned to neighbor R2, which is clearing the community values"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 331,
        text: "Refer to the exhibit. An engineer tried to access the Cisco WS- C6513 core switch but failed.\nWhich command set accomplishes this task?\nSecureCRT显示：\nThe client has disconnected from the server.Reason:\nProtocol version mismatch.Required protocol version is 2.0.Receive version was 1.5-cisco-1.25",
        choices: [
            "A. SCP version 2",
            "B. SNMP version 2",
            "C. SSH version 2",
            "D. HTTP version 2"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 332,
        text: "Refer to the exhibit While troubleshooting a BGP route reflector configuration, an engineer notices that eflected routes are missing from neighboring routers Which\ntwo BGP configurations are needed to fesolve the issue? (Choose two )",
        choices: [
            "A. neighbor 10.1.1.14 route-reflector-client",
            "B. neighbor R2 route-reflector-client",
            "C. neighbor 10.1.1.2 allowas-in",
            "D. neighbor R4 route-reflector-client",
            "E. neighbor 10.1.1.2 route-reflector-client"
        ],
        answer: "A, E",
        explanation: ""
    },
    {
        id: 333,
        text: "Which IPv6 first hop security feature controls the taffic necessary for proper discovery of neighbor device operation and performance?",
        choices: [
            "A. RA Throtting",
            "B. Source or Destination Guard",
            "C. ND Mulicast Suppression",
            "D. IPv6 Snooping"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 334,
        text: "Which IPv6 feature enables a device to reject traffic when it is originated from an address that is not stored in the device binding table?",
        choices: [
            "A. IPv6 Snooping",
            "B. IPv6 Source Guard",
            "C. IPv6 DAD Proxy",
            "D. IPv6 RA Guard"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 335,
        text: "Refer to the exhibit. The static route is not present in the routing table of an adjacent OSPF neighbor router. Which action resolves the\nissue?",
        choices: [
            "A. Configure the next hop of 10.20.20.1 in the prefix list DMZ-STATIC",
            "B. Configure the next-hop interface at the end of the static router for it to get redistributed",
            "C. Configure a permit 20 statement to the route map to redistribute the static route",
            "D. Configure the subnets keyword in the redistribution command"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 336,
        text: "Refer to the exhibit. R1 is configured with IP SLA to check the availability of the server behind R6 but it kept failing. Which configuration resolves the issue?",
        choices: [
            "A. R1(config)# ip sla 700",
            "B. R1(config)# ip sla 700",
            "C. R1(config)# track 700 ip sla 700",
            "D. R1(config)# track 700 ip sla 700"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 337,
        text: "An engineer configured a router with this configuration\nip access-hst DENY TELNET\n10 deny tcp any any eq 23 log-input\nThe router console starts receiving log message :\n%SEC-6-IPACCESSLOGP: list DENY_TELNET denied tcp\n192.168.1.10(1022)(FastEthernet1/0 D508.89gb.003f) ->192.168.2.20(23), 1 packet\nWhich action stops messages on the console while still denying Telnet?",
        choices: [
            "A. Configure a 20 permit ip any any command",
            "B. Remove log-Input keyword from the access list.",
            "C. Replace log-input keyword with the log keyword in the access list.",
            "D. Configure a 20 permit ip any any log-input command"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 338,
        text: "What are the two goals of micro BFD sessions? (Choose two.)",
        choices: [
            "A. The high bandwidth member link of a link aggregation group must run BFD",
            "B. Run the BFD session with 3×3 ms hello timer",
            "C. Continuity for each member link of a link aggregation group must be verified",
            "D. Eny member link on a link aggregation group must run BFD",
            "E. Each member link of a link aggregation group must run BFD."
        ],
        answer: "C, E",
        explanation: ""
    },
    {
        id: 339,
        text: "Refer to the exhibits .London must reach Rome using a faster path via EIGRP if all the links are up, but it failed to take this path. Which action resolves the issue?",
        choices: [
            "A. Increase the bandwidth of the link between London and Barcelona",
            "B. Use the network statement on London to inject the 172.16.X.0/24 networks into EIGRP",
            "C. Use the network statement on Rome to inject the 172.16.X.0/24 networks into EIGRP",
            "D. Charge the administrative distance of RIP to 150"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 340,
        text: "Refer to the exhibit. The administrator is troubleshooting a BGP peering between PE1 and PE3 that is unable to establish. which action resolves the issue?",
        choices: [
            "A. Disable sending ICMP unreachables on P2 to allow PE1 to establish a session with PE3",
            "B. Ensure that the PE3 loopback address is used as a source for BGP peering to PE1",
            "C. P2 must have a route to PE3 to establish a BOP session toPE1",
            "D. Remove the traffic filtering rules on P2 blocking the BGP communication between PE1 and PE3"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 341,
        text: "Tasks:\nA DMVPN network is preconfigured with tunnel0 IP address 192. 168.1.254 on the HUB, IP connectivity, crypto policies, profiles, and EIGRP AS 100. The NHRP\npassword is ccnp123, and the network ID and tunnel key is EIGRP ASN. Do not introduce a static route. Configure DMVPN connectivity between routers BR1 and\nBR2 to the HUB router using physical interface as the tunnel source to achieve these goals:\n1. Configure NHRP authentication, static IP-to-NBMA address maps, hold time 5 minutes, network ID, and server on branch router BR1.\n2. Configure NHRP authentication, static IP-to-NBMA address maps, hold time 5 minutes, network ID, and server on branch router BR2.\n3. Ensure that packet fragmentation is done before encryption to account for GRE and IPsec header and allow a maximum TCP segment size of 1360 on an IP\nMTU of 1400 on the tunnel interfaces of both branch routers.\n4. Apply an IPsec profile to the tunnel. Verify that direct spoke-to-spoke tunnel is functional between branch routers BR1 and BR2 by using traceroute to Ethernet\n0/0 IP address to get a full score.\nAnswer: BR1和BR2都要配置\nBR1/BR2# config t\nBR1/BR2(config)# crypto ipsec df-bit clear\nBR1/BR2(config)# crypto ipsec fragmentation before-encrypt\nBR1/BR2(config)# interface tunnel 0\nBR1/BR2 (config-if)# ip mtu 1400\nBR1/BR2 (config-if)# ip tcp adjust-mss 1360\nBR1/BR2 (config-if)# ip nhrp network-id 100\nBR1/BR2 (config-if)# ip nhrp authentication ccnp123\nBR1/BR2 (config-if)# ip nhrp map 192.168.1.254 10.10.255.254\nBR1/BR2 (config-if)# ip nhrp map multicast 10.10.255.254\nBR1/BR2 (config-if)# ip nhrp nhs 192.168.1.254\nBR1/BR2 (config-if)# ip nhrp holdtime 300\nBR1/BR2 (config-if)# ip nhrp shortcut\nBR1/BR2 (config-if)# tunnel source 10.10.255.1(10.10.255.2)\nBR1/BR2 (config-if)# tunnel mode gre multipoint\nBR1/BR2 (config-if)# tunnel protection ipsec profile ccnp\nBR1/BR2 (config-if)# tunnel key 100\nBR1/BR2 (config-if)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 342,
        text: "Tasks:\nTroubleshoot and resolve the issues to achieve these goals:\n1. Ensure that R1 reaches the prefix 10.6.66.6 without any single point of failure in the path. Do not use a static route or\npolicy-based routing to accomplish this.\n2. Ensure that R1 loopback 1 reaches to R6's loopback 1 by following the path through R1, R3, R5 to R6 on vice versa. Use\nmetric values K1=100000, K2=1, K3-255, K4-10, K5=1500 to modify the default metric in EIGRP if required. Do not use a\nroute-map\n3. Ensure that on R3, prefix 10.0.56.6/32 uses the SP1 to route to the Internet, whereas prefix 172 38.12.2/32 uses the SP2\nto route to the Internet. Do not use BGP to accomplish this. Use the pre-configured route-maps SP1 and SP2 and modify to\naccomplish the task if required. Use the ping and trace commands from R6 and R2 to prefixes 209.165.202.132 and\n209.165.202.128, respectively to verify results.\nAns:\nR3# config t\nR3(config)# router eigrp 10\nR3(config-router)# no distance 66 0.0.0.0 255.255.255.255\nR3(config-router)# redistribute ospf 10 metric 100000 1 255 10 1500\nR3(config-router)# exit\nR3(config)# route-map SP1 permit 10\nR3(config-route-map)# set ip next-hop 209.165.201.2\nR3(config-route-map)# exit\nR3(config)# route-map SP2 permit 10\nR3(config-route-map # set ip next-hop 209.165.200.226\nR3(config-route-map)# exit\nR3(config)# int e0/1\nR3(config-if)# ip policy route-map SP1\nR3(config-if)# int e0/0\nR3(config-if)# ip policy route-map SP2\nR3(config-if)# do wr\nR4:\nR4# config t\nR4(config)# router eigrp 10\nR4(config-router)# no distance 66 0.0.0.0 255.255.255.255\nR4(config-router)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 343,
        text: "Tasks:\nTroubleshoot and resolve the issues to achieve these goals:\n1. Ensure that R6 can ping the prefix 10.9.99.9. Manipulate the first basic routing decision-making criteria of longest prefix\nmatch that if a router learns a route from different routing protocols, the longest matched prefix can be changed. Use\ndecimal value of 75 if required to accomplish this. Do not use a route-map\n2. Ensure that R2 loopback 1 reaches to R5's loopback 1 by following the path through R2, R4, R6 to R5 and R5 loopback 1\nreaches R2's loopback 1 by Rowing the path through R5, R6, R4 to R2. Use metric values K1=100000, K2=1, K3-255, K4-10,\nK5=1500 to modify the default metric in EIGRP if required. Do not add or modify the default-metric command under router\neigrp 10. Do not use a route-map to set metrics.\n3. Ensure that on R3, prefix 10.0.56.6/32 uses the SP1 to route to the Internet, whereas prefix 172.16.12.2/32 uses the SP2\nto route to the Internet. Do not use BGP to accomplish this. Use the pre-configured route-maps INTERNET1 and INTERNET2\nand modify to accomplish the task if required. Use the ping and trace commands from R6 and R2 to prefixes\n209.165.202.146 and 209.165.202.158, respectively to verify the results.\nAns:\nR4# config t\nR4(config)# router rip\nR4(config-router)# distance 75\nR4(config-router)# exit\nR4(config)# router eigrp 10\nR4(config-router)# no distance 255 0.0.0.0 255.255.255.255\nR4(config-router)# redistribute ospf 10 metric 100000 1 255 10 1500\nR4(config-router)# exit\nR4(config)# router ospf 10\nR4(config-router)# redistribute eigrp 10 metric 10\nR4(config-router)# do wr\nR3:\nR3# config t\nR3(config)# route-map INTERNET1 permit 10\nR3(config-route-map)# set ip next-hop 209.165.200.237\nR3(config-route-map)# exit\nR3(config)# route-map INTERNET2 permit 10\nR3(config-route-map)# set ip next-hop 209.165.200.229\nR3(config-route-map)# exit\nR3(config)# int e0/1\nR3(config-if)# ip policy route-map INTERNET1\nR3(config-if)# int e0/0\nR3(config-if)# ip policy route-map INTERNET2\nR3 (config-if)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 344,
        text: "Tasks:\nA network is configured with IP connectivity, and the routing protocol between devices started having problems right after\nthe maintenance window to implement network changes. Troubleshoot and resolve to a fully functional network\n1. Inter-area links have link authentication (not area authentication) MD5 with the key 1 string CCNP. relationship.\n2. R3 is a DR regardless of R2 status while R1 and R2 establish DR/BDR relationship\n3. OSPF uses the default cost on all interfaces. Network reachelity must follow OSPF default behavior for traffic within an\narea over intra-area VS inter-area links.\n4. The OSPF external route generated on R4 adds link costsmen traversing through the network to reach R2. A network\ncommand to advertise routes is not allowed.\nAnswer:\nR2# config t\nR2(config)# int e0/1\nR2(config-if)# ip ospf priority 0\nR2(config-if)# end\nR2# clear ip ospf process\nR2# wr\nR1:andR3\nR1/R3# config t\nR1/R3#(config)# int e0/0\nR1/R3(config-if)# ip ospf message-digest-key 1 md5 CCNP\nR1/R3(config-if)# ip ospf authentication message-digest\nR1/R3(config-if)# end\nR1/R3# wr\nR4:\nR4# config t\nR4(config)# int e0/0\nR4(config-if)# ip ospf message-digest-key 1 md5 CCNP\nR4(config-if)# ip ospf authentication message-digest\nR4(config-if)# exit\nR4(config)# router ospf 1\nR4(config-router)# redistribute connected metric-type 1\nR4(config-router)# do wr\nR5:\nR5# config t\nR5(config)# int e0/0\nR5(config-if)# ip ospf message-digest-key 1 md5 CCNP\nR5(config-if)# ip ospf authentication message-digest\nR5(config-if)# no ip ospf cost 60\nR5(config-if)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 345,
        text: "Tasks:\nTroubleshoot R-WEST to achieve the desired results:\n1. All the commands should be locally saved to the router as well as sent to the Syslog server except passwords.\n2. All the Cisco OSPF LSA traps should be sent to the SNMP server.\nR-WEST# config t\nR-WEST(config)# archive\nR-WEST(config-archive)# log config\nR-WEST(config-archive-log-cfg)# logging enable\nR-WEST(config-archive-log-cfg)# hidekeys\nR-WEST(config-archive-log-cfg)# notify syslog\nR-WEST(config-archive-log-cfg)# exit\nR-WEST(config)# snmp-server enable traps\nR-WEST(config)# snmp-server enable traps ospf Isa\nR-WEST(config)# snmp-server enable traps ospf cisco-specific Isa\nR-WEST(config)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 346,
        text: "Tasks:\nTroubleshoot R-WEST to achieve the desired results:\n1. The locally generated logs should have sequence numbers, date and time.\n2. The SNMP Pas related to OSPF and participating interface state changes utilizing RFC1253-MIB OSPFV2 should be send to\nSNMP server.\nAnswer:\nR-WEST:\nR-WEST# config t\nR-WEST(config)# service sequence-numbers\nR-WEST(config)# service timestamps log datetime msec\nR-WEST(config)# snmp-server enable traps ospf\nR-WEST(config)# do wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 347,
        text: "Configure HUB and SPOKE routers according to the topology to achieve these goals:\n1. Configure mGRE neighborship to provide end-to-end reachability between Hub and Spokes.\n2. Configure NHRP authentication using password \"C!$c0123\". Use 180 sec hold time for NHRP members where NHS should maintain next hop client NBMA\nregistration messages for 60 sec. Verify configuration with ping from PC1 to PC2 and PC3.\nAns:\nR0#conf t\nR0#(config)#interface tunnel 0\nR0#(config-if)#ip address 10.0.0.254 255.255.255.0\nR0#(config-if)#tunnel mode gre multipoint\nR0#(config-if)#tunnel source e0/1\nR0#(config-if)#ip nhrp network-id 1\nR0#(config-if)#ip nhrp authentication C!$c0123\nR0#(config-if)#ip nhrp registration timeout 60\nR0#(config-if)#ip nhrp holdtime 180\nR0#(config-if)#ip nhrp multicast dynamic\nR0#(config-if)#end\nR0#wr\nR1/R2配置除IP地址其余相同\nR1/R2#conf t\nR1/R2(config)#interface tunnel 0\nR1/R2(config)#ip address 10.0.0.1 255.255.255.0\n（R2的IP配置10.0.0.2 255.255.255.0）\nR1/R2(config)#tunnel source e0/1\nR1/R2(config)#ip nhrp network-id 1\nR1/R2(config)#tunnel mode gre multipoint\nR1/R2(config)#ip nhrp map 10.0.0.254 10.10.255.254\nR1/R2(config)#ip nhrp nhs 10.0.0.254\nR1/R2(config)#ip nhrp authentication C!$c0123\nR1/R2(config)#ip nhrp registration timeout 60\nR1/R2(config)#ip nhrp holdtime 180\nR1/R2(config)#ip nhrp map multicast 10.10.255.254\nR1/R2(config)#end\nR1/R2#wr\n[Answer choices shown in exhibit images]",
        choices: [
            "A. Option A",
            "B. Option B",
            "C. Option C",
            "D. Option D",
            "E. Option E"
        ],
        answer: "(See exhibit)",
        explanation: ""
    },
    {
        id: 348,
        text: "Refer to the exhibit AS 111 must not be used as a transit AS, but ISP-1 is getting ISP-2 routes form AS 111. which configuration stops Customer AS from being\nused as transit path on ISP-1?\nISP-1\nip as-path access-list 1 permit ^111\n!\nrouter bgp 1 00\nneighbor 192.168.101.10 remote-as 1000\nneighbor 192.168.11.111 remote-as 111\nneighbor 192. 168.11.111 filter-list 1 in",
        choices: [
            "A. ip as-path access-list 1 permit_111_",
            "B. ip as-path access-list 1 permit.^",
            "C. ip as-path access-list 1 permit^$",
            "D. ip as-path access-list 1permit ^111$"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 349,
        text: "A network administrator cannot connect to a device via SSH. The line vty configuration is as follows:\nline vty 0 4\nLocation xxxxxxxxx\nsession-timeout 10\ntransport preferred ssh\ntransport input all\ntransport output telnet ssh\nstopbits 1\nWhich action resolves this issue?",
        choices: [
            "A. Change the stopbits to 10",
            "B. Configure the transport input SSH.",
            "C. Increase the session timeout.",
            "D. Initialize the SSH key."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 350,
        text: "Refer to the exhibit. The hub and spoke are connected via two DMVPN tunnel interfaces. The NHRP configured and the tunnels are detected on the hub and the\nspoke. which configuration command adds an IPsec profile on both tunnel interfaces to encrypt traffic?",
        choices: [
            "A. tunnel protection ipsec profile DMVPN unique",
            "B. tunnel protection ipsec profile DMVPN shared",
            "C. tunnel protection ipsec profile DMVPN multipoint",
            "D. tunnel protection ipsec profile DMVPN tunnel 1"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 351,
        text: "Refer to the exhibit. The remote branch locations have a static neighbor relationship configured to R1 only.R1 has successful neighbor relationships with the\nremote locations of R2 and R3,but the end users cannot communicate with each other.which configuration resolves the issue?",
        choices: [
            "A. R2",
            "B. R2",
            "C. R2 and R3",
            "D. R1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 352,
        text: "Refer to the exhibit. The company implemented uRPF to address an antispoofing attack. A network engineer received a call from the IT security department that\nthe regional data center is under an IP spoofing attack. Which configuration must be implemented on R1 to resolve this issue？",
        choices: [
            "A. interface ethernet0/0",
            "B. interface ethernet0/1",
            "C. interface ethernet0/0",
            "D. interface ethernet0/1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 353,
        text: "Refer to the exhibit Site1 must perform unequal cost load balancing toward the segments behind Site2 and Sute3. Some of the routes are getting load balanced\nbut others are not. Which configuration allows Site1 to load balance toward all the LAN segments of the remote routers?",
        choices: [
            "A. site2",
            "B. Site3",
            "C. Site2",
            "D. Site1"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 354,
        text: "ip sla 1\nicmp-echo 8.8.8.8\nthreshold 1000\ntimeout 2000\nfrequency 5\nip sla schedule 1 life forever start-time now\n!\ntrack 1 ip sla 1\nip route 0.0.0.0 0.0.0.0 Ethernet0/0 203.0.113.1 name ISP1 track 1\niP route 0.0.0.0 0.0.0.0 Ethernet0/1 198.51.100.1 2 name ISP2\nRefer to the exhibit. After recovering from a power failure, Ethernet0/1 stayed down while Etherner0/0 returned to the up/up state. The default route through ISP1\nwas not reinstated in the routing table until Ethernet0/1 also came up. Which action resolves the issue?",
        choices: [
            "A. Reference the track object 1 in both static default routes",
            "B. Add a static route to the 8.8 8.8/32 destination through the next hop 203.0.113.1",
            "C. Configure the default route through ISP1 with a higher administrative distance than 2",
            "D. Remove the references to the interface names from both static default routes"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 355,
        text: "Refer to the exhibit. Which two configurations allow clients to get dynamic IP addresses assigned? (Choose two)",
        choices: [
            "A. Configure access-list 100 permit udp any any eq 69 as the first line",
            "B. Configure access-list 100 permit udp any any eq 67 as the first line",
            "C. Configure access-list 100 permit udp any any eq 68 as the first line",
            "D. Configure access-list 100 permit udp any any eq 61 as the first line",
            "E. Configure access-list 100 permit udp any any eq 66 as the first line"
        ],
        answer: "B, C",
        explanation: ""
    },
    {
        id: 356,
        text: "Refer to the exhibit. The route to 192.168.200.0 is flapping between R1 and R2. Which set of configuration changes resolves the flapping route?",
        choices: [
            "A. R2(config)#router ospf 100",
            "B. R1(config)#no router rip",
            "C. R2(config)#router eigrp 100",
            "D. R1(config)#router ospf 100"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 357,
        text: "Refer to the exhibit，An engineer implemented CoPP to limit Telnet traffic to protect the router CPU.It was noticed that the Telnet traffic did not pass through CoPP.\nWhich configuration resolves the issue?",
        choices: [
            "A. policy-map COPP",
            "B. ip access-list extended TELNET",
            "C. ip access-list extended TELNET",
            "D. policy-map COPP"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 358,
        text: "The network administrator configured CoPP so that all routing protocol traffic toward the router CPU is limited to 1 mbps. All traffic that exceeds\nthis limit must be dropped. The router is running BGP and OSPF Management traffic for Telnet and SSH must be limited to 500kbps.\naccess-list 100 permit tcp any any eq 179\naccess-list 100 permit tcp any any range 22 23\naccess-list 100 permit ospf any any\n!\nclass-map CM-ROUTING\nmatch access-group 100\nclass-map CM-MGMT\nmatch access-group 100\n!\npolicy-map PM-COPP\nclass CM-ROUTING\npolice 1000000 conform-action transmit\nclass CM-MGMT\npolice 500000 conform-action transmit\n!\ncontrol-plane\nservice-policy output PM-COPP\nNo traffic is filtering through CoPP,which is resulting in high CPU utilization,which configuration resolves the issue ?",
        choices: [
            "A. no access-list 100",
            "B. control-plane",
            "C. No access-list 100",
            "D. no access-list 100"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 359,
        text: "What is a function of BFD?",
        choices: [
            "A. peer recovery after a Layer 2 adjacency failure",
            "B. failure detection dependent on routing protocols and media types",
            "C. peer recovery after a Layer 3 protocol adjacency failure",
            "D. failure detection independent of routing protocols and media types"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 360,
        text: "Refer to the exhibit.An engineer configured SNMP Communities on userSW2 switch,but the SNMP server cannot upload modified configurations to the\nswitch.which configuration resolves this issue?",
        choices: [
            "A. snmp-server community Ciscowruser RW 11",
            "B. snmp-server group NETADMIN v3 priv read NETVIEW write NETADMIN access 22",
            "C. snmp-server community CiscoUs3r RW 11",
            "D. snmp-server group NETVIEW v2c priv read NETVIEW access 11"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 361,
        text: "Refer to the exhibit.After a new regional office is set up,not all guests can access the internet via guest Wi-Fi. Clients are getting the correct IP address from guest\nWi-Fi VLAN 364. which action resolves the issue ?",
        choices: [
            "A. Allow 10.66.46.0/23 in the outbound ACL",
            "B. Allow DNS traffic through the outbound ACL",
            "C. Allow DNS traffic through the inbound ACL",
            "D. Allow 10.66.46.0/23 in the inbound ACL"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 362,
        text: "Refer to the exhibit,Which action limits access to R2 from 192.168.12.1?",
        choices: [
            "A. swap sequence 20 with sequence 10 in access-list 100",
            "B. Modify sequence 10 to deny tcp any eq 22 any to access-list 100",
            "C. swap sequence 10 with sequence 20 in access-list 100",
            "D. Modify sequence 20 to permit tcp host 192.168.12.1 eq 22 any to access-list 100"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 363,
        text: "An engineer configures PBR on R5 and wants to create a policy that matches traffic destined toward 10.10.10.0/24 and forward 10.1.1.1. The traffic must also\nhave its IP precedence set to 5.All other traffic should be forward toward 10.1.1.2 and have its IP precedence set to 0.Which configuration meets the\nrequirements?",
        choices: [
            "A. access-list 1 permit 10.10.10.0 0.0.0.255",
            "B. access-list 100 permit ip any 10.10.10.0 0.0.0.255",
            "C. access-list 1 permit 10.10.10.0 0.0.0.255",
            "D. access-list 100 permit ip any 10.10.10.0 0.0.0.255"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 364,
        text: "Refer to the exhibit.The engineer configured route redistribution in the network but soon received reports that R2 cannot access 192.168.7.0/24 and\n192.168.15.0/24 subnets.Which configuration resolves the issue ?\nR1#show route-map\nRoute-map FROM ->EIGRP, permit, sequence 10\nMatch clauses :\nip address (access-lists) : 10\nSet clauses :\nPolicy routing matches: 0 packets,0 bytes\nR1 #show run I sec router\nrouter eigrp 100\nnetwork 10. 96.69.0 0.0.0.3\nno auto- summary\neigrp router-id 1.1.1.1\nrouter ospf 100\nrouter-id 1.1.1.1\nlog-adjacency-changes\nredis tribute eigxp 100 subnets route-map FROM- >EIGRP\nnetwork 10.99.69.0 0.0.0.3 area 0\nR1#show ip access- list\nStandard IP access list 10\n10 permit 192.168.16.0， wildcard bits 0.0.3.255\n11 permit 192.168.0.0， wildcard bits 0.0.7.255\n20 deny any",
        choices: [
            "A. R1 (config)#ip access-list standard 10",
            "B. R1 (config)#ip access-list standard 10",
            "C. R1 (config)#ip access-list standard 10",
            "D. R1 (config)#ip access-list standard 10"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 365,
        text: "Refer to the exhibit. An engineer must configure DMVPN Phase 3 hub-and-spoke topology to enable a spoke-to-spoke tunnel.Which NHRP configuration meets\nthe requirement on R6?",
        choices: [
            "A. interface Tunnel 1",
            "B. interface Tunnel 1",
            "C. interface Tunnel 1",
            "D. interface Tunnel 1"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 366,
        text: "Refer to the exhibit. An engineer configured user login based on authentication database on the router, but no one can log into the router. Which configuration\nresolves the issue ?",
        choices: [
            "A. aaa authorization network default local",
            "B. aaa authentication login default local",
            "C. aaa authorization exec default local",
            "D. aaa authorization login default enable"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 367,
        text: "Refer to the exhibit.The authentication is not working as desired and the user drops into user-exec mode.Which configuration resolves the issue?",
        choices: [
            "A. aaa new-model",
            "B. aaa new-model",
            "C. aaa new-model",
            "D. aaa new-model"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 368,
        text: "Refer to the exhibit.An engineer configured route exchange between two different companies for a migration project.EIGRP routes were learned in router C,but no\nOSPF routes were learned in router A.Which configuration allows router A to receive OSPF routes?",
        choices: [
            "A. (config-router-af-topology)#redistribute ospf 10 metric 1000000 10 255 1 1500",
            "B. (config-router-af-topology)#redistribute connected",
            "C. (config-router-af)#redistribute ospf 10 1000000 10 255 1 1500",
            "D. (config-router-af-topology)#no redistribute ospf 10 match external 1 external 2 metric 1000000 10 255 1 1500"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 369,
        text: "Which table is used to map the packets in an MPLS LSP that exit from the same interface, via the same next hop,and have the same queuing policies?",
        choices: [
            "A. CEF",
            "B. RIB",
            "C. LDP",
            "D. FEC"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 370,
        text: "What are two characteristics of a VRF instance? (Choose two)",
        choices: [
            "A. It is defined by the VPN membership of a customer site attached to a P device.",
            "B. Each VRF has a different set of routing and CEF tables.",
            "C. AII VRFS share customers routing and CEF tables.",
            "D. An interface must be associated to one VRF",
            "E. A customer site can be associated to different VRFs."
        ],
        answer: "B, D",
        explanation: ""
    },
    {
        id: 371,
        text: "An engineer is creating a policy that overrides normal routing behavior.if the route to a destination of 10.100.100.0/24 is withdrawn from the routing\nTable, the policy must direct traffic to a next hop of 10.1 1.1. if the route is present in the routing table, then normal forwarding must occur. Which\nconfiguration meets the requirements?",
        choices: [
            "A. access-list 100 permit ip any any",
            "B. access-list 100 permit ip any 10.100.100.0 0.0.0.255",
            "C. access-list 100 permit ip any 10.100.100.0 0.0.0.255",
            "D. access-list 100 permit ip any 10.100.100.0 0.0.0.255"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 372,
        text: "Refer to the exhibit.An engineer is trying to connect to tR1 via Telnet with no success.which configuration resolves the issue?",
        choices: [
            "A. ip route 10.221.10.10 255.255.255.255 ethernet0/1",
            "B. ip route 10.221.0.11 255.255.255.255 ethernet0/1",
            "C. tacacs server prod",
            "D. tacacs server prod"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 373,
        text: "Refer ti the exhibit.The IT manager receive reports from users about slow applications through network x. which action resolves the issue?",
        choices: [
            "A. Increase the bandwidth from the service provider",
            "B. upgrade the ios on router E",
            "C. move the servers into the users subnet",
            "D. use the variance 2 command to enable load balancing"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 374,
        text: "What is an MPLS LDP targeted session?",
        choices: [
            "A. LDP session established between LSRs by exchanging TCP hello packets",
            "B. session between neighbors that are connected no more than one hop away",
            "C. label distribution session betveen non-directly connected neighbors",
            "D. LDP session established by exchanging multicast hello packets"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 375,
        text: "An engineer must override the normal routing behavior of a router for Telnet trffic that is destined to 10.10.10.10 from 10.10.1 .0/24 via a next hop of 10.4.4 4,\nwhich is directly connected to the router that is connected to the 10.1.1 0/24 subnet. Which configuration reroutes traffic according to this requirement?",
        choices: [
            "A. accesslist 100 permit tcp 10.10.1.0 0.0.0.255 host 10.10.10.10 eq 23",
            "B. access-list 100 permit tcp 10.10.1.0 0.0.0.255 host 10.10.10.10 eq 23",
            "C. access-list 100 deny tcp 10.10.1.0 0.0.0.255 host 10.10.10.10 eq 23",
            "D. access-list 100 permit tcp 10.10.1.0 0.0.0.255 host 10.10.10.10 eq 23"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 376,
        text: "Refer to the exhibit. After configuring OSPF in R1,some external destinations in the network become unreachable. Which action resolves the issue?",
        choices: [
            "A. Change the R1 router ID from 10.255 255.1 to a unique value and clear the process.",
            "B. Increase the OSPF delay interval on R1 to synchronize routes",
            "C. Clear the OSPF process on R1 to fush stale LSAs sent by other routers.",
            "D. Disconnect the router with the OSPF router ID 0.0.0.0 from the network."
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 377,
        text: "Refer to the exhibit. The network administrator configured the Chicago router to mutually redistribute the LA and NewYork routes with OSPF routes to be\nsummarized as a single route in EIGRP using the longest summary mask:\nrouter eigrp 100\nredistribute ospf 1 metric 10 10 10 10 10\nrouter ospf 1\nredistribute eigrp 100 subnets\n!\ninterface E 0/0\nip summary-address eigrp 100 172.16.0.0 255.255.0.0\nAfter the configuration, the New York router receives all the specific LA routes but the summary route. Which set of configurations resolves the issue on the\nChicago router?",
        choices: [
            "A. interface E 0/1",
            "B. router eigrp 100",
            "C. interface E 0/1",
            "D. router eigrp 100"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 378,
        text: "What is LDP label binding?",
        choices: [
            "A. source prefix with label",
            "B. neighboring router with label",
            "C. destination prefix with label",
            "D. two routers with label distribution session"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 379,
        text: "Refer to the exhibit. A network engineer receives a report that Spoke 1 users can perform bank transactions with the senver located at the Center site, but Spoke 2\nusers cannot. Which action resolves the issue?",
        choices: [
            "A. Configure the Spoke 2 users IP on the router B OSPF domain",
            "B. Configure OSPFV2 on the routers B and C interfaces",
            "C. Configure encapsulation dot1q 78 on the router C interface",
            "D. Configure IPv6 on the routers B and C interfaces"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 380,
        text: "What action is performed for untagged outgoing labels in an MPLS router?",
        choices: [
            "A. Convert the untagged packet to a labeled packet and forward it to the next router.",
            "B. Convert the incoming MPLS packet to an untagged packet and then do a RIB lookup.",
            "C. Convert the incoming MPLS packet to an untagged packet and then do a FIB lookup",
            "D. Convert the incoming MPLS packet to an IP packet and fonward it to the next router."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 381,
        text: "Refer to the exhibit. A network engineer must establish communication between three different customer sites with these requirements:\n●Site-A: must be restricted to access to any users at Site-B or Site-C.\n●Site-B and Site-C: must be able to communicate between sites and share routes using OSPF.\nPE interface configuration:\ninterface FastEthernet 0/0\nip vrf forwarding Site-A\n!\ninterface FastEthernet0/1\nip vrf forwarding SharedSites\n!\ninterface FastEthernet0/2\nip vrf forwarding SharedSites\nWhich configuration meets the reguirements?",
        choices: [
            "A. PE(config)router ospf 10 vIf Site-A",
            "B. PE(config)#router ospf 10 vrf Site-A",
            "C. PE(config)#router ospf 10 vrf Site-A",
            "D. PE(config)#router ospf 10 vrf Site-A"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 382,
        text: "What is LDP used for in an LSR?",
        choices: [
            "A. to communicate the routes known for a specific interface",
            "B. to allow for a system-wide exchange of labels across MPLS network",
            "C. to create a database of label bindings that allow for hop-by-hop fonwarding",
            "D. to create a label across the PE routers for end-to-end path assignment"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 383,
        text: "An administrator attempts to download the pack NBAR2 file using TFTP from the CPE router to another device over the Gi0/0 interface. The CPE is configured as\nbelow:\nhostname CPE\n!\nip access-list extended WAN\n<...>\nremark => All UDP rules below for WAN ID: S88888888\npermit udp any eq domain any\npermit udp any any eq tftp\ndeny udp any any\n<...>\ninterface GigabitEthernet0/0\n<...>\nip access-group WAN in\ntftp-server flash:pp-adv-csr1000v-16.12.1a-XX-XX.0.0.pack\nThe transfer fails. Which action resolves this issue?",
        choices: [
            "A. Change the WAN ACL to permit the UDP port 69 to allow TFTP",
            "B. Make the permit udp any eq tftp any entry the last entry in the WAN ACL.",
            "C. Shorten the file name to the 8+3 naming convention.",
            "D. Change the WAN ACL to permit the entire UDP destination port range"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 384,
        text: "Refer to the exhibit. Clients on ALS2 receive IPv4 and IPv6 addresses, but clients on ALS1 receive only IPv4 addresses and not IPv6 addresses. Which action on\nDSW1 alows clients on ALS1 to receive IPv6 addresses?",
        choices: [
            "A. Confiaure DSW1(config)#ipv6 route 2002:404:404::404:404/128 FastEthernet1/0",
            "B. Configure DSW1(dhcp-cnfig)#default-router 2002:A04:A01::A04:A01",
            "C. Configure DSW1(conigif)#ipv6 helper address 2002:404:404::404:404",
            "D. Configure DSWn(config-if)#ipv6 dhcp relay destination 2002:404:404::404:404 GigabitEthernet1/2"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 385,
        text: "What is a characteristic of an MPLS LSP tunnel?",
        choices: [
            "A. hop-by-hop tunnel",
            "B. bidirectional tunnel",
            "C. secured bidirectional turgel",
            "D. unidirectional tunnel"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 386,
        text: "An engineer notices that R1 does not hold enough log messages to identify the root cause during troubleshooting. Which command resolves this issue?",
        choices: [
            "A. #logging buffered 16000 critical",
            "B. (config)#logging buffered 16000 informational",
            "C. (config)#logging buffered 4096 informational",
            "D. #logging buffered 4096 critical"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 387,
        text: "Refer to the exhibit. The IT router has been configured with the Science VRF and the interfaces have been assigned to the VRF . Which set of configurations\nadvertise Science-1 and Science-2 routes using EIGRP AS 111?",
        choices: [
            "A. router eigrp 111",
            "B. router eigrp 1",
            "C. router eigrp 111",
            "D. router eigrp 111"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 388,
        text: "Refer to the exhibit.\nRR Configuration:\nrouter bgp 100\nneighbor IBGP peer-group\nneighbor IBGP route-reflector-client\nneighbor10.1.1.1 remote-as 100\nneighbor10.1.2.2 remote-as 100\nneighbor 10.1.3.3 remote-as 100\nbetween all devices and notices that the ASBRs do not have routes for each other. Which set of confiaurations resolves this issue?",
        choices: [
            "A. router bgp 100",
            "B. router bgp 100",
            "C. router bgp 100",
            "D. router bgp 100"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 389,
        text: "A network administrator must optimize the segment size of the TCP packet on the DMVPN IPsec protected tunnel interface, which carries application traffic from\nthe head office to a designated branch. The TCP segment size must not ovenwhelm the MTU of the outbound link. Which configuration must be applied to the\nrouter to improve the application performance?",
        choices: [
            "A. interface tunnel30",
            "B. interface tunnel30",
            "C. interface tunnel30",
            "D. interface tunnel30"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 390,
        text: "Refer to the exhibit. A network administrator must block ping from user 3 to the App Server only. An inbound standard access list is applied to R1 interface G0/0 to\nblock ping. The network administrator was notified that user 3 cannot even ping user 9 anymore. Where must the access list be applied in the outgoing direction to\nresolve the issue?",
        choices: [
            "A. R2 interface G0/0",
            "B. SW1 interace G2/21",
            "C. SW1 interface G1/10",
            "D. R2 interface G1/0"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 391,
        text: "While BGP internet routes are redistributed to a lower class of router via RIP, packets are being dropped and routes are failing to be distributed in RIP. Which\naction resolves the issue?",
        choices: [
            "A. Use the input-queue command to prevent the loss of packets",
            "B. Use WFQ in the output queue of the high-performance router",
            "C. Use RIP V2 to be able to use classless networks from BGP",
            "D. Use OSPF instead of RIP to accept all BGP routes."
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 392,
        text: "In a DMVPN network, the Spoke1 user observed that the voice taffcf is coming to Spoke2 users via the hub router. Which command is required on both spoke\nrouters to communicate directly to one another?",
        choices: [
            "A. ip nhrp map dynamic",
            "B. ip nrp redirect",
            "C. ip nhrp shortcut",
            "D. ip np nhs multicast"
        ],
        answer: "C",
        explanation: ""
    },
    {
        id: 393,
        text: "Router_A#interface ethernet 0\nip address 192.168.3.1 255.255.255.0\nip summary-address EIGRP 1 172.16.80.0 255.255.240.0\nRefer to the exhibit. The summary route is not shown in the Router_B routing table. Which Router_A configuration resolves the issue by advertising the summary\nroute to Router _B?",
        choices: [
            "A. interface loopback 0",
            "B. interface loopback 0",
            "C. interface loopback 0",
            "D. interface loopback 0"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 394,
        text: "Refer to the exhibit.An engineer must redistribute networks 192.168.10.0/24 and 192.168.20.0/24 into OSPF fron EIGRP,where the metric must be added when\ntraversing through multiple hops to start an external route of 20. The engineer notices that the external metic is fixed and dose not add at each hop.which\nconfiguration resolves the issue?",
        choices: [
            "A. R1(config)#access-list 10 permit 192.168.10.0 0.0.0.255",
            "B. R2(config)#access-list 10 permit 192.168.10.0 0.0.0.255",
            "C. R2(config)#access-list 10 permit 192.168.10.0 0.0.0.255",
            "D. R1(config)#access-list 10 permit 192.168.10.0 0.0.0.255"
        ],
        answer: "B",
        explanation: ""
    },
    {
        id: 395,
        text: "Refer to the exhibit.Which action allows the engineer to successfully copy running-config to the TFTP server?",
        choices: [
            "A. Add the TFTP server configuration in the switch",
            "B. use file name switch-config.txt",
            "C. use TFTP server IP address 10.0.1.1",
            "D. Add a route in the switch to the TFTP server"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 396,
        text: "An engineer received a ticket about a router that has reloaded. The monitoring system graphs show different traffic patterms between logical and physical\ninterfaces when the router is rebooted.Which action resolves the issue?",
        choices: [
            "A. Configure the snmp ifindex persist command on the physical interfaces",
            "B. Clear the logical interfaces with snmp ifindex clear command",
            "C. Trigger a new snmpwalk from the monitoring system to synchronize interface",
            "D. Configure the snmp ifindex persist command globally"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 397,
        text: "Refer to the exhibit.An administrator configures a router to stop using a particular default route if the DNS server 8.8.8.8 is not reachable through that\nroute.However this configuration did not work as desired and the default route still works even if the DNS server 8.8.8.8 is unreachable.which two configuration\nchanges resolve the issue?",
        choices: [
            "A. Associate every IP SLA probe with the proper WAN address of the route",
            "B. use a separate IP SLA probe and track object for every static route",
            "C. use a separate track object to reference the existing IP SLA 1 probe for every static route",
            "D. configure two static routes for the 8.8.8./32 destination to match the IP SLA probe for each ISP",
            "E. Reference the oroper exit interfaces along with the next hops in both static default routes"
        ],
        answer: "A, B",
        explanation: ""
    },
    {
        id: 398,
        text: "Refer to the exhibit.An administrator configured a cisco router for TACACS authentication,but the router is using the local enable password instead.which action\nresovlves the issue?",
        choices: [
            "A. configure the aaa authentication login admin group admin local enable command instead",
            "B. configure the aaa authentication login admin group tacacs+ local enable none command instead",
            "C. configure the aaa authentication login default group admin local if-authenticated command instead",
            "D. configure the aaa authentication login admin group tacacs+ local if-authenticated command instead"
        ],
        answer: "A",
        explanation: ""
    },
    {
        id: 399,
        text: "Refer to the exhibit.When an FTP client attempts to use passive FTP to connect to the FTP server,the file transfers fail.which action resolves the issue ?",
        choices: [
            "A. Modify traffic filter FTP-SERVER in to the outbound direction",
            "B. Modify FTP-SERVER access list to remove established at the end",
            "C. configure active FTP traffic",
            "D. configure to permit TCP ports higher than 1023"
        ],
        answer: "D",
        explanation: ""
    },
    {
        id: 400,
        text: "Refer to the exhibit.An engineer configured SNMP traps to record spoofed packets drop of more than 48000 a minute on the ethernet0/0 interface.During an IP\nspoofing attack,the engineer noticed that no notifications have been received by the SNMP server.Which configuration resolves the issue on R1?",
        choices: [
            "A. ip verify unicast notification threshold 80",
            "B. ip verify unicast notification threshold 800",
            "C. ip verify unicast notification threshold 8000",
            "D. ip verify unicast notification threshold 48000"
        ],
        answer: "B",
        explanation: ""
    }
];