const examQuestions = [
    {
        id: 1,
        question: "Which two statements about equal-cost multi-path (ECMP) configuration on FortiGate are true? (Choose two.)[cite: 2]",
        options: ["If SD-WAN is disabled, you can configure the parameter v4-ecmp-mode to volume-based.", "If SD-WAN is enabled, you can configure routes with unequal distance and priority values to be part of ECMP.", "If SD-WAN is disabled, you configure the load balancing algorithm in config system settings.", "If SD-WAN is enabled, you control the load balancing algorithm with the parameter load-balance-mode."],
        answer: "CD",
        image: "images/q1.png"
    },
    {
        id: 2,
        question: "You have created a web filter profile named restrict_media-profile with a daily category usage quota. When you are adding the profile to the firewall policy, the restrict_media-profile is not listed in the available web profile drop down. What could be the reason?[cite: 2]",
        options: ["The firewall policy isin no-inspection mode instead of deep-inspection.", "The inspection mode in the firewall policy is not matching with web filter profile feature set.", "The web filter profile is already referenced in another firewall policy.", "The naming convention used in the web filter profile isrestricting it in the firewall policy."],
        answer: "B",
        image: "images/q2.png"
    },
    {
        id: 3,
        question: "Refer to the exhibit. As an administrator you have created an IPS profile, but it is not performing as expected. While testing you got the output as shown in the exhibit. What could be the possible reason of the diagnose outputshown in the exhibit?[cite: 2]",
        options: ["There is a no firewall policy configured with an IPS security profile.", "FortiGate entered into IPS fail open state.", "Administrator entered the command diagnose test application ipsmonitor 5.", "Administrator entered the command diagnose test application ipsmonitor 99."],
        answer: "A",
        image: "images/q3.png"
    },
    {
        id: 4,
        question: "Refer to the exhibit. The predefined deep-inspection and custom-deep-inspection profiles exclude some web categories from SSL inspection, asshown in the exhibit. For which two reasons are these web categories exempted? (Choose two.)[cite: 2]",
        options: ["The FortiGate temporary certificate denies the browser’s access to websites that use HTTP Strict Transport Security.", "These websites are in an allowlist of reputable domain names maintained by FortiGuard.", "The resources utilization is optimized because these websites are in the trusted domain list on FortiGate.", "The legal regulation aims to prioritize user privacy and protect sensitive information for these websites."],
        answer: "AD",
        image: "images/q4.png"
    },
    {
        id: 5,
        question: "Refer to the exhibit. The NOC team connects to the FortiGate GUIwith the NOC_Access admin profile. They request that their GUI sessions do not disconnect too early during inactivity. What must the administrator configure to answer thisspecific request from the NOC team?[cite: 2]",
        options: ["Move NOC_Accessto the top of the list to ensure all profile settingstake effect.", "Increase the offline value of the Override Idle Timeout parameter in the NOC_Access admin profile.", "Ensure that all NOC_Access users are assigned the super_admin role to guarantee access", "Increase the admintimeout value under config system accprofile NOC_Access."],
        answer: "B",
        image: "images/q5.png"
    },
    {
        id: 6,
        question: "Refer to the exhibit. Based on this partial configuration, what are the two possible outcomes when FortiGate enters conserve mode? (Choose two.)[cite: 2]",
        options: ["Administrators cannot change the configuration.", "FortiGate skips quarantine actions.", "Administrators must restart FortiGate to allow new session.", "FortiGate drops new sessionsrequiring inspection."],
        answer: "AB",
        image: "images/q6.png"
    },
    {
        id: 7,
        question: "What isthe primary FortiGate election process when the HA override setting is enabled?[cite: 2]",
        options: ["Connected monitored ports > Priority > HA uptime > FortiGate serial number", "Connected monitored ports > Priority > System uptime > FortiGate serial number", "Connected monitored ports > HA uptime > Priority > FortiGate serial number", "Connected monitored ports > System uptime > Priority > FortiGate serial number"],
        answer: "A",
        image: "images/q7.png"
    },
    {
        id: 8,
        question: "An administrator wanted to configure an IPS sensor to block traffic that triggers a signature set number of times during a specific time period. How can the administrator achieve the objective?[cite: 2]",
        options: ["Use IPS group signatures,set rate-mode 60.", "Use IPS packet logging option with periodical filter option.", "Use IPS filter,rate-mode periodical option.", "Use IPS filter,rate-mode periodical option."],
        answer: "C",
        image: "images/q8.png"
    },
    {
        id: 9,
        question: "A FortiGate firewall policy is configured with active authentication, however, the user cannot authenticate when accessing a website. Which protocol must FortiGate allow even though the user cannot authenticate?[cite: 2]",
        options: ["LDAP", "TACASC+", "Kerberos", "DNS"],
        answer: "D",
        image: "images/q9.png"
    },
    {
        id: 10,
        question: "Refer to the exhibit, which shows a partial configuration from the remote authentication server. Why doesthe FortiGate administrator need this configuration?[cite: 2]",
        options: ["To set up a RADIUS server Secret.", "To authenticate Any FortiGate user groups.", "To authenticate and match the Training OU on the RADIUS server.", "To authenticate only the Training user group."],
        answer: "C",
        image: "images/q10.png"
    },
    {
        id: 11,
        question: "Referto the exhibit, which shows an SD-WAN zone configuration on the FortiGate GUI. Based on the exhibit, which statement istrue?[cite: 2]",
        options: ["The Underlay zone isthe zone by default.", "The Underlay zone contains no member.", "port2 and port3 are not assigned to a zone.", "The virtual-wan-link and overlay zones can be deleted."],
        answer: "B",
        image: "images/q11.png"
    },
    {
        id: 12,
        question: "Which three statements explain a flow-based antivirus profile? (Choose three.)[cite: 2]",
        options: ["FortiGate buffersthe whole file but transmits to the client at the same time.", "Flow-based inspection uses a hybrid of the scanning modes available in proxy-based inspection.", "If a virus is detected, the last packet is delivered to the client.", "Flow-based inspection optimizes performance compared to proxy-based inspection.", "The IPS engine handlesthe process as a standalone."],
        answer: "BDE",
        image: "images/q12.png"
    },
    {
        id: 13,
        question: "Refer to the exhibit. An administrator has configured an ApplicationOverrides for the ABC.Com application signature and set the Action to Allow. This application control profile is then applied to a firewall policy that is scanning all outbound traffic. Logging is enabled in the firewall policy. To test the configuration, the administrator accessed the ABC.Com web site several times. Why are there no logs generated undersecurity logs for ABC.Com?[cite: 2]",
        options: ["The ABC.Com Type isset as Application instead of Filter.", "The ABC.Com is configured under application profile, which must be configured as a web filter profile.", "The ABC.Com Action is set to Allow.", "The ABC.Com is hitting the category Excessive-Bandwidth."],
        answer: "C",
        image: "images/q13.png"
    },
    {
        id: 15,
        question: "Which two statements describe characteristics of automation stitches? (Choose two.)[cite: 2]",
        options: ["Actionsinvolve only devicesincluded in the Security Fabric.", "An automation stitch can have multiple triggers.", "Multiple actions can run in parallel.", "Triggers can involve external connectors."],
        answer: "CD",
        image: "images/q15.png"
    },
    {
        id: 16,
        question: "Which three statements about SD-WAN performance SLAs are true? (Choose three.)[cite: 2]",
        options: ["They rely on session loss and jitter.", "They can be measured actively or passively.", "They are applied in a SD-WAN rule lowest coststrategy.", "They monitor the state of the FortiGate device.", "All the SLA targets can be configured."],
        answer: "BCE",
        image: "images/q16.png"
    },
    {
        id: 17,
        question: "Which two statements are true about an HA cluster? (Choose two.)[cite: 2]",
        options: ["An HA cluster cannot have both in-band and out-of-band management interfaces at the same time.", "Link failover triggers a failover if the administrator sets the interface down on the primary device.", "When sniffing the heartbeat interface, the administrator mustsee the IP address 169.254.0.2.", "HA incrementalsynchronization includes FIB entries and IPsec SAs."],
        answer: "BD",
        image: "images/q17.png"
    },
    {
        id: 18,
        question: "A network administrator enabled antivirus and selected an SSL inspection profile on a firewall policy. When downloading an EICAR test file through HTTP, FortiGate detects the virus and blocks the file. When downloading the same file through HTTPS, FortiGate does not detect the virus and does not block the file, allowing it to be downloaded. The administrator confirmsthat the traffic matchesthe configured firewall policy. What are two reasons for the failed virus detection by FortiGate? (Choose two.)[cite: 2]",
        options: ["The selected SSL inspection profile has certificate inspection enabled.", "The website is exempted from SSL inspection.", "The El CAR test file exceedsthe protocol options oversize limit.", "The browser does not trust the FortiGate self-signed CA certificate."],
        answer: "AB",
        image: "images/q18.png"
    },
    {
        id: 19,
        question: "You have configured the below commands on a FortiGate. What would be the impact of this configuration on FortiGate?[cite: 2]",
        options: ["FortiGate will enable strict RPF on ail its interfaces and port1 will be enable for asymmetric routing.", "FortiGate will enable strict RPF on all its interfaces and port1 will be exempted from RPF checks.", "Port1 will be enabled with flexible RPF, and all other interfaces will be enabled forstrict RPF", "The global configuration will take precedence and FortiGate will enable strict RPF on all interfaces."],
        answer: "B",
        image: "images/q19.png"
    },
    {
        id: 20,
        question: "Refer to the exhibit. What would be the impact of these settings on the Server certificate SNI check configuration on FortiGate?[cite: 2]",
        options: ["FortiGate will accept and use the CN in the server certificate for URL filtering if the SNI does not match the CN or SAN fields.", "FortiGate will accept the connection with a warning if the SNI does not match the CN or SAN fields.", "FortiGate will close the connection if the SNI does not match the CN or SAN fields.", "FortiGate will close the connection if the SNI does not match the CN and SAN fields"],
        answer: "C",
        image: "images/q20.png"
    },
    {
        id: 21,
        question: "A new administrator is configuring FSSO authentication on FortiGate using DC Agent Mode. Which step is NOT part of the expected process?[cite: 2]",
        options: ["The DC agentsends login event data directly to FortiGate.", "The user logs into the windows domain.", "The collector agent forwardslogin event data to FortiGate.", "FortiGate determines user identity based on the IP addressin the FSSO list."],
        answer: "A",
        image: "images/q21.png"
    },
    {
        id: 22,
        question: "A network administrator is reviewing firewall policies in both Interface Pair View and By Sequence View. The policies appear in a different order in each view. Why isthe policy order different in these two views?[cite: 2]",
        options: ["Policies in Interface Pair View are prioritized by security levels, while By Sequence View strictly follows the administrator’s manual ordering.", "By Sequence View groups policies based on rule priority, while Interface Pair View always follows the order of traffic logs.", "The firewall dynamically reorders policies in Interface Pair View based on recent traffic patterns, but By Sequence View remains static.", "Interface Pair View sorts policies based on matching interfaces, while By Sequence View shows the actual processing order of rules."],
        answer: "D",
        image: "images/q22.png"
    },
    {
        id: 23,
        question: "An administrator notices that some users are unable to establish SSL VPN connections, while others can connect without any issues. Whatshould the administrator check first?[cite: 2]",
        options: ["Ensure that the affected users are using the correct port number.", "Ensure that user traffic is hitting the firewall policy.", "Ensure that forced tunneling is enabled to reroute all traffic through the SSL VPN", "Ensure that the HTTPS service is enabled on SSL VPN tunnel interface"],
        answer: "A",
        image: "images/q23.png"
    },
    {
        id: 24,
        question: "Refer to the exhibit. An administrator has created a new firewall address to use as the destination for a static route. Why is the administrator not able to select the new address in the Destination field of the new static route?[cite: 2]",
        options: ["In the new static route, the administrator mustselect Named Address.", "In the new firewall address, the FQDN address must first beresolved.", "In the new static route, the administrator must firstset the interface to port2.", "In the new firewall address, Routing configuration must be enabled."],
        answer: "D",
        image: "images/q24.png"
    },
    {
        id: 25,
        question: "FortiGate is operating in NAT mode and has two physical interfaces connected to the LAN and DMZ networks respectively. Which two statements about the requirements of connected physical interfaces on FortiGate are true? (Choose two.)[cite: 2]",
        options: ["Both interfaces must have the interface role assigned.", "Both interfaces must have directly connected routes on the routing table.", "Both interfaces must have DHCP enabled and interfacesset to LAN and DMZ roles assigned.", "Both interfaces must have IP addresses assigned."],
        answer: "BD",
        image: "images/q25.png"
    },
    {
        id: 26,
        question: "When configuring a FortiGate in a multi-WAN setup, why would an administrator enable session preservation on an interface?[cite: 2]",
        options: ["To allow the FortiGate to dynamically change interfaces for all active sessions when a WAN link fails", "To make sure allsessions withoutsource NAT enabled always use the primary WAN link", "To improve security by forcing usersto authenticate again when the WAN link changes", "To ensure that existing SSL VPN connections remain on the same interface even if route changes occur"],
        answer: "D",
        image: "images/q26.png"
    },
    {
        id: 27,
        question: "You are analyzing connectivity problems caused by intermediate devices blocking traffic in SSL VPN environment. In which two ways can you effectively resolve the problem? (Choose two.)[cite: 2]",
        options: ["You can turn off IKE fragmentation to fix large certificate negotiation problems.", "You should use IPsec to solve issues with fragment drops and large certificate exchanges.", "You can use SSL VPN tunnel mode to prevent problems with blocked ESP and UDP ports (500 or 4500).", "You can configure a hub-and-spoke topology with SSL VPN tunnels to bypass blocked UDP ports."],
        answer: "CD",
        image: "images/q27.png"
    },
    {
        id: 28,
        question: "Refer to the exhibit. FortiGate has two separate firewall policies for Sales and Engineering to access the same web server with the same security profiles. Which action must the administrator perform to consolidate the two policiesinto one?[cite: 2]",
        options: ["Create an Aggregate interface that includes port1 and port2 to create a single firewall policy.", "Select port1 and port2 subnets in a single firewall policy.", "Replace port1 and port2 with the any interface in a single firewall policy.", "Enable Multiple Interface Policies to select port1 and port2 in the same firewall policy."],
        answer: "D",
        image: "images/q28.png"
    },
    {
        id: 29,
        question: "You have configured an application control profile, set peer-to-peer traffic to Block under the Categories tab, and applied it to the firewall policy. However, your peer-to-peer traffic on known ports is passing through the FortiGate without being blocked. What FortiGate settingsshould you check to resolve thisissue?[cite: 2]",
        options: ["FortiGuard category ratings", "Application and Filter Overrides", "Network Protocol Enforcement", "Replacement Messagesfor UDP-based Applications"],
        answer: "C",
        image: "images/q29.png"
    },
    {
        id: 30,
        question: "When configuring firewall policies which of the following istrue regarding the policy ID?[cite: 2]",
        options: ["It is mandatory to provide a policy ID while creating a firewall policy regardless of GUI or CLI.", "A firewall policy ID identifies the order of policy execution in firewall policies.", "You can create a policy in CLIwith policy ID 0.", "A policy ID cannot be edited once a policy is created."],
        answer: "D",
        image: "images/q30.png"
    },
    {
        id: 31,
        question: "Which two statements are correct when FortiGate enters conserve mode? (Choose two.)[cite: 2]",
        options: ["FortiGate continuesto run criticalsecurity actions,such as quarantine.", "FortiGate refusesto accept configuration changes.", "FortiGate halts complete system operation and requires a reboot to regain available resources.", "FortiGate continues to transmit packets without IPS inspection when the fail-open global setting in IPS is enabled."],
        answer: "BD",
        image: "images/q31.png"
    },
    {
        id: 32,
        question: "A remote user reports slow SSL VPN performance and frequent disconnections. The user is located in an area with poor internet connectivity. Whatsetting should the administrator adjust to improve the user's experience?[cite: 2]",
        options: ["Enable split tunneling to reduce VPN traffic.", "Change the SSL VPN port to a non-standard port.", "Increase the session timeout for inactive sessions.", "Configure the DTLS timeout to accommodate high-latency connections."],
        answer: "D",
        image: "images/q32.png"
    },
    {
        id: 33,
        question: "An administrator wants to analyze and manage digital certificates to prevent browser warnings when users connect to the SSL VPN portal. Which two statements describe how to correctly do this? (Choose two.)[cite: 2]",
        options: ["The administrator can rely on the default FortiGate self-signed certificate to prevent all security warnings in the browser.", "The administrator must disable HTTPS administrative access entirely to avoid certificate warnings.", "The administrator can use a publicly trusted certificate from a known certificate authority (CA) to stop browser warnings.", "The administrator can import the FortiGate self-signed certificate into each user’s browser as a trusted certificate."],
        answer: "CD",
        image: "images/q33.png"
    },
    {
        id: 34,
        question: "An administratorsuspects that the Collector Agent is not forwarding login eventsto FortiGate. What is the most effective troubleshooting step?[cite: 2]",
        options: ["Verify if DC agent is enabled on the FortiGate.", "Restart the domain controller to refresh authentication services.", "Verify if FortiGate isset to use LDAP authentication instead of FSSO.", "Check if TCP port 8000 is open between the collector agent and FortiGate."],
        answer: "D",
        image: "images/q34.png"
    },
    {
        id: 35,
        question: "Refer to the exhibit. A network administrator is troubleshooting an IPsec tunnel between two FortiGate devices. The administrator has determined that phase 1 status is up, but phase 2 failsto come up. Based on the phase 2 configuration shown in the exhibit, which two configuration changes will bring phase 2 up? (Choose two.)[cite: 2]",
        options: ["On BR1-FGT,set Secondsto 43200.", "On HQ-NGFW, enable Diffie-HellmanGroup 2.", "On BR1-FGT,set Remote Addressto 10.0.11.0/255.255.255.0", "On HQ-NGFW.set Encryption to AES256"],
        answer: "CD",
        image: "images/q35.png"
    },
    {
        id: 36,
        question: "Refer to the exhibits. An administrator has observed the performance status outputs on an HA cluster for 55 seconds. Which FortiGate is the primary?[cite: 2]",
        options: ["HQ-NGFW-2 with the parameter memory-failover-threshold setting", "HQ-NGFW-2 with the parameter priority setting", "HQ-NGFW-1 with the parameter memory-failover-flip-timeoutsetting", "HQ-NGFW-1 with the parameter override setting"],
        answer: "A",
        image: "images/q36.png"
    },
    {
        id: 37,
        question: "Which statement correctly describes NetAPI polling mode forthe FSSO collector agent?[cite: 2]",
        options: ["The collector agent uses a Windows API to query DCs for user logins.", "NetAPI polling can increase bandwidth usage in large networks.", "The NetSessionEnum function is used to track user logouts.", "The collector agent mustsearch Windows application event logs."],
        answer: "C",
        image: "images/q37.png"
    },
    {
        id: 38,
        question: "You have configured the FortiGate device for FSSO. A user is successful in log-in to windows, but their access to the internet is denied. Whatshould the administrator check first?[cite: 2]",
        options: ["Whether the user is assigned to the correct AD group.", "The FortiGate firewall policy settingsfor SSL decryption.", "The FortiGate FSSO active userslist for user’sIP address.", "The windows event viewer for failed login attempts."],
        answer: "C",
        image: "images/q38.png"
    },
    {
        id: 39,
        question: "What are three key routing principlesin SD-WAN? (Choose three.)[cite: 2]",
        options: ["By default, SD-WAN rules are skipped if the included SD-WAN members do not have a valid route to the destination.", "SD-WAN rules have precedence over any other type of routes.", "Regular policy routes have precedence over SD-WAN rules.", "By default. SD-WAN rules are skipped if only one route to the destination is available.", "By default, SD-WAN rules are skipped if the best route to the destination is not an SD-WAN member."],
        answer: "ACE",
        image: "images/q39.png"
    },
    {
        id: 40,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, as well as the IP pool configuration and firewall policy objects. The WAN (port2) interface hasthe IP address 100.65.0.101/24. The LAN (port4) interface has the IP address 10.0.11.254/24. Which IP address will be used to source NAT (SNAT) the traffic, if the user on HQ-PC-1 (10.0.11.50) pings the IP address of BR-FGT (100.65.1.111)?[cite: 2]",
        options: ["100.65.0.101", "100.65.0.49", "100.65.0.99", "100.65.0.149"],
        answer: "C",
        image: "images/q40.png"
    },
    {
        id: 41,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, and the firewall configuration. An administrator created a Deny policy with default settings to deny Webserver access for Remote-User2. The policy should work such that Remote-User1 must be able to access the Webserver while preventing Remote-User2 from accessing the Webserver. Which additional configuration can the administrator add to a deny firewall policy, beyond the default behavior, to block Remote-User2 from accessing the Webserver?[cite: 2]",
        options: ["Disable match-vip in the Allow_access policy", "Configure a One-to-One IP Pool object in a new policy.", "Set the Destination address as Webserver in the Deny policy.", "Set the Destination address as Deny_IP in the Allow_access policy."],
        answer: "C",
        image: "images/q41.png"
    },
    {
        id: 42,
        question: "Refer to the exhibits. The exhibits show the system performance output and default configuration of high memory usage thresholds on a FortiGate device. Based on the system performance output, what are the two possible outcomes? (Choose two.)[cite: 2]",
        options: ["FortiGate has entered conserve mode.", "Administrators can access FortiGate only through the console port.", "Administrators can change the configuration.", "FortiGate drops new sessions."],
        answer: "AD",
        image: "images/q42.png"
    },
    {
        id: 43,
        question: "Refer to the exhibits. Based on the current HA status, an administrator updates the override and priority parameters on HQ-NGFW-1 and HQNGFW-2 as shown in the exhibit. What would be the expected outcome in the HA cluster?[cite: 2]",
        options: ["HQ-NGFW-1 willsynchronize the override disable setting with HQ-NGFW-2.", "HQ-NGFW-2 will take over as the primary because it has the override enable setting and higher priority than HQNGFW-1.", "HQ-NGFW-1 will remain the primary because HQ-NGFW-2 haslower priority.", "The HA cluster will become out of sync because the override setting must match on all HA members."],
        answer: "B",
        image: "images/q43.png"
    },
    {
        id: 44,
        question: "Refer to the exhibits. An administrator wants to add HQ-ISFW-2 in the Security Fabric. HQ-ISFW-2 is in the same subnet as HQ-ISFW. After configuring the Security Fabric settings on HQ-ISFW-2, the statusstays Pending. What can be the two possible reasons? (Choose two.)[cite: 2]",
        options: ["Upstream FortiGate IP must be set to 10.0.11.254.", "SAML Single Sign-On must be set to Manual.", "HQ-ISFW-2 must be authorized on HQ-ISFW.", "Management IP must be set to 10.0.13.254."],
        answer: "AC",
        image: "images/q44.png"
    },
    {
        id: 45,
        question: "Refer to the exhibit. The exhibit shows the FortiGuard Category Based Filter section of a corporate web filter profile. An administrator must block access to download.com, which belongs to the Freeware and Software Downloads category. The administrator must also allow other websitesin the same category. What are two solutions for satisfying the requirement? (Choose two.)[cite: 2]",
        options: ["Configure a static URL filter entry for download.com with Type and Action set to Wildcard and Block, respectively.", "Configure a web override rating for download.com and select Malicious Websites as the subcategory.", "Configure a separate firewall policy with action Deny and an FQDN address object for *.download.com as destination address.", "Set the Freeware and Software Downloads category Action to Warning."],
        answer: "AB",
        image: "images/q45.png"
    },
    {
        id: 46,
        question: "Which three strategies are valid SD-WAN rule strategiesfor memberselection? (Choose three.)[cite: 2]",
        options: ["Lowest Cost (SLA) without load balancing", "Manual with load balancing", "Lowest Quality (SLA) with load balancing", "Lowest Cost (SLA) with load balancing", "Best Quality with load balancing"],
        answer: "ABD",
        image: "images/q46.png"
    },
    {
        id: 47,
        question: "What are two characteristics of HA cluster heartbeat IP addresses in a FortiGate device? (Choose two.)[cite: 2]",
        options: ["Heartbeat interfaces have virtual IP addressesthat are manually assigned.", "Heartbeat IP addresses are used to distinguish between cluster members.", "The heartbeat interface of the primary device in the cluster is always assigned IP address 169.254.0.1.", "A change in the heartbeat IP address happens when a FortiGate device joins or leaves the cluster."],
        answer: "BD",
        image: "images/q47.png"
    },
    {
        id: 48,
        question: "Refer to the exhibit, which contains a RADIUS server configuration. An administrator added a configuration for a new RADIUS server. While configuring, the administrator enabled Include in every user group. What is the impact of enabling Include in every user group in a RADIUS configuration?[cite: 2]",
        options: ["This option places the RADIUS server, and all users who can authenticate against that server, into every FortiGate user group.", "This option places the RADIUS server, and all users who can authenticate against that server, into every RADIUS group.", "This option places all users into every RADIUS user group, including groups that are used for the LDAP server on FortiGate.", "This option places all FortiGate users and groups required to authenticate into the RADIUS server, which, in this case, is FortiAuthenticator."],
        answer: "A",
        image: "images/q48.png"
    },
    {
        id: 49,
        question: "Refer to the exhibits. An administrator creates a new address object on the root FortiGate (HQ-NGFW-1) in the Security Fabric. After synchronization, this object is not available on the downstream FortiGate (HQ-ISFW). What must the administrator do to synchronize the address object?[cite: 2]",
        options: ["Change the csfsetting on HQ-ISFW (downstream) to set configuration-sync local.", "Change the csfsetting on HQ-ISFW (downstream) to setsaml-configuration-sync default.", "Change the csfsetting on HQ-NGFW-1 (root) to set fabric-object-unification default.", "Change the csfsetting on both devices to set downstream-access enable."],
        answer: "C",
        image: "images/q49.png"
    },
    {
        id: 50,
        question: "Refer to the exhibitshowing a debug flow output. Which two conclusions can you make from the debug flow output? (Choose two.)[cite: 2]",
        options: ["The default gateway is configured on port2.", "The RPF check fails.", "The debug flow is for UDP traffic.", "The matching firewall policy deniesthe traffic."],
        answer: "AD",
        image: "images/q50.png"
    },
    {
        id: 51,
        question: "When FortiGate performs SSL/SSH full inspection, you can decide how it should react when it detects an invalid certificate. Which three actions are valid actions that FortiGate can perform when it detects an invalid certificate? (Choose three.)[cite: 2]",
        options: ["Allow", "Trust & Allow", "Allow & Warning", "Block", "Block & Warning"],
        answer: "ABD",
        image: "images/q51.png"
    },
    {
        id: 52,
        question: "You want to ensure that an SSL VPN user’s authenticated session does not remain active after they disconnect from the VPN. Which configuration will ensure this?[cite: 2]",
        options: ["Configure the firewall authentication session timeout to be lower than the SSL VPN session timeout.", "Manually clear active firewall authentication sessions after a user disconnects.", "Increase the SSL VPN idle timeout to reduce the chance of early disconnections.", "Enable settings to force the firewall authentication session to end when the SSL VPN session ends"],
        answer: "D",
        image: "images/q52.png"
    },
    {
        id: 53,
        question: "Refer to the exhibit, which shows a firewall policy to enable active authentication. When attempting to access an external website using an active authentication method, the user is not presented with a login prompt. What isthe most likely reason for this situation?[cite: 2]",
        options: ["The Service DNS isrequired in the firewall policy.", "The Remote-users group must be set up correctly in the FSSO configuration.", "No matching user account existsfor this user.", "The Remote-users group is not added to the Destination."],
        answer: "A",
        image: "images/q53.png"
    },
    {
        id: 54,
        question: "Why did the FortiGate device drop the packet?[cite: 2]",
        options: ["It matched the default implicit firewall policy.", "It matched an explicitly configured firewall policy with the action DENY.", "It cannot reach the next-hop IP.", "It failed the RPF check."],
        answer: "A",
        image: "images/q54.png"
    },
    {
        id: 55,
        question: "Refer to the exhibit, which shows a routing table. An administrator wants to create a new static route so the traffic to the subnet 172.20.1.0/24 is routed through port2 only. What are the two criteria that the administrator can use to achieve this objective? (Choose two.)[cite: 2]",
        options: ["The new static route must have the distance set to 9.", "The existing static route through port3 must have the distance set to 11.", "The new static route must have the priority set to 3.", "The new static route must have the metric set to 1."],
        answer: "AB",
        image: "images/q55.png"
    },
    {
        id: 56,
        question: "Refer to the exhibit. Why is the Antivirus scan switch grayed out when you are creating a new antivirus profile for FTP?[cite: 2]",
        options: ["None of the inspected protocols are active in this profile.", "FortiGate, with less than 2 GB RAM, does not support the Antivirusscan feature.", "Antivirusscan is disabled under System –> Feature visibility.", "The Feature Set for the profile is Flow-based but it must be Proxy-based."],
        answer: "A",
        image: "images/q56.png"
    },
    {
        id: 57,
        question: "An administrator has configured a dialup IPsec VPN on FortiGate with add-route enabled. However, the static route is not showing in the routing table. Which two statements about thisscenario are correct? (Choose two.)[cite: 2]",
        options: ["The administrator must enable a dynamic routing protocol on the dialup interface.", "The administrator must use a policy route instead of a static route for add-route to work properly.", "The administrator must ensure phase 2 issuccessfully established.", "The administrator must define the remote network correctly in the phase 2 selectors."],
        answer: "CD",
        image: "images/q57.png"
    },
    {
        id: 58,
        question: "An administrator configured a FortiGate device to act as a collector for agentless polling mode. What must the administrator add to the FortiGate device to retrieve AD user group information?[cite: 2]",
        options: ["TACACS server", "LDAP server", "RADIUS server", "Keycloak server"],
        answer: "B",
        image: "images/q58.png"
    },
    {
        id: 59,
        question: "What are two features of FortiGate FSSO agentless polling mode? (Choose two.)[cite: 2]",
        options: ["FortiGate directsthe collector agent to use a remote LDAP server.", "FortiGate uses the SMB protocol to read the event viewer logs from the DCs.", "FortiGate does notsupport workstation check.", "FortiGate usesthe AD server asthe collector agent."],
        answer: "BC",
        image: "images/q59.png"
    },
    {
        id: 60,
        question: "A network administrator has enabled full SSL inspection and web filtering on FortiGate. When visiting any HTTPS websites, the browser reports certificate warning errors. When visiting HTTP websites, the browser does not report errors. What isthe reason for the certificate warning errors?[cite: 2]",
        options: ["The browser does not trust the certificate used by FortiGate for SSL inspection.", "The option invalid SSL certificatesisset to allow on the SSL/SSH inspection profile", "The matching firewall policy isset to proxy inspection mode.", "The certificate used by FortiGate for SSL inspection does not contain the required certificate extensions."],
        answer: "A",
        image: "images/q60.png"
    },
    {
        id: 61,
        question: "A network administrator wants to set up redundant IPsec VPN tunnels on FortiGate by using two IPsec VPN tunnels and static routes. All traffic must be routed through the primary tunnel when both tunnels are up. The secondary tunnel must be used only if the primary tunnel goes down. In addition, FortiGate should be able to detect a dead tunnel to speed up tunnel failover. Which two key configuration changes must the administrator make on FortiGate to meet the requirements? (Choose two.)[cite: 2]",
        options: ["In the phase1-interface, enable npu-offload to detect a dead tunnel.", "Configure a lower distance on the static route for the primary tunnel, and a higher distance on the static route for the secondary tunnel.", "Enable Dead Peer Detection.", "Use the VPN wizard to create an IPsec template for a redundant IPsec VPN tunnel."],
        answer: "BC",
        image: "images/q61.png"
    },
    {
        id: 62,
        question: "An administrator wantsto form an HA cluster using the FGCP protocol. Which two requirements mustthe administrator ensure both membersfulfill? (Choose two.)[cite: 2]",
        options: ["They must have the same HA group ID.", "They must have the heartbeat interfacesin the same subnet.", "They must have the same number of configured VDOMs.", "They must have the same hard drive configuration."],
        answer: "AD",
        image: "images/q62.png"
    },
    {
        id: 63,
        question: "FortiGate isintegrated with FortiAnalyzer and FortiManager. When creating a firewall policy, which attribute must an administrator include to enhance functionality and enable log recording on FortiAnalyzer and FortiManager?[cite: 2]",
        options: ["Policy ID", "Log ID", "Universally Unique Identifier", "Sequence ID"],
        answer: "C",
        image: "images/q63.png"
    },
    {
        id: 64,
        question: "Refer to the exhibit. The administrator configured SD-WAN rules and set the FortiGate traffic log page to display SD-WAN-specific columns: SD-WAN Quality and SD- WAN Rule Name. FortiGate allows the traffic according to policy ID 1 placed at the top. This is the policy that allows SD-WAN traffic. Despite these settings, the traffic logs do not show the name of the SD-WAN rule used to steer those traffic flows. What could be the reason?[cite: 2]",
        options: ["SD-WAN rule names do not appear immediately. The administrator must refresh the page.", "There is no application control profile applied to the firewall policy.", "FortiGate load balanced the traffic according to the implicit SD-WAN rule.", "Destinations in the SD-WAN rules are configured for each application, but feature visibility is not enabled."],
        answer: "C",
        image: "images/q64.png"
    },
    {
        id: 65,
        question: "An administrator manages a FortiGate model thatsupports NTurbo. How does NTurbo acceleration enhance antivirus performance?[cite: 2]",
        options: ["For proxy-based inspection, NTurbo offloadstraffic to the content processor.", "For flow-based inspection, NTurbo establishes a dedicated data path to redirect traffic between the IPS engine and FortiGate ingress and egressinterfaces.", "For proxy-based inspection, NTurbo buffers the whole file and then sends it to the antivirus engine.", "For flow-based inspection, NTurbo createstwo inspection sessions on the FortiGate device."],
        answer: "B",
        image: "images/q65.png"
    },
    {
        id: 66,
        question: "Refer to the exhibit. Review the intrusion prevention system (IPS) profile signature settingsshown in the exhibit. What can you conclude about the signature when adding the FTP.Login.Failed signature to the IPS Sensor profile?[cite: 2]",
        options: ["The signature setting includes a group of other signatures.", "FortiGate stores a local copy of the packet that matchesthe signature.", "FortiGate allowsthislow severity signature packet and creates a log.", "The signature setting uses a custom rating threshold"],
        answer: "B",
        image: "images/q66.png"
    },
    {
        id: 67,
        question: "Refer to the exhibits. A diagram of a FortiGate device connected to the network VIP object and firewall policy configurations are shown. The WAN (port2) interface hasthe IP address 100.65.0.101/24. The LAN (port4) interface has the IP address 10.0.11.254/24. If the host 100.65.1.111 sends a TCP SYN packet on port 443 to 100.65.0.200, what will the source address, destination address, and destination port of the packet be at the time FortiGate forwards the packet to the destination?[cite: 2]",
        options: ["10.0.11.254, 10.0.15.50, and 4443, respectively", "100.65.1.111, 10.0.11.50 and 443, respectively", "10.0.11.254, 100.65.0.200, and 443, respectively", "100.65.1.111, 10.0.11.50, and 4443, respectively"],
        answer: "D",
        image: "images/q67.png"
    },
    {
        id: 68,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, and the firewall policies, VIP, and IP pool configurations on the FortiGate device. The WAN (port2) interface hasthe IP address 100.65.0.101/24. The LAN (port4) interface has the IP address 10.0.11.254/24. The first firewall policy has NAT enabled using the IP pool. The second firewall policy is configured with a VIP as the destination address. Which IP address will be used to source NAT (SNAT) the internet traffic coming from a workstation with the IP address 10.0.11.50?[cite: 2]",
        options: ["100.65.0.101", "100.65.0.200", "100.65.0.102", "10.0.11.254"],
        answer: "C",
        image: "images/q68.png"
    },
    {
        id: 69,
        question: "Refer to the exhibit. Based on the routing table shown in the exhibit, which two statements are true? (Choose two.)[cite: 2]",
        options: ["A packet with the source IP address 10.100.110.10 arriving on port3 is allowed if strict RPF is disabled.", "A packet with the source IP address 10.100.110.10 arriving on port2 is allowed if strict RPF is enabled.", "A packet with the source IP address 10.0.13.10 arriving on port2 is allowed if strict RPF is disabled.", "A packet with the source IP address 10.10.10.10 arriving on port2 is allowed if strict RPF is enabled."],
        answer: "AB",
        image: "images/q69.png"
    },
    {
        id: 70,
        question: "An administrator configures FortiGuard servers as DNS servers on FortiGate using default settings. What is true about the DNS connection to a FortiGuard server?[cite: 2]",
        options: ["It uses DNS over TLS.", "It uses DNS over HTTPS.", "It uses UDP 8888.", "It uses UDP 53."],
        answer: "A",
        image: "images/q70.png"
    },
    {
        id: 71,
        question: "What are two features of collector agent advanced mode? (Choose two.)[cite: 2]",
        options: ["Advanced mode supports nested or inherited groups.", "In advanced mode, security profiles can be applied only to user groups, not individual users.", "In advanced mode, FortiGate can be configured as an LDAP client and group filters can be configured on FortiGate.", "Advanced mode usesthe Windows convention – NetBios: Domain\\Username."],
        answer: "AC",
        image: "images/q71.png"
    },
    {
        id: 72,
        question: "Refer to the exhibits. An administrator configured both members of an HA cluster at the same time. After one week of monitoring, the administrator wants to verify the HA failover performance. How can the administrator force a failover?[cite: 2]",
        options: ["The administrator must reset the HA uptime on HQ-NGFW-1.", "The administrator mustset the parameter override to enable on HQ-NGFW-2.", "The administrator must increase the HA priority on HQ-NGFW-2.", "The administrator mustset the monitored port to down on HQ-NGFW-1."],
        answer: "A",
        image: "images/q72.png"
    },
    {
        id: 73,
        question: "An administrator needs to analyze and resolve port conflicts between SSL VPN and HTTPS administrative access on the same interface. In which two ways can this be done? (Choose two.)[cite: 2]",
        options: ["Disable SSL VPN if HTTPS administrative access is using port 443 on any interface.", "Keep port 443 for both SSL VPN and HTTPS administrative access on the same interface without any problems.", "Run SSL VPN on one interface using port 443 and enable HTTPS administrative access on a different interface, also using port 443.", "Change the port number for either the SSL VPN service or the HTTPS administrative service if both are on the same interface."],
        answer: "CD",
        image: "images/q73.png"
    },
    {
        id: 74,
        question: "Refer to the exhibit. What can you conclude from the log shown in the exhibit?[cite: 2]",
        options: ["The IPS scan is paused by the IPS diagnostic command with bypass mode option 5.", "The IPS socket buffer is full and IPS engine needs more memory to create new sessions.", "The IPS session scan is paused and reevaluating the packet because of a dirty flag.", "The IPS socket buffer is full and IPS engine cannot decode a packet."],
        answer: "B",
        image: "images/q74.png"
    },
    {
        id: 75,
        question: "Refer to the exhibits. You have implemented the application sensor and the corresponding firewall policy as shown in the exhibits. You cannot access any of the Google applications, but you are able to access www.fortinet.com. What would you do to resolve this issue?[cite: 2]",
        options: ["Change the Inspection mode to Proxy-based.", "Set SSL inspection to deep-content-inspection.", "Move up Google in the Application and Filter Overrides section to set its priority to 1.", "Add *Google*.com to the URL category in the security profile."],
        answer: "C",
        image: "images/q75.png"
    },
    {
        id: 76,
        question: "Refer to the exhibits. A web filter profile configuration and firewall policy configuration are shown. You are trying to access www.facebook.com, but you are redirected to a FortiGuard web filtering block page. Based on the exhibits, what is the possible cause of the issue?[cite: 2]",
        options: ["The web filter profile feature set is configured incorrectly.", "The web rating override configuration isincorrect.", "The firewall policy inspection mode isincorrect.", "For www.facebook.com, the URL filter action isincorrect."],
        answer: "B",
        image: "images/q76.png"
    },
    {
        id: 77,
        question: "Which two statements about the Security Fabric rating are true? (Choose two.)[cite: 2]",
        options: ["A license is required to obtain an executive summary in the Security Rating section.", "The root FortiGate provides executive summaries of all the FortiGate devices in the Security Fabric.", "The Security Posture category provides PCI compliance results.", "Security Rating Insights are available only in the Security Rating page."],
        answer: "BC",
        image: "images/q77.png"
    },
    {
        id: 78,
        question: "An administrator has configured the following settings: What are the two results of this configuration? (Choose two.)[cite: 2]",
        options: ["Denied users are blocked for 30 minutes.", "A session for denied traffic is created.", "Session helpers are disabled for denied traffic.", "The number of logs generated by denied traffic isreduced."],
        answer: "BD",
        image: "images/q78.png"
    },
    {
        id: 79,
        question: "A FortiGate administrator isrequired to reduce the attack surface on the SSL VPN portal. Which SSL timer can you use to mitigate a denial of service (DoS) attack?[cite: 2]",
        options: ["SSL VPN http-request-header-timeout", "SSL VPN dtls-hello-timeout", "SSL VPN login-timeout", "SSL VPN idle-timeout"],
        answer: "A",
        image: "images/q79.png"
    },
    {
        id: 80,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, as well as the firewall policy and IP pool configuration on the FortiGate device. Two PCs, PC1 and PC2, are connected behind FortiGate and can access the internet successfully. However, when the administrator adds a third PC to the network (PC3), the PC cannot connect to the internet. Based on the information shown in the exhibit, which two configuration options can the administrator use to fix the connectivity issue for PC3? (Choose two.)[cite: 2]",
        options: ["In the IP pool configuration, set type to overload.", "In the system settings,set Multiple Interface Policiesto enable.", "In the firewall policy,set match-vip to enable using CLI.", "In the IP pool configuration，set endip to 100.65.0.112."],
        answer: "AD",
        image: "images/q80.png"
    },
    {
        id: 81,
        question: "Refer to the exhibit. Which two statements about the FortiGuard connection are true? (Choose two.)[cite: 2]",
        options: ["FortiGate is using the default port for FortiGuard communication.", "FortiGate identified the FortiGuard Server using DNS lookup.", "The weight increases asthe number of failed packetsrises.", "You can configure unreliable protocolsto communicate with FortiGuard Server."],
        answer: "AC",
        image: "images/q81.png"
    },
    {
        id: 82,
        question: "Refer to the exhibits. An administrator configured the Web Filter Profile to block access to all social networking sites except Facebook. However, when users try to access Facebook.com, they are redirected to a FortiGuard web filtering block page. Based on the exhibits, which configuration change must the administrator make to allow Facebook while blocking all othersocial networking sites?[cite: 2]",
        options: ["Change the type as Simple in the Static URL Filtersection.", "Set the Social Networking action as warning in the FortiGuard Category Based Filter.", "Change the Feature set of Web Filter Profile as Proxy-based.", "Set the Action as Exempt for www.facebook.com in the Static URL Filter."],
        answer: "A",
        image: "images/q82.png"
    },
    {
        id: 83,
        question: "You are encountering connectivity problems caused by intermediate devices blocking IPsec traffic. In which two ways can you effectively resolve the problem? (Choose two.)[cite: 2]",
        options: ["You can use SSL VPN tunnel mode to prevent problems with blocked ESP and UDP ports (500 or 4500).", "You can configure a hub-and-spoke topology with SSL VPN tunnels to bypass blocked UDP ports.", "You can turn on fragmentation to fix large certificate negotiation problems.", "You should use the protocol IKEv2."],
        answer: "AB",
        image: "images/q83.png"
    },
    {
        id: 84,
        question: "Refer to the exhibits. The exhibits show the application sensor configuration and the Excessive-Bandwidth and Apple filter details. Based on the configuration, what will happen to Apple FaceTime if there are only a few calls originating or incoming?[cite: 2]",
        options: ["Apple Face Time will be allowed, based on the Video/Audio category configuration.", "Apple Face Time will be blocked, based on the Excessive-Bandwidth filter configuration.", "Apple Face Time will be allowed, based on the Apple filter configuration.", "Apple Face Time will be allowed only if the Apple filter in Application and Filter Overrides is set to Allow."],
        answer: "B",
        image: "images/q84.png"
    },
    {
        id: 85,
        question: "Refer to the exhibits. You have implemented the application sensor and the corresponding firewall policy as shown in the exhibits. You cannot access any of the Google applications, but you are able to access www.fortinet.com. Which two actions would you take to resolve the issue? (Choose two.)[cite: 2]",
        options: ["Move up Google in the Application and Filter Overrides section to set its priority to 1.", "Set the action for Google in the Application and Filter Overrides section to Allow.", "Add *Google*.com to the URL category in the security profile.", "Change the Inspection mode to Flow-based.", "Set SSL inspection to deep-content inspection."],
        answer: "AE",
        image: "images/q85.png"
    },
    {
        id: 86,
        question: "Refer to the exhibits. You have implemented the application sensor and the corresponding firewall policy as shown in the exhibits. Which two factors can you observe from these configurations? (Choose two.)[cite: 2]",
        options: ["Facebook access is allowed but you cannot play Facebook videos based on Video/Audio category filter settings.", "Facebook accessis blocked based on the category filtersettings.", "YouTube search is allowed based on the Google Application and Filter override settings.", "YouTube access is blocked based on Excessive-Bandwidth Application and Filter override settings."],
        answer: "BD",
        image: "images/q86.png"
    },
    {
        id: 87,
        question: "Refer to the exhibits. You are asked to implement an antivirus profile for files downloaded through FTP, HTTP, and HTTPS. While testing, you are successful with HTTP and FTP protocols, but FortiGate does not block the file download over HTTPS. What could be the cause?[cite: 2]",
        options: ["The feature set in the antivirus profile is notset to Flow-based.", "Web filter is not enabled on the firewall policy to complement the antivirus profile.", "The action on the firewall policy is not set to deny.", "The SSL inspection mode in the firewall policy is not deep content inspection."],
        answer: "D",
        image: "images/q87.png"
    },
    {
        id: 88,
        question: "Refer to the exhibit Which statement about this firewall policy list istrue?[cite: 2]",
        options: ["The firewall policies are listed by ID sequence view.", "The firewall policies are listed by ingress and egressinterfaces pairing view.", "The Implicit group can include more than one deny firewall policy.", "LAN to WAN, WAN to LAN, and Implicit are sequence grouping view lists."],
        answer: "D",
        image: "images/q88.png"
    },
    {
        id: 89,
        question: "Refer to the exhibit. Which two statements are true about the routing entries in this database table? (Choose two.)[cite: 2]",
        options: ["The default route on port2 is marked asthe standby route.", "Both default routes have different administrative distances.", "The port2 interface is marked asinactive.", "All of the entries in the routing database table are installed in the FortiGate routing table"],
        answer: "AB",
        image: "images/q89.png"
    },
    {
        id: 90,
        question: "What are two features of the NGFW profile-based mode? (Choose two.)[cite: 2]",
        options: ["NGFW profile-based mode policies support both flow inspection and proxy inspection.", "NGFW profile-based mode supports applying applications and web filtering profiles in a firewall policy.", "NGFW profile-based mode can only be applied globally and not on individual VDOMs.", "NGFW profile-based mode must require the use of centralsource NAT policy."],
        answer: "AB",
        image: "images/q90.png"
    },
    {
        id: 91,
        question: "Refer to the exhibitshowing a FortiGuard connection debug output. Based on the output, which two facts does the administrator know about the FortiGuard connection? (Choose two.)[cite: 2]",
        options: ["One server was contacted to retrieve the contract information.", "FortiGate is using default FortiGuard communication settings.", "There is at least one server that lost packets consecutively.", "A local FortiManager is one of the servers FortiGate communicates with."],
        answer: "AB",
        image: "images/q91.png"
    },
    {
        id: 92,
        question: "A network administrator has configured an SSL/SSH inspection profile defined for full SSL inspection and set with aprivate CA certificate. The firewall policy that allows the traffic uses this profile for SSL inspection and performs web filtering. When visiting any HTTPS websites, the browser reports certificate warning errors. What is the reason for the certificate warning errors?[cite: 2]",
        options: ["With full SSL inspection it is not possible to avoid certificate warning errors at the browser level.", "The browser does not recognize the certificate in use assigned by a trusted CA.", "The certificate used by FortiGate for SSL inspection does not contain the required certificate extensions", "The SSL cipher compliance option is not enabled on the SSL inspection profile. This setting is required when the SSL inspection profile is defined with a private CA certificate."],
        answer: "B",
        image: "images/q92.png"
    },
    {
        id: 93,
        question: "An administrator must enable a DHCP server on one of the directly connected networks on FortiGate. However, the administrator is unable to complete the process on the GUI to enable the service on the interface. In thisscenario, what preventsthe administrator from enabling DHCP service?[cite: 2]",
        options: ["The DHCP server setting is available only on the CLI.", "Another interface is configured asthe only DHCP server on FortiGate.", "The FortiGate model does not support the DHCP server.", "The role of the interface preventssetting a DHCP server."],
        answer: "D",
        image: "images/q93.png"
    },
    {
        id: 94,
        question: "Which two statements describe how the RPF check is used? (Choose two.)[cite: 2]",
        options: ["The RPF check is a mechanism that protects FortiGate and the network from IP spoofing attacks.", "The RPF check isrun on the first reply packet of any new session.", "The RPF check is run on the first sent packet of any new session.", "The RPF check is run on the first sent and reply packet of any new session."],
        answer: "AC",
        image: "images/q94.png"
    },
    {
        id: 95,
        question: "Which two settings are required for SSL VPN to function between two FortiGate devices? (Choose two.)[cite: 2]",
        options: ["The server FortiGate requires a CA certificate to verify the client FortiGate certificate.", "The client FortiGate requires a manually added route to remote subnets.", "The client FortiGate requires a client certificate signed by the CA on the server FortiGate.", "The client FortiGate requires the SSL VPN tunnel interface type to connect SSL VPN."],
        answer: "AC",
        image: "images/q95.png"
    },
    {
        id: 96,
        question: "A network administrator is configuring an IPsec VPN tunnel for a sales employee travelling abroad. Which IPsec Wizard template must the administrator apply?[cite: 2]",
        options: ["Hub-and-Spoke", "Site to Site", "Remote Access", "Dial up User"],
        answer: "C",
        image: "images/q96.png"
    },
    {
        id: 97,
        question: "Refer to the exhibits. The SSL VPN connection fails when a user attemptsto connect to it. What should the user do to successfully connect to the SSL VPN?[cite: 2]",
        options: ["Change the SSL VPN port on the client.", "Change the SSL VPN portal to the tunnel.", "Change the server IP address.", "Change the idle-timeout."],
        answer: "A",
        image: "images/q97.png"
    },
    {
        id: 98,
        question: "Which two statements are true regarding FortiGate HA configuration synchronization? (Choose two.)[cite: 2]",
        options: ["Incremental configuration synchronization can occur from changes made on any FortiGate device within the HA cluster.", "Checksums of devices are compared against each other to ensure configurations are the same.", "Incremental configuration synchronization can occur only from changes made on the primary FortiGate device.", "Checksums of devices will be different from each other because some configuration items are not synced to other HA members."],
        answer: "BC",
        image: "images/q98.png"
    },
    {
        id: 99,
        question: "Referto the exhibit, which shows an SD-WAN zone configuration on the FortiGate GUI. Based on the exhibit, which statement istrue?[cite: 2]",
        options: ["The d-wan zone cannot be deleted.", "The underlay zone contains port1 and port2.", "The d-wan zone contains no member.", "The virtual-wan-link zone contains no member."],
        answer: "C",
        image: "images/q99.png"
    },
    {
        id: 100,
        question: "A network administrator wants to set up redundant IPsec VPN tunnels on FortiGate by using two IPsec VPN tunnels and static routes. All traffic must be routed through the primary tunnel when both tunnels are up. The secondary tunnel must be used only if the primary tunnel goes down. In addition, FortiGate should be able to detect a dead tunnel to speed up tunnel failover. Which two key configuration changes must the administrator make on FortiGate to meet the requirements? (Choose two.)[cite: 2]",
        options: ["Configure a higher distance on the static route for the primary tunnel, and a lower distance on the static route for the secondary tunnel.", "Enable Dead Peer Detection.", "Configure a lower distance on the static route for the primary tunnel, and a higher distance on the static route for the secondary tunnel.", "Enable Auto-negotiate and Autokey Keep Alive on the phase 2 configuration of both tunnels."],
        answer: "BC",
        image: "images/q100.png"
    },
    {
        id: 101,
        question: "Referto the exhibit. A network administrator is troubleshooting an IPsec tunnel between two FortiGate devices. The administrator has determined that phase 1 failed to come up. The administrator has also re-entered the pre-shared key on both FortiGate devicesto make sure they match. Based on the phase 1 configuration and the diagram shown in the exhibit, which two configuration changes can the administrator make to bring phase 1 up? (Choose two.)[cite: 2]",
        options: ["On HQ-FortiGate, set IKE mode to Main (ID protection).", "On Remote-FortiGate,set port2 asInterface.", "On HQ-FortiGate, disable Diffie-Helman group 2.", "On both FortiGate devices, set Dead Peer Detection to On Demand."],
        answer: "AB",
        image: "images/q101.png"
    },
    {
        id: 102,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, as well as the firewall policy and IP pool configuration on the FortiGate device. Two PCs, PC1 and PC2, are connected behind FortiGate and can access the internet successfully. However, when the administrator adds a third PC to the network (PC3), the PC cannot connect to the internet. Based on the information shown in the exhibit, which two configuration options can the administrator use to fix the connectivity issue for PC3? (Choose two.)[cite: 2]",
        options: ["In the IP pool configuration, set type to overload.", "In the firewall policy configuration, add 10.0.1.3 as an address object in the source field.", "Configure another firewall policy that matches only the address of PC3 as source, and then place the policy on top of the list.", "In the IP pool configuration,set endip to 192.2.0.12."],
        answer: "AD",
        image: "images/q102.png"
    },
    {
        id: 103,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, as well as the IP pool configuration and firewall policy objects. The WAN (port1) interface hasthe IP address 10.200.1.1/24. The LAN (port3) interface has the IP address 10.0.1.254/24. Which IP address will be used to source NAT (SNAT) the traffic, if the user on Local-Client (10.0.1.10) pings the IP address of Remote-FortiGate (10.200.3.1)?[cite: 2]",
        options: ["10.200.1.1", "10.200.1.99", "10.200.1.49", "10.200.1.149"],
        answer: "B",
        image: "images/q103.png"
    },
    {
        id: 104,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, VIP configuration, firewall policy, and the sniffer CLI output on the FortiGate device. The WAN (port1) interface hasthe IP address 10.200.1.1/24. The LAN (port3) interface has the IP address 10.0.1.254/24. The webserver host (10.0.1.10) must use its VIP external IP address as the source NAT (SNAT) when it pings remote server (10.200.3.1). Which two statements are valid to achieve this goal? (Choose two.)[cite: 2]",
        options: ["Enable NAT on the Allow_accessfirewall policy.", "Disable NAT on the Internet_Accessfirewall policy.", "Disable port forwarding on the VIP object.", "Create a new firewall policy before Internet_Access for the webserver and apply the IP pool."],
        answer: "CD",
        image: "images/q104.png"
    },
    {
        id: 105,
        question: "Which statement is a characteristic of automation stitches?[cite: 2]",
        options: ["They can have one or more triggers.", "They can be created only on downstream devicesin the fabric.", "They can run multiple actions at the same time.", "They can be run only on devices in the Security Fabric."],
        answer: "C",
        image: "images/q105.png"
    },
    {
        id: 106,
        question: "Which three methods are used by the collector agent for AD polling? (Choose three.)[cite: 2]",
        options: ["WinSecLog", "NetAPI", "FortiGate polling", "FSSO REST API", "WMI"],
        answer: "ABE",
        image: "images/q106.png"
    },
    {
        id: 107,
        question: "Referto the exhibit. Why did FortiGate drop the packet?[cite: 2]",
        options: ["It matched the default implicit firewall policy.", "It failed the RPF check.", "The next-hop IP address is unreachable.", "It matched an explicitly configured firewall policy with the action DENY."],
        answer: "A",
        image: "images/q107.png"
    },
    {
        id: 108,
        question: "Refer to the exhibits, which show the firewall policy and an antivirus profile configuration. Why is the user unable to receive a block replacement message when downloading an infected file for the first time?[cite: 2]",
        options: ["Flow-based inspection is used, which resetsthe last packet to the user.", "The option to send files to FortiSandbox for inspection is enabled.", "The firewall policy performs a full content inspection on the file.", "The intrusion prevention security profile must be enabled when using flow-based inspection mode."],
        answer: "A",
        image: "images/q108.png"
    },
    {
        id: 109,
        question: "An employee needs to connect to the office through a high-latency internet connection. Which SSL VPN setting should the administrator adjust to prevent SSL VPN negotiation failure?[cite: 2]",
        options: ["SSL VPN dtls-hello-timeout", "SSL VPN login-timeout", "SSL VPN session-ttl", "SSL VPN idle-timeout"],
        answer: "A",
        image: "images/q109.png"
    },
    {
        id: 110,
        question: "FortiGate isintegrated with FortiAnalyzer and FortiManager. When a firewall policy is created, which attribute is added to the policy to improve functionality and to support recording logsto FortiAnalyzer or FortiManager?[cite: 2]",
        options: ["Sequence ID", "Log ID", "Policy ID", "Universally Unique Identifier"],
        answer: "D",
        image: "images/q110.png"
    },
    {
        id: 111,
        question: "Refer to the exhibits, which show the system performance output and the default configuration of high memory usage thresholds in a FortiGate. Based on the system performance output, what can be the two possible outcomes? (Choose two.)[cite: 2]",
        options: ["FortiGate willstartsending all filesto FortiSandbox for inspection.", "Administrators can access FortiGate only through the console port.", "FortiGate has entered conserve mode.", "Administrators cannot change the configuration."],
        answer: "CD",
        image: "images/q111.png"
    },
    {
        id: 112,
        question: "Refer to the exhibit to view the firewall policy. Why would the firewall policy not block a well-known virus, for example eicar?[cite: 2]",
        options: ["The firewall policy does not apply deep content inspection.", "Web filter is not enabled on the firewall policy to complement the antivirus profile.", "The firewall policy is not configured in proxy-based inspection mode.", "The action on the firewall policy is notset to deny."],
        answer: "A",
        image: "images/q112.png"
    },
    {
        id: 113,
        question: "Refer to the exhibits. FGT-1 and FGT-2 are updated with HA configuration commandsshown in the exhibit. What would be the expected outcome in the HA cluster?[cite: 2]",
        options: ["FGT-2 will take over as the primary because it has the override enable setting and higher priority than FGT-1.", "FGT-1 willsynchronize the override disable setting with FGT-2.", "The HA cluster will become out of sync because the override setting must match on all HA members.", "FGT-1 will remain the primary because FGT-2 haslower priority."],
        answer: "A",
        image: "images/q113.png"
    },
    {
        id: 114,
        question: "Which three pieces of information does FortiGate use to identify the hostname of the SSL server when SSL certificate inspection is enabled? (Choose three.)[cite: 2]",
        options: ["The subject alternative name (SAN) field in the server certificate.", "The server name indication (SNI) extension in the client hello message.", "The serial number in the server certificate.", "The subject field in the server certificate.", "The host field in the HTTP header."],
        answer: "ABD",
        image: "images/q114.png"
    },
    {
        id: 115,
        question: "Which method allows management accessto the FortiGate CLIwithout network connectivity?[cite: 2]",
        options: ["CLI console widget", "SSH console", "Telnet console", "Serial console"],
        answer: "D",
        image: "images/q115.png"
    },
    {
        id: 116,
        question: "Referto the exhibit. FortiGate is configured for firewall authentication. When attempting to access an external website, the user is not presented with a login prompt. What isthe most likely reason for this situation?[cite: 2]",
        options: ["The Service DNS isrequired in the firewall policy.", "The user is using an incorrect user name.", "No matching user account existsfor this user.", "The Remote-users group is not added to the Destination."],
        answer: "A",
        image: "images/q116.png"
    },
    {
        id: 117,
        question: "Refer to the exhibit, which showsthe IPS sensor configuration If traffic matchesthisIPS sensor, which two actionsisthe sensor expected to take? (Choose two.)[cite: 2]",
        options: ["The sensor will reset all connectionsthat match these signatures.", "The sensor will gather a packet log for all matched traffic.", "The sensor will allow attackers matching the Microsoft.Windows.iSCSI.Target.DoS signature.", "The sensor will block all attacks aimed at Windowsservers."],
        answer: "CD",
        image: "images/q117.png"
    },
    {
        id: 118,
        question: "Referto the exhibit FortiGate has two separate firewall policies for Sales and Engineering to access the same web server with the same security profiles. Which action must the administrator perform to consolidate the two policiesinto one?[cite: 2]",
        options: ["Create an Interface Group that includes port1 and port2 to create a single firewall policy.", "Enable Multiple Interface Policies to select port1 and port2 in the same firewall policy.", "Replace port1 and port2 with the any interface in a single firewall policy.", "Select port1 and port2 subnets in a single firewall policy."],
        answer: "B",
        image: "images/q118.png"
    },
    {
        id: 119,
        question: "Which inspection mode does FortiGate use for application profiles if it is configured as a profile-based next-generation firewall (NGFW)?[cite: 2]",
        options: ["Certificate inspection", "Flow-based inspection", "Proxy-based inspection", "Full contentinspection"],
        answer: "B",
        image: "images/q119.png"
    },
    {
        id: 120,
        question: "Which two features of IPsec IKEv1 authentication are supported by FortiGate? (Choose two.)[cite: 2]",
        options: ["Extended authentication (XAuth) for faster authentication because fewer packets are exchanged", "Pre-shared key and certificate signature as authentication methods", "No certificate is required on the remote peer when you set the certificate signature as the authentication method", "Extended authentication (XAuth) to request the remote peer to provide a username and password"],
        answer: "BD",
        image: "images/q120.png"
    },
    {
        id: 121,
        question: "An administrator manages a FortiGate model thatsupports NTurbo. How does NTurbo enhance performance for flow-based inspection?[cite: 2]",
        options: ["NTurbo buffersthe whole file and then sendsit to the antivirus engine.", "NTurbo creates a special data path to redirect traffic between the IPS engine its ingress and egress interfaces.", "NTurbo createstwo inspection sessions on the FortiGate device.", "NTurbo offloadstraffic to the content processor."],
        answer: "B",
        image: "images/q121.png"
    },
    {
        id: 122,
        question: "The HTTP inspection process in web filtering follows a specific order when multiple features are enabled in the web filter profile. Which order must FortiGate use when the web filter profile has features such as safe search enabled?[cite: 2]",
        options: ["DNS-based web filter and proxy-based web filter", "Static URL filter, FortiGuard category filter, and advanced filters", "FortiGuard category filter and rating filter", "Static domain filter, SSL inspection filter, and external connectorsfilters"],
        answer: "B",
        image: "images/q122.png"
    },
    {
        id: 123,
        question: "Referto the exhibit. Which algorithm does SD-WAN use to distribute traffic that does not match any of the SD-WAN rules?[cite: 2]",
        options: ["Traffic issent to the link with the lowest latency.", "All traffic from a source IP is sent to the same interface.", "All traffic from a source IP to a destination IP is sent to the same interface.", "Traffic is distributed based on the number ofsessionsthrough each interface."],
        answer: "C",
        image: "images/q123.png"
    },
    {
        id: 124,
        question: "Referto the exhibit. Review the intrusion prevention system (IPS) profile signature settingsshown in the exhibit. What do you conclude when adding the FTP.Login.Failed signature to the IPS sensor profile?[cite: 2]",
        options: ["Traffic matching the signature will be allowed and logged.", "The signature setting uses a custom rating threshold.", "The signature setting includes a group of other signatures.", "Traffic matching the signature will be silently dropped and logged."],
        answer: "D",
        image: "images/q124.png"
    },
    {
        id: 125,
        question: "Refer to the exhibits. An administrator creates a new address object on the root FortiGate (Local-FortiGate) in the security fabric. After synchronization, this object is not available on the downstream FortiGate (ISFW). What must the administrator do to synchronize the address object?[cite: 2]",
        options: ["Change the csfsetting on both devices to set downstream-access enable.", "Change the csf setting on Local-FortiGate (root) to set fabric object-unification default.", "Change the csfsetting on ISFW (downstream) to set authorization-request-type certificate.", "Change the csfsetting on ISFW (downstream) to set configuration-sync local."],
        answer: "B",
        image: "images/q125.png"
    },
    {
        id: 126,
        question: "Referto the exhibit. In the network shown in the exhibit, the web client cannot connect to the HTTP web server. The administrator runs the FortiGate built-in sniffer and gets the output shown in the exhibit. Whatshould the administrator do next, to troubleshoot the problem?[cite: 2]",
        options: ["Execute a debug flow.", "Run a sniffer on the web server.", "Execute anothersniffer on FortiGate, this time with the filter \"host 10.0.1.10\".", "Capture the traffic using an externalsniffer connected to port1."],
        answer: "A",
        image: "images/q126.png"
    },
    {
        id: 127,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, and the firewall configuration. An administrator created a Deny policy with default settings to deny Webserver access for Remote-User2. The policy should work such that Remote-User1 must be able to access the Webserver while preventing Remote-User2 from accessing the Webserver. Which two configuration changes can the administrator make to the policy to deny Webserver access for RemoteUser2? (Choose two.)[cite: 2]",
        options: ["Set the Destination address as Webserver in the Deny policy.", "Disable match-vip in the Deny policy.", "Set the Destination address as Deny_IP in the Allow_access policy.", "Enable match-vip in the Deny policy."],
        answer: "AD",
        image: "images/q127.png"
    },
    {
        id: 128,
        question: "An administrator configured a FortiGate to act as a collector for agentless polling mode. What must the administrator add to the FortiGate device to retrieve AD user group information?[cite: 2]",
        options: ["DHCP server", "RADIUS server", "LDAP server", "Windowsserver"],
        answer: "C",
        image: "images/q128.png"
    },
    {
        id: 129,
        question: "An administrator wants to configure dead peer detection (DPD) on IPsec VPN for detecting dead tunnels. The requirement is that FortiGate sends DPD probes only when there is no inbound traffic. Which DPD mode on FortiGate meets this requirement?[cite: 2]",
        options: ["Enabled", "On Idle", "Disabled", "On Demand"],
        answer: "D",
        image: "images/q129.png"
    }
];
