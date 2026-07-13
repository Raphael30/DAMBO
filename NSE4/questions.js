const examQuestions = [
    {
        id: 1,
        question: "Which two statements about equal-cost multi-path (ECMP) configuration on FortiGate are true? (Choose two.)",
        options: ["If SD-WAN is disabled, you can configure the parameter v4-ecmp-mode to volume-based.", "If SD-WAN is enabled, you can configure routes with unequal distance and priority values to be part of ECMP.", "If SD-WAN is disabled, you configure the load balancing algorithm in config system settings.", "If SD-WAN is enabled, you control the load balancing algorithm with the parameter load-balance-mode."],
        answer: "CD",
        image: null
    },
    {
        id: 2,
        question: "You have created a web filter profile named restrict_media-profile with a daily category usage quota. When you are adding the profile to the firewall policy, the restrict_media-profile is not listed in the available web profile drop down. What could be the reason?",
        options: ["The firewall policy is in no-inspection mode instead of deep-inspection.", "The inspection mode in the firewall policy is not matching with web filter profile feature set.", "The web filter profile is already referenced in another firewall policy.", "The naming convention used in the web filter profile is restricting it in the firewall policy."],
        answer: "B",
        image: null
    },
    {
        id: 3,
        question: "Refer to the exhibit. As an administrator you have created an IPS profile, but it is not performing as expected. While testing you got the output as shown in the exhibit. What could be the possible reason of the diagnose output shown in the exhibit?",
        options: ["There is a no firewall policy configured with an IPS security profile.", "FortiGate entered into IPS fail open state.", "Administrator entered the command diagnose test application ipsmonitor 5.", "Administrator entered the command diagnose test application ipsmonitor 99."],
        answer: "A",
        image: "images/q4.png"
    },
    {
        id: 4,
        question: "Refer to the exhibit. The predefined deep-inspection and custom-deep-inspection profiles exclude some web categories from SSL inspection, as shown in the exhibit. For which two reasons are these web categories exempted? (Choose two.)",
        options: ["The FortiGate temporary certificate denies the browser's access to websites that use HTTP Strict Transport Security.", "These websites are in an allowlist of reputable domain names maintained by FortiGuard.", "The resources utilization is optimized because these websites are in the trusted domain list on FortiGate.", "The legal regulation aims to prioritize user privacy and protect sensitive information for these websites."],
        answer: "AD",
        image: "images/q5.png"
    },
    {
        id: 5,
        question: "Refer to the exhibit. The NOC team connects to the FortiGate GUI with the NOC_Access admin profile. They request that their GUI sessions do not disconnect too early during inactivity. What must the administrator configure to answer this specific request from the NOC team?",
        options: ["Move NOC_Access to the top of the list to ensure all profile settings take effect.", "Increase the offline value of the Override Idle Timeout parameter in the NOC_Access admin profile.", "Ensure that all NOC_Access users are assigned the super_admin role to guarantee access", "Increase the admintimeout value under config system accprofile NOC_Access."],
        answer: "B",
        image: "images/q6.png"
    },
    {
        id: 6,
        question: "Refer to the exhibit. Based on this partial configuration, what are the two possible outcomes when FortiGate enters conserve mode? (Choose two.)",
        options: ["Administrators cannot change the configuration.", "FortiGate skips quarantine actions.", "Administrators must restart FortiGate to allow new session.", "FortiGate drops new sessions requiring inspection."],
        answer: "AB",
        image: "images/q7.png"
    },
    {
        id: 7,
        question: "What is the primary FortiGate election process when the HA override setting is enabled?",
        options: ["Connected monitored ports > Priority > HA uptime > FortiGate serial number", "Connected monitored ports > Priority > System uptime > FortiGate serial number", "Connected monitored ports > HA uptime > Priority > FortiGate serial number", "Connected monitored ports > System uptime > Priority > FortiGate serial number"],
        answer: "A",
        image: null
    },
    {
        id: 8,
        question: "An administrator wanted to configure an IPS sensor to block traffic that triggers a signature set number of times during a specific time period. How can the administrator achieve the objective?",
        options: ["Use IPS group signatures, set rate-mode 60.", "Use IPS packet logging option with periodical filter option.", "Use IPS filter, rate-mode periodical option.", "Use IPS filter, rate-mode periodical option."],
        answer: "C",
        image: null
    },
    {
        id: 9,
        question: "A FortiGate firewall policy is configured with active authentication, however, the user cannot authenticate when accessing a website. Which protocol must FortiGate allow even though the user cannot authenticate?",
        options: ["LDAP", "TACACS+", "Kerberos", "DNS"],
        answer: "D",
        image: null
    },
    {
        id: 10,
        question: "Refer to the exhibit, which shows a partial configuration from the remote authentication server. Why does the FortiGate administrator need this configuration?",
        options: ["To set up a RADIUS server Secret.", "To authenticate Any FortiGate user groups.", "To authenticate and match the Training OU on the RADIUS server.", "To authenticate only the Training user group."],
        answer: "C",
        image: "images/q11.png"
    },
    {
        id: 11,
        question: "Refer to the exhibit, which shows an SD-WAN zone configuration on the FortiGate GUI. Based on the exhibit, which statement is true?",
        options: ["The Underlay zone is the zone by default.", "The Underlay zone contains no member.", "port2 and port3 are not assigned to a zone.", "The virtual-wan-link and overlay zones can be deleted."],
        answer: "B",
        image: "images/q11.png"
    },
    {
        id: 12,
        question: "Which three statements explain a flow-based antivirus profile? (Choose three.)",
        options: ["FortiGate buffers the whole file but transmits to the client at the same time.", "Flow-based inspection uses a hybrid of the scanning modes available in proxy-based inspection.", "If a virus is detected, the last packet is delivered to the client.", "Flow-based inspection optimizes performance compared to proxy-based inspection.", "The IPS engine handles the process as a standalone."],
        answer: "BDE",
        image: null
    },
    {
        id: 13,
        question: "Refer to the exhibit. An administrator has configured an Application Overrides for the ABC.Com application signature and set the Action to Allow. This application control profile is then applied to a firewall policy that is scanning all outbound traffic. Logging is enabled in the firewall policy. To test the configuration, the administrator accessed the ABC.Com web site several times. Why are there no logs generated under security logs for ABC.Com?",
        options: ["The ABC.Com Type is set as Application instead of Filter.", "The ABC.Com is configured under application profile, which must be configured as a web filter profile.", "The ABC.Com Action is set to Allow.", "The ABC.Com is hitting the category Excessive-Bandwidth."],
        answer: "C",
        image: "images/q14.png"
    },
    {
        id: 14,
        question: "Which two statements describe characteristics of automation stitches? (Choose two.)",
        options: ["Actions involve only devices included in the Security Fabric.", "An automation stitch can have multiple triggers.", "Multiple actions can run in parallel.", "Triggers can involve external connectors."],
        answer: "CD",
        image: null
    },
    {
        id: 15,
        question: "Which three statements about SD-WAN performance SLAs are true? (Choose three.)",
        options: ["They rely on session loss and jitter.", "They can be measured actively or passively.", "They are applied in a SD-WAN rule lowest cost strategy.", "They monitor the state of the FortiGate device.", "All the SLA targets can be configured."],
        answer: "BCE",
        image: null
    },
    {
        id: 16,
        question: "Which two statements are true about an HA cluster? (Choose two.)",
        options: ["An HA cluster cannot have both in-band and out-of-band management interfaces at the same time.", "Link failover triggers a failover if the administrator sets the interface down on the primary device.", "When sniffing the heartbeat interface, the administrator must see the IP address 169.254.0.2.", "HA incremental synchronization includes FIB entries and IPsec SAs."],
        answer: "BD",
        image: null
    },
    {
        id: 17,
        question: "A network administrator enabled antivirus and selected an SSL inspection profile on a firewall policy. When downloading an EICAR test file through HTTP, FortiGate detects the virus and blocks the file. When downloading the same file through HTTPS, FortiGate does not detect the virus and does not block the file, allowing it to be downloaded. The administrator confirms that the traffic matches the configured firewall policy. What are two reasons for the failed virus detection by FortiGate? (Choose two.)",
        options: ["The selected SSL inspection profile has certificate inspection enabled.", "The website is exempted from SSL inspection.", "The EICAR test file exceeds the protocol options oversize limit.", "The browser does not trust the FortiGate self-signed CA certificate."],
        answer: "AB",
        image: null
    },
    {
        id: 18,
        question: "You have configured the below commands on a FortiGate. What would be the impact of this configuration on FortiGate?",
        options: ["FortiGate will enable strict RPF on all its interfaces and port1 will be enabled for asymmetric routing.", "FortiGate will enable strict RPF on all its interfaces and port1 will be exempted from RPF checks.", "Port1 will be enabled with flexible RPF, and all other interfaces will be enabled for strict RPF", "The global configuration will take precedence and FortiGate will enable strict RPF on all interfaces."],
        answer: "B",
        image: "images/q19.png"
    },
    {
        id: 19,
        question: "Refer to the exhibit. What would be the impact of these settings on the Server certificate SNI check configuration on FortiGate?",
        options: ["FortiGate will accept and use the CN in the server certificate for URL filtering if the SNI does not match the CN or SAN fields.", "FortiGate will accept the connection with a warning if the SNI does not match the CN or SAN fields.", "FortiGate will close the connection if the SNI does not match the CN or SAN fields.", "FortiGate will close the connection if the SNI does not match the CN and SAN fields"],
        answer: "C",
        image: "images/q20.png"
    },
    {
        id: 20,
        question: "A new administrator is configuring FSSO authentication on FortiGate using DC Agent Mode. Which step is NOT part of the expected process?",
        options: ["The DC agent sends login event data directly to FortiGate.", "The user logs into the windows domain.", "The collector agent forwards login event data to FortiGate.", "FortiGate determines user identity based on the IP address in the FSSO list."],
        answer: "A",
        image: null
    },
    {
        id: 21,
        question: "A network administrator is reviewing firewall policies in both Interface Pair View and By Sequence View. The policies appear in a different order in each view. Why is the policy order different in these two views?",
        options: ["Policies in Interface Pair View are prioritized by security levels, while By Sequence View strictly follows the administrator's manual ordering.", "By Sequence View groups policies based on rule priority, while Interface Pair View always follows the order of traffic logs.", "The firewall dynamically reorders policies in Interface Pair View based on recent traffic patterns, but By Sequence View remains static.", "Interface Pair View sorts policies based on matching interfaces, while By Sequence View shows the actual processing order of rules."],
        answer: "D",
        image: null
    },
    {
        id: 22,
        question: "An administrator notices that some users are unable to establish SSL VPN connections, while others can connect without any issues. What should the administrator check first?",
        options: ["Ensure that the affected users are using the correct port number.", "Ensure that user traffic is hitting the firewall policy.", "Ensure that forced tunneling is enabled to reroute all traffic through the SSL VPN", "Ensure that the HTTPS service is enabled on SSL VPN tunnel interface"],
        answer: "A",
        image: null
    },
    {
        id: 23,
        question: "Refer to the exhibit. An administrator has created a new firewall address to use as the destination for a static route. Why is the administrator not able to select the new address in the Destination field of the new static route?",
        options: ["In the new static route, the administrator must select Named Address.", "In the new firewall address, the FQDN address must first be resolved.", "In the new static route, the administrator must first set the interface to port2.", "In the new firewall address, Routing configuration must be enabled."],
        answer: "D",
        image: "images/q24.png"
    },
    {
        id: 24,
        question: "FortiGate is operating in NAT mode and has two physical interfaces connected to the LAN and DMZ networks respectively. Which two statements about the requirements of connected physical interfaces on FortiGate are true? (Choose two.)",
        options: ["Both interfaces must have the interface role assigned.", "Both interfaces must have directly connected routes on the routing table.", "Both interfaces must have DHCP enabled and interfaces set to LAN and DMZ roles assigned.", "Both interfaces must have IP addresses assigned."],
        answer: "BD",
        image: null
    },
    {
        id: 25,
        question: "When configuring a FortiGate in a multi-WAN setup, why would an administrator enable session preservation on an interface?",
        options: ["To allow the FortiGate to dynamically change interfaces for all active sessions when a WAN link fails", "To make sure all sessions without source NAT enabled always use the primary WAN link", "To improve security by forcing users to authenticate again when the WAN link changes", "To ensure that existing SSL VPN connections remain on the same interface even if route changes occur"],
        answer: "D",
        image: null
    },
    {
        id: 26,
        question: "You are analyzing connectivity problems caused by intermediate devices blocking traffic in SSL VPN environment. In which two ways can you effectively resolve the problem? (Choose two.)",
        options: ["You can turn off IKE fragmentation to fix large certificate negotiation problems.", "You should use IPsec to solve issues with fragment drops and large certificate exchanges.", "You can use SSL VPN tunnel mode to prevent problems with blocked ESP and UDP ports (500 or 4500).", "You can configure a hub-and-spoke topology with SSL VPN tunnels to bypass blocked UDP ports."],
        answer: "CD",
        image: null
    },
    {
        id: 27,
        question: "Refer to the exhibit. FortiGate has two separate firewall policies for Sales and Engineering to access the same web server with the same security profiles. Which action must the administrator perform to consolidate the two policies into one?",
        options: ["Create an Aggregate interface that includes port1 and port2 to create a single firewall policy.", "Select port1 and port2 subnets in a single firewall policy.", "Replace port1 and port2 with the any interface in a single firewall policy.", "Enable Multiple Interface Policies to select port1 and port2 in the same firewall policy."],
        answer: "D",
        image: "images/q28.png"
    },
    {
        id: 28,
        question: "You have configured an application control profile, set peer-to-peer traffic to Block under the Categories tab, and applied it to the firewall policy. However, your peer-to-peer traffic on known ports is passing through the FortiGate without being blocked. What FortiGate settings should you check to resolve this issue?",
        options: ["FortiGuard category ratings", "Application and Filter Overrides", "Network Protocol Enforcement", "Replacement Messages for UDP-based Applications"],
        answer: "C",
        image: null
    },
    {
        id: 29,
        question: "When configuring firewall policies which of the following is true regarding the policy ID?",
        options: ["It is mandatory to provide a policy ID while creating a firewall policy regardless of GUI or CLI.", "A firewall policy ID identifies the order of policy execution in firewall policies.", "You can create a policy in CLI with policy ID 0.", "A policy ID cannot be edited once a policy is created."],
        answer: "D",
        image: null
    },
    {
        id: 30,
        question: "Which two statements are correct when FortiGate enters conserve mode? (Choose two.)",
        options: ["FortiGate continues to run critical security actions, such as quarantine.", "FortiGate refuses to accept configuration changes.", "FortiGate halts complete system operation and requires a reboot to regain available resources.", "FortiGate continues to transmit packets without IPS inspection when the fail-open global setting in IPS is enabled."],
        answer: "BD",
        image: null
    },
    {
        id: 31,
        question: "A remote user reports slow SSL VPN performance and frequent disconnections. The user is located in an area with poor internet connectivity. What setting should the administrator adjust to improve the user's experience?",
        options: ["Enable split tunneling to reduce VPN traffic.", "Change the SSL VPN port to a non-standard port.", "Increase the session timeout for inactive sessions.", "Configure the DTLS timeout to accommodate high-latency connections."],
        answer: "D",
        image: null
    },
    {
        id: 32,
        question: "An administrator wants to analyze and manage digital certificates to prevent browser warnings when users connect to the SSL VPN portal. Which two statements describe how to correctly do this? (Choose two.)",
        options: ["The administrator can rely on the default FortiGate self-signed certificate to prevent all security warnings in the browser.", "The administrator must disable HTTPS administrative access entirely to avoid certificate warnings.", "The administrator can use a publicly trusted certificate from a known certificate authority (CA) to stop browser warnings.", "The administrator can import the FortiGate self-signed certificate into each user's browser as a trusted certificate."],
        answer: "CD",
        image: null
    },
    {
        id: 33,
        question: "An administrator suspects that the Collector Agent is not forwarding login events to FortiGate. What is the most effective troubleshooting step?",
        options: ["Verify if DC agent is enabled on the FortiGate.", "Restart the domain controller to refresh authentication services.", "Verify if FortiGate is set to use LDAP authentication instead of FSSO.", "Check if TCP port 8000 is open between the collector agent and FortiGate."],
        answer: "D",
        image: null
    },
    {
        id: 34,
        question: "Refer to the exhibit. A network administrator is troubleshooting an IPsec tunnel between two FortiGate devices. The administrator has determined that phase 1 status is up, but phase 2 fails to come up. Based on the phase 2 configuration shown in the exhibit, which two configuration changes will bring phase 2 up? (Choose two.)",
        options: ["On BR1-FGT, set Seconds to 43200.", "On HQ-NGFW, enable Diffie-Hellman Group 2.", "On BR1-FGT, set Remote Address to 10.0.11.0/255.255.255.0", "On HQ-NGFW, set Encryption to AES256"],
        answer: "CD",
        image: "images/q35.png"
    },
    {
        id: 35,
        question: "Refer to the exhibits. An administrator has observed the performance status outputs on an HA cluster for 55 seconds. Which FortiGate is the primary?",
        options: ["HQ-NGFW-2 with the parameter memory-failover-threshold setting", "HQ-NGFW-2 with the parameter priority setting", "HQ-NGFW-1 with the parameter memory-failover-flip-timeout setting", "HQ-NGFW-1 with the parameter override setting"],
        answer: "A",
        image: "images/q36.png"
    },
    {
        id: 36,
        question: "Which statement correctly describes NetAPI polling mode for the FSSO collector agent?",
        options: ["The collector agent uses a Windows API to query DCs for user logins.", "NetAPI polling can increase bandwidth usage in large networks.", "The NetSessionEnum function is used to track user logouts.", "The collector agent must search Windows application event logs."],
        answer: "C",
        image: null
    },
    {
        id: 37,
        question: "You have configured the FortiGate device for FSSO. A user is successful in log-in to windows, but their access to the internet is denied. What should the administrator check first?",
        options: ["Whether the user is assigned to the correct AD group.", "The FortiGate firewall policy settings for SSL decryption.", "The FortiGate FSSO active users list for user's IP address.", "The windows event viewer for failed login attempts."],
        answer: "C",
        image: null
    },
    {
        id: 38,
        question: "What are three key routing principles in SD-WAN? (Choose three.)",
        options: ["By default, SD-WAN rules are skipped if the included SD-WAN members do not have a valid route to the destination.", "SD-WAN rules have precedence over any other type of routes.", "Regular policy routes have precedence over SD-WAN rules.", "By default, SD-WAN rules are skipped if only one route to the destination is available.", "By default, SD-WAN rules are skipped if the best route to the destination is not an SD-WAN member."],
        answer: "ACE",
        image: null
    },
    {
        id: 39,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, as well as the IP pool configuration and firewall policy objects. The WAN (port2) interface has the IP address 100.65.0.101/24. The LAN (port4) interface has the IP address 10.0.11.254/24. Which IP address will be used to source NAT (SNAT) the traffic, if the user on HQ-PC-1 (10.0.11.50) pings the IP address of BR-FGT (100.65.1.111)",
        options: ["100.65.0.101", "100.65.0.49", "100.65.0.99", "100.65.0.149"],
        answer: "C",
        image: "images/q40.png"
    },
    {
        id: 40,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, and the firewall configuration. An administrator created a Deny policy with default settings to deny Webserver access for Remote-User2. The policy should work such that Remote-User1 must be able to access the Webserver while preventing Remote-User2 from accessing the Webserver. Which additional configuration can the administrator add to a deny firewall policy, beyond the default behavior, to block Remote-User2 from accessing the Webserver?",
        options: ["Disable match-vip in the Allow_access policy", "Configure a One-to-One IP Pool object in a new policy.", "Set the Destination address as Webserver in the Deny policy.", "Set the Destination address as Deny_IP in the Allow_access policy."],
        answer: "C",
        image: "images/q41.png"
    },
    {
        id: 41,
        question: "Refer to the exhibits. The exhibits show the system performance output and default configuration of high memory usage thresholds on a FortiGate device. Based on the system performance output, what are the two possible outcomes? (Choose two.)",
        options: ["FortiGate has entered conserve mode.", "Administrators can access FortiGate only through the console port.", "Administrators can change the configuration.", "FortiGate drops new sessions."],
        answer: "AD",
        image: "images/q42.png"
    },
    {
        id: 42,
        question: "Refer to the exhibits. Based on the current HA status, an administrator updates the override and priority parameters on HQ-NGFW-1 and HQ-NGFW-2 as shown in the exhibit. What would be the expected outcome in the HA cluster?",
        options: ["HQ-NGFW-1 will synchronize the override disable setting with HQ-NGFW-2.", "HQ-NGFW-2 will take over as the primary because it has the override enable setting and higher priority than HQ-NGFW-1.", "HQ-NGFW-1 will remain the primary because HQ-NGFW-2 has lower priority.", "The HA cluster will become out of sync because the override setting must match on all HA members."],
        answer: "B",
        image: "images/q43.png"
    },
    {
        id: 43,
        question: "Refer to the exhibits. An administrator wants to add HQ-ISFW-2 in the Security Fabric. HQ-ISFW-2 is in the same subnet as HQ-ISFW. After configuring the Security Fabric settings on HQ-ISFW-2, the status stays Pending. What can be the two possible reasons? (Choose two.)",
        options: ["Upstream FortiGate IP must be set to 10.0.11.254.", "SAML Single Sign-On must be set to Manual.", "HQ-ISFW-2 must be authorized on HQ-ISFW.", "Management IP must be set to 10.0.13.254."],
        answer: "AC",
        image: "images/q44.png"
    },
    {
        id: 44,
        question: "Refer to the exhibit. The exhibit shows the FortiGuard Category Based Filter section of a corporate web filter profile. An administrator must block access to download.com, which belongs to the Freeware and Software Downloads category. The administrator must also allow other websites in the same category. What are two solutions for satisfying the requirement? (Choose two.)",
        options: ["Configure a static URL filter entry for download.com with Type and Action set to Wildcard and Block, respectively.", "Configure a web override rating for download.com and select Malicious Websites as the subcategory.", "Configure a separate firewall policy with action Deny and an FQDN address object for *.download.com as destination address.", "Set the Freeware and Software Downloads category Action to Warning."],
        answer: "AB",
        image: "images/q45.png"
    },
    {
        id: 45,
        question: "Which three strategies are valid SD-WAN rule strategies for member selection? (Choose three.)",
        options: ["Lowest Cost (SLA) without load balancing", "Manual with load balancing", "Lowest Quality (SLA) with load balancing", "Lowest Cost (SLA) with load balancing", "Best Quality with load balancing"],
        answer: "ABD",
        image: null
    },
    {
        id: 46,
        question: "What are two characteristics of HA cluster heartbeat IP addresses in a FortiGate device? (Choose two.)",
        options: ["Heartbeat interfaces have virtual IP addresses that are manually assigned.", "Heartbeat IP addresses are used to distinguish between cluster members.", "The heartbeat interface of the primary device in the cluster is always assigned IP address 169.254.0.1.", "A change in the heartbeat IP address happens when a FortiGate device joins or leaves the cluster."],
        answer: "BD",
        image: null
    },
    {
        id: 47,
        question: "Refer to the exhibit, which contains a RADIUS server configuration. An administrator added a configuration for a new RADIUS server. While configuring, the administrator enabled Include in every user group. What is the impact of enabling Include in every user group in a RADIUS configuration?",
        options: ["This option places the RADIUS server, and all users who can authenticate against that server, into every FortiGate user group.", "This option places the RADIUS server, and all users who can authenticate against that server, into every RADIUS group.", "This option places all users into every RADIUS user group, including groups that are used for the LDAP server on FortiGate.", "This option places all FortiGate users and groups required to authenticate into the RADIUS server, which, in this case, is FortiAuthenticator."],
        answer: "A",
        image: "images/q48.png"
    },
    {
        id: 48,
        question: "Refer to the exhibits. An administrator creates a new address object on the root FortiGate (HQ-NGFW-1) in the Security Fabric. After synchronization, this object is not available on the downstream FortiGate (HQ-ISFW). What must the administrator do to synchronize the address object?",
        options: ["Change the csf setting on HQ-ISFW (downstream) to set configuration-sync local.", "Change the csf setting on HQ-ISFW (downstream) to set saml-configuration-sync default.", "Change the csf setting on HQ-NGFW-1 (root) to set fabric-object-unification default.", "Change the csf setting on both devices to set downstream-access enable."],
        answer: "C",
        image: ["images/q49_1.png", "images/q49_2.png", "images/q49_3.png", "images/q49_4.png"]
    },
    {
        id: 49,
        question: "Refer to the exhibit showing a debug flow output. Which two conclusions can you make from the debug flow output? (Choose two.)",
        options: ["The default gateway is configured on port2.", "The RPF check fails.", "The debug flow is for UDP traffic.", "The matching firewall policy denies the traffic."],
        answer: "AD",
        image: "images/q50.png"
    },
    {
        id: 50,
        question: "When FortiGate performs SSL/SSH full inspection, you can decide how it should react when it detects an invalid certificate. Which three actions are valid actions that FortiGate can perform when it detects an invalid certificate? (Choose three.)",
        options: ["Allow", "Trust & Allow", "Allow & Warning", "Block", "Block & Warning"],
        answer: "ABE",
        image: null
    },
    {
        id: 51,
        question: "You want to ensure that an SSL VPN user's authenticated session does not remain active after they disconnect from the VPN. Which configuration will ensure this?",
        options: ["Configure the firewall authentication session timeout to be lower than the SSL VPN session timeout.", "Manually clear active firewall authentication sessions after a user disconnects.", "Increase the SSL VPN idle timeout to reduce the chance of early disconnections.", "Enable settings to force the firewall authentication session to end when the SSL VPN session ends"],
        answer: "D",
        image: null
    },
    {
        id: 52,
        question: "Refer to the exhibit, which shows a firewall policy to enable active authentication. When attempting to access an external website using an active authentication method, the user is not presented with a login prompt. What is the most likely reason for this situation?",
        options: ["The Service DNS is required in the firewall policy.", "The Remote-users group must be set up correctly in the FSSO configuration.", "No matching user account exists for this user.", "The Remote-users group is not added to the Destination."],
        answer: "A",
        image: "images/q53.png"
    },
    {
        id: 53,
        question: "Refer to the exhibit. Why did the FortiGate device drop the packet?",
        options: ["It matched the default implicit firewall policy.", "It matched an explicitly configured firewall policy with the action DENY.", "It cannot reach the next-hop IP.", "It failed the RPF check."],
        answer: "A",
        image: "images/q54.png"
    },
    {
        id: 54,
        question: "Refer to the exhibit, which shows a routing table. An administrator wants to create a new static route so the traffic to the subnet 172.20.1.0/24 is routed through port2 only. What are the two criteria that the administrator can use to achieve this objective? (Choose two.)",
        options: ["The new static route must have the distance set to 9.", "The existing static route through port3 must have the distance set to 11.", "The new static route must have the priority set to 3.", "The new static route must have the metric set to 1."],
        answer: "AB",
        image: "images/q55.png"
    },
    {
        id: 55,
        question: "Refer to the exhibit. Why is the Antivirus scan switch grayed out when you are creating a new antivirus profile for FTP?",
        options: ["None of the inspected protocols are active in this profile.", "FortiGate, with less than 2 GB RAM, does not support the Antivirus scan feature.", "Antivirus scan is disabled under System -> Feature visibility.", "The Feature Set for the profile is Flow-based but it must be Proxy-based."],
        answer: "A",
        image: "images/q56.png"
    },
    {
        id: 56,
        question: "An administrator has configured a dialup IPsec VPN on FortiGate with add-route enabled. However, the static route is not showing in the routing table. Which two statements about this scenario are correct? (Choose two.)",
        options: ["The administrator must enable a dynamic routing protocol on the dialup interface.", "The administrator must use a policy route instead of a static route for add-route to work properly.", "The administrator must ensure phase 2 is successfully established.", "The administrator must define the remote network correctly in the phase 2 selectors."],
        answer: "CD",
        image: null
    },
    {
        id: 57,
        question: "An administrator configured a FortiGate device to act as a collector for agentless polling mode. What must the administrator add to the FortiGate device to retrieve AD user group information?",
        options: ["TACACS server", "LDAP server", "RADIUS server", "Keycloak server"],
        answer: "B",
        image: null
    },
    {
        id: 58,
        question: "What are two features of FortiGate FSSO agentless polling mode? (Choose two.)",
        options: ["FortiGate directs the collector agent to use a remote LDAP server.", "FortiGate uses the SMB protocol to read the event viewer logs from the DCs.", "FortiGate does not support workstation check.", "FortiGate uses the AD server as the collector agent."],
        answer: "BC",
        image: null
    },
    {
        id: 59,
        question: "Which two statements about proxy-based antivirus scanning mode are true? (Choose two.)",
        options: ["It handles connections sequentially without offloading capabilities.", "It sends a reset packet to the client if a virus is found.", "It can inspect nested archives up to the configured limitation layer.", "It allows the client to receive the entire file before scanning it."],
        answer: "CD",
        image: null
    },
    {
        id: 60,
        question: "An administrator needs to create a script to look up logs on FortiAnalyzer using an automated workflow tool. Which method must the tool use to successfully interact with FortiAnalyzer?",
        options: ["JSON API", "XML API", "REST API", "SOAP API"],
        answer: "C",
        image: null
    },
    {
        id: 61,
        question: "Which two statements about FortiGate inspection modes are true? (Choose two.)",
        options: ["Proxy mode uses more memory compared to flow mode.", "Flow mode uses the client comfort option to buffer files.", "Switching between modes does not affect active traffic.", "Proxy mode can extract and scan files from compressed attachments."],
        answer: "AD",
        image: null
    },
    {
        id: 62,
        question: "An administrator is setting up an IPsec VPN tunnel between two FortiGate units using IKEv2. Which statement is correct regarding IKEv2 configuration?",
        options: ["IKEv2 does not support aggressive mode negotiation.", "IKEv2 uses a simplified exchange process consisting of only two phases.", "IKEv2 requires the use of pre-shared keys only.", "IKEv2 automatically enables XAuth authentication by default."],
        answer: "B",
        image: null
    },
    {
        id: 63,
        question: "When configuring a firewall policy on a FortiGate device, what is the significance of the logtraffic-start setting?",
        options: ["It logs sessions when they are first established, which can increase log volume.", "It replaces the default logtraffic setting entirely.", "It ensures logs are only sent to FortiCloud rather than local memory.", "It limits logging to security-related incidents only."],
        answer: "A",
        image: null
    },
    {
        id: 64,
        question: "Which two statements describe the function of NTurbo in flow-based inspection? (Choose two.)",
        options: ["NTurbo offloads firewall policy processing to the content processor.", "For flow-based inspection, NTurbo establishes a dedicated data path to redirect traffic between the IPS engine and FortiGate ingress and egress interfaces.", "For proxy-based inspection, NTurbo buffers the whole file and then sends it to the antivirus engine.", "For flow-based inspection, NTurbo bypasses the antivirus engine to increase speed."],
        answer: "B",
        image: null
    },
    {
        id: 65,
        question: "Refer to the exhibit. What can you determine about the traffic?",
        options: ["It is being offloaded to the NPU.", "It is being inspected by the flow-based IPS engine.", "It is being inspected by the proxy-based engine.", "It is an IPsec traffic being offloaded to the CP8/CP9 hardware."],
        answer: "B",
        image: "images/q66.png"
    },
    {
        id: 66,
        question: "Which two statements about FortiGate SD-WAN are true? (Choose two.)",
        options: ["When SD-WAN is configured, regular static routes are ignored.", "SD-WAN rules can be used to select outgoing interfaces based on applications.", "SD-WAN rules can be used to select outgoing interfaces based on performance SLA.", "SD-WAN can be configured only on physical interfaces."],
        answer: "BC",
        image: ["images/q67_1.png", "images/q67_2.png", "images/q67_3.png"]
    },
    {
        id: 67,
        question: "An administrator is configuring a FortiGate to use a remote LDAP server for authentication. Which two steps are required to ensure that LDAP authentication works correctly? (Choose two.)",
        options: ["Configure the LDAP server IP address and port on the FortiGate.", "Define a user group on the FortiGate and add the remote LDAP server as a member.", "Configure the FortiGate to send an authentication request to the LDAP server.", "Ensure that the LDAP server is reachable from the FortiGate interface."],
        answer: "AD",
        image: null
    },
    {
        id: 68,
        question: "What is the purpose of the set service-port command in the explicit web proxy configuration?",
        options: ["To define the port used for administrative HTTPS access.", "To specify the port numbers that the explicit proxy will listen on for client requests.", "To restrict proxy access to specific source IP subnets.", "To bind the explicit proxy to a specific hardware interface."],
        answer: "B",
        image: null
    },
    {
        id: 69,
        question: "An administrator has enabled the access-log option on an explicit web proxy policy. What type of information will be included in the logs generated by this policy?",
        options: ["Detailed system performance data, such as CPU and memory usage.", "Detailed information about HTTP and HTTPS requests, including URLs, status codes, and user agents.", "Information about IPsec VPN phase 1 and phase 2 negotiations.", "Logs related to HA cluster heartbeat synchronization events."],
        answer: "B",
        image: null
    },
    {
        id: 70,
        question: "What are two features of collector agent advanced mode? (Choose two.)",
        options: ["Advanced mode supports nested or inherited groups.", "In advanced mode, security profiles can be applied only to user groups, not individual users.", "In advanced mode, FortiGate can be configured as an LDAP client and group filters can be configured on FortiGate.", "Advanced mode requires less processing overhead on the Domain Controller."],
        answer: "AC",
        image: null
    },
    {
        id: 71,
        question: "An administrator wants to use port 443 for both SSL VPN and HTTPS administrative access on a single FortiGate interface. Which two solutions can the administrator implement to accomplish this? (Choose two.)",
        options: ["Configure the SSL VPN to use a different port, such as 10443.", "Enable the multi-port sharing feature in the global system settings.", "Change the HTTPS administrative access port to a non-standard port.", "Bind the services to different loopback IP addresses on the same interface."],
        answer: "AC",
        image: null
    },
    {
        id: 72,
        question: "Which statement is true regarding the use of user groups in a firewall policy configured with active authentication?",
        options: ["The user group must be added to the Source field of the firewall policy.", "The user group must be added to the Destination field of the firewall policy.", "The user group must be mapped directly to a physical interface configuration.", "Active authentication policies do not require user groups if guest access is enabled."],
        answer: "A",
        image: null
    },
    {
        id: 73,
        question: "An administrator needs to configure an automation stitch that triggers whenever an administrative configuration change occurs. Which trigger type should be used?",
        options: ["Log-based trigger", "Event-based trigger", "Schedule-based trigger", "Fabric-based trigger"],
        answer: "A",
        image: null
    },
    {
        id: 74,
        question: "When configuring a static route on a FortiGate device, what does a distance value of 10 signify compared to a distance value of 20?",
        options: ["The route with distance 10 has higher administrative preference and will be active.", "The route with distance 20 will be used as the primary path for ECMP load balancing.", "The distance value determines the physical link speed metrics.", "Both routes will be injected into the routing table concurrently regardless of value."],
        answer: "A",
        image: null
    },
    {
        id: 75,
        question: "Which statement correctly describes the operation of a FortiGate cluster operating in Active-Passive HA mode?",
        options: ["The secondary device processes all security profile operations simultaneously.", "The primary device processes all traffic and updates the secondary device with session state changes.", "Both devices share the routing load using a round-robin distribution algorithm.", "The secondary device completely disables its network interfaces until a failure is detected."],
        answer: "B",
        image: null
    },
    {
        id: 76,
        question: "An administrator is reviewing a debug flow output and notices the message 'iprope_in_check() failed'. What does this message indicate?",
        options: ["The packet failed the reverse path forwarding check.", "No matching firewall policy was found to allow the traffic.", "The destination IP address could not be resolved by DNS.", "The packet size exceeded the maximum transmission unit limitation."],
        answer: "B",
        image: null
    },
    {
        id: 77,
        question: "Refer to the exhibit. Which two statements are true about the configuration? (Choose two.)",
        options: ["The policy allows all traffic from the internal network to the internet.", "Traffic that matches the firewall policy will be processed using flow-based inspection.", "The policy has full SSL inspection enabled using a custom profile.", "Antivirus scanning is applied to all supported file transfers matching this policy."],
        answer: "BD",
        image: "images/q78.png"
    },
    {
        id: 78,
        question: "Which two statements about HA configuration synchronization are true? (Choose two.)",
        options: ["Synchronization checks are executed only on the primary FortiGate device within the HA cluster.", "Checksums of devices are compared against each other to ensure configurations are the same.", "Incremental configuration synchronization can occur only from changes made on the primary FortiGate device.", "Checksums of devices will be different from each other because some configuration items are not synced to other HA members."],
        answer: "BC",
        image: null
    },
    {
        id: 79,
        question: "Refer to the exhibit, which shows an SD-WAN zone configuration on the FortiGate GUI. Based on the exhibit, which statement is true?",
        options: ["The d-wan zone cannot be deleted.", "The underlay zone contains port1 and port2.", "The d-wan zone contains no member.", "The virtual-wan-link zone contains no member."],
        answer: "BC",
        image: ["images/q80_1.png", "images/q80_2.png", "images/q80_3.png"]
    },
    {
        id: 80,
        question: "Refer to the exhibit. An administrator created a Deny policy with default settings to deny Webserver access for Remote-User2. The policy should work such that Remote-User1 must be able to access the Webserver while preventing Remote-User2 from accessing the Webserver. Which additional configuration can the administrator add to a deny firewall policy, beyond the default behavior, to block Remote-User2 from accessing the Webserver?",
        options: ["Enable NAT on the Allow_access firewall policy.", "Disable NAT on the Internet_Access firewall policy.", "Disable port forwarding on the VIP object.", "Create a new firewall policy before Internet_Access for the webserver and apply the IP pool."],
        answer: "CD",
        image: "images/q81.png"
    },
    {
        id: 81,
        question: "Which statement is a characteristic of automation stitches?",
        options: ["They can execute CLI configurations directly in response to system alerts.", "They can only involve local devices and cannot use webhooks.", "They operate completely out-of-band and do not require the Security Fabric.", "They are restricted to scheduling events and cannot be triggered by logs."],
        answer: "A",
        image: null
    },
    {
        id: 82,
        question: "When configuring a FortiGate device as an FSSO collector agent, what is the default port used to communicate with the FortiGate unit?",
        options: ["Port 8000", "Port 8001", "Port 443", "Port 389"],
        answer: "A",
        image: null
    },
    {
        id: 83,
        question: "Refer to the exhibit. Why did FortiGate drop the packet?",
        options: ["It matched the default implicit firewall policy.", "It failed the RPF check.", "The next-hop IP address is unreachable.", "It matched an explicitly configured firewall policy with the action DENY."],
        answer: "A",
        image: ["images/q84_1.png", "images/q84_2.png", "images/q84_3.png"]
    },
    {
        id: 84,
        question: "Refer to the exhibits, which show the firewall policy and an antivirus profile configuration. Why is the user unable to receive a block replacement message when downloading an infected file for the first time?",
        options: ["Flow-based inspection is used, which resets the last packet to the user.", "The antivirus profile is configured in proxy mode but the policy is flow mode.", "The client's browser does not support HTML replacement message structures.", "The file size exceeds the threshold configured under system protocol options."],
        answer: "A",
        image: ["images/q85_1.png", "images/q85_2.png"]
    },
    {
        id: 85,
        question: "Refer to the exhibits, which show the system performance output and the default configuration of high memory usage thresholds in a FortiGate. Based on the system performance output, what can be the two possible outcomes? (Choose two.)",
        options: ["FortiGate will start sending all files to FortiSandbox for inspection.", "Administrators can access FortiGate only through the console port.", "FortiGate has entered conserve mode.", "Administrators cannot change the configuration."],
        answer: "CD",
        image: ["images/q86_1.png", "images/q86_2.png"]
    },
    {
        id: 86,
        question: "Refer to the exhibit to view the firewall policy. Why would the firewall policy not block a well-known virus, for example eicar?",
        options: ["The antivirus profile has been disabled for FTP traffic.", "The firewall policy doesn't have an SSL inspection profile applied.", "The inspection mode is set to flow-based instead of proxy-based.", "The antivirus database needs a manual update from FortiGuard."],
        answer: "B",
        image: null
    },
    {
        id: 87,
        question: "Which statement is true regarding the operation of the explicit web proxy on a FortiGate device?",
        options: ["It requires the client browser to be explicitly configured to send web traffic to the proxy IP and port.", "It automatically intercepts all HTTP traffic passing through the FortiGate transparently.", "It does not support user authentication mechanisms.", "It is only available when the FortiGate is running in transparent deployment mode."],
        answer: "A",
        image: null
    },
    {
        id: 88,
        question: "The HTTP inspection process in web filtering follows a specific order when multiple features are enabled in the web filter profile. Which order must FortiGate use when the web filter profile has features such as safe search enabled?",
        options: ["DNS-based web filter and proxy-based web filter", "Static URL filter, FortiGuard category filter, and advanced filters", "FortiGuard category filter and rating filter", "Static domain filter, SSL inspection filter, and external connectors filters"],
        answer: "B",
        image: "images/q89.png"
    },
    {
        id: 89,
        question: "Refer to the exhibit. Which algorithm does SD-WAN use to distribute traffic that does not match any of the SD-WAN rules?",
        options: ["Traffic is sent to the link with the lowest latency.", "All traffic from a source IP is sent to the same interface.", "All traffic from a source IP to a destination IP is sent to the same interface.", "Traffic is distributed based on the implicit rule strategy."],
        answer: "D",
        image: null
    },
    {
        id: 90,
        question: "An administrator needs to allow administrative access to a FortiGate device from a specific subnet only. Where should this restriction be configured?",
        options: ["In the administrator profile settings.", "Under the system interface configurations using trusted hosts.", "Using an explicit loopback local-in policy.", "Within the Security Fabric fabric-connector definitions."],
        answer: "B",
        image: null
    },
    {
        id: 91,
        question: "Which three parameters are used by FortiGate to calculate the checksum for HA configuration synchronization? (Choose three.)",
        options: ["System configuration settings", "Routing table elements", "Firewall policy configurations", "Security profile definitions", "DHCP lease listings"],
        answer: "ACD",
        image: null
    },
    {
        id: 92,
        question: "When deploying a FortiGate unit in transparent mode, which statement is true regarding management access?",
        options: ["The device requires a management IP address assigned to a virtual domain interface.", "Management access can only be achieved via the physical DB9 console connection.", "Each physical interface must have a distinct layer 3 IP address assigned.", "The FortiGate automatically responds to administrative traffic on any unassigned port."],
        answer: "A",
        image: null
    },
    {
        id: 93,
        question: "What is the purpose of enabling the 'preserve-session-route' parameter in a multi-WAN environment?",
        options: ["To guarantee that traffic returning from a server is routed back through the same interface it left.", "To preserve the source MAC address across asymmetrical routing domains.", "To allow FortiGate to offload active sessions directly into the hardware NP layer.", "To maintain VPN session stability across dynamic PPPoE connection renewals."],
        answer: "A",
        image: null
    },
    {
        id: 94,
        question: "An administrator wants to track user web activity by generating logs containing the full HTTP request header details. Which profile and mode must be utilized?",
        options: ["Web Filter profile in proxy-based inspection mode.", "Application Control profile in flow-based inspection mode.", "IPS profile utilizing extreme signature patterns.", "Antivirus profile with deep archive extraction options."],
        answer: "A",
        image: null
    },
    {
        id: 95,
        question: "Which authentication method is supported by the FortiGate explicit web proxy for identifying internal network users?",
        options: ["Active Directory via FSSO or LDAP authentication.", "RADIUS authentication using chap challenges only.", "SAML single-sign-on without explicit browser configuration capabilities.", "Local-in authentication using hardware MAC addresses signatures."],
        answer: "A",
        image: null
    },
    {
        id: 96,
        question: "What is a prerequisite for configuring an automation stitch that sends an email alert using FortiGuard email services?",
        options: ["The FortiGate must be explicitly authorized within the Security Fabric.", "A valid FortiCloud account must be registered and active on the device.", "The administrator must configure a custom SMTP relay server in local settings.", "The device must be running in proxy-based global inspection mode."],
        answer: "B",
        image: null
    },
    {
        id: 97,
        question: "When configuring an explicit web proxy policy, which field specifies the allowed source addresses?",
        options: ["The Source Address field in the proxy policy object.", "The Incoming Interface bindings options.", "The local-in policy packet matching tables.", "The explicit proxy global listening address exceptions list."],
        answer: "A",
        image: null
    },
    {
        id: 98,
        question: "An administrator wants to prevent users from bypassing web filtering blocks by typing the destination IP address directly into the browser URL bar. Which option helps address this?",
        options: ["Enable the 'Scan encrypted connections' options in SSL inspection.", "Enable the 'Match VIP' parameter within the explicit local policies.", "Ensure that FortiGuard web filtering is running alongside deep-packet inspection.", "Configure a static block route for public IP spaces."],
        answer: "C",
        image: null
    },
    {
        id: 99,
        question: "Which statement is correct regarding session synchronization in an Active-Passive HA cluster deployment?",
        options: ["All active sessions, including UDP and ICMP connections, are synchronized continuously by default.", "Only established TCP sessions are synchronized by default to maintain cluster state.", "Session synchronization requires a dedicated physical interface separate from heartbeats.", "The secondary unit drops its session tables every 60 seconds to clear stale paths."],
        answer: "B",
        image: null
    },
    {
        id: 100,
        question: "An administrator is troubleshooting a web filter issue and notices that an allowed domain name is being blocked. What could be a reason for this conflict?",
        options: ["A static URL filter block rule takes precedence over a FortiGuard category allow rule.", "The domain name has expired within the local DNS database tables.", "The FortiGate has entered conserve mode and is bypassing all profile exceptions.", "The SSL inspection profile is blocking the connection due to an SNI mismatch."],
        answer: "A",
        image: null
    },
    {
        id: 101,
        question: "What is the primary benefit of deploying a FortiGate Security Fabric architecture across an enterprise network?",
        options: ["It enables consolidated visibility and automated security actions across multiple Fortinet devices.", "It increases the physical throughput capacities of edge interfaces by bundling links.", "It eliminates the need for establishing distinct IPsec VPN mesh architectures.", "It automates the distribution of public IP spaces across internal local boundaries."],
        answer: "A",
        image: null
    },
    {
        id: 102,
        question: "Which protocol is utilized by downstream FortiGate units to register and connect with the root FortiGate in a Security Fabric?",
        options: ["FortiTelemetry", "REST API over HTTPS", "RADIUS validation tokens", "SAML assertions exchange"],
        answer: "A",
        image: null
    },
    {
        id: 103,
        question: "An administrator wants to block certain file formats from being downloaded via HTTP while allowing the remaining files. Which security profile should be configured?",
        options: ["Antivirus profile using file-filter properties.", "Web Filter profile using category constraints.", "Application Control profile using filter overrides.", "IPS profile targeting traffic patterns signatures."],
        answer: "A",
        image: null
    },
    {
        id: 104,
        question: "What is a characteristic of FortiGate FSSO authentication using Active Directory polling mode?",
        options: ["It does not require installing any agent software components on the Domain Controllers.", "It requires an agent component to be deployed on every single workstation client.", "It provides faster logout detections compared to utilizing DC Agent mode components.", "It uses less network bandwidth than agent-based architectures in massive environments."],
        answer: "A",
        image: null
    },
    {
        id: 105,
        question: "An administrator wants to use port 443 for both SSL VPN and HTTPS administrative access on the same interface without any problems.",
        options: ["Run SSL VPN on one interface using port 443 and enable HTTPS administrative access on a different interface, also using port 443.", "Change the port number for either the SSL VPN service or the HTTPS administrative service if both are on the same interface.", "Both options are valid solutions.", "Neither option is valid."],
        answer: "C",
        image: null
    },
    {
        id: 106,
        question: "Refer to the exhibit snippet showing a log line:\n'date=2025-02-4 time=09:07:59 logid=0100022700 type=event subtype=system level=critical vd=\"root\" logdesc=\"IPS session scan paused\" action=\"drop\" msg=\"IPS session scan, enter fail open mode\"'\n\nWhat can you conclude from the log shown in the exhibit?",
        options: ["The IPS scan is paused by the IPS diagnostic command with bypass mode option 5.", "The IPS socket buffer is full and IPS engine needs more memory to create new connections.", "The IPS engine has entered fail-open mode because the threshold limits were exceeded.", "The FortiGate has recovered from conserve mode and is resetting active sessions."],
        answer: "C",
        image: null
    },
    {
        id: 107,
        question: "Which statement is true regarding the use of virtual IP (VIP) objects in a firewall policy?",
        options: ["VIP objects are used to implement destination NAT (DNAT) mapping public IPs to private addresses.", "VIP objects automatically bypass firewall policy inspection constraints by default.", "VIP objects require configuring distinct source pools within the global system properties.", "VIP objects are limited to mapping single IP addresses and cannot specify target ports."],
        answer: "A",
        image: null
    },
    {
        id: 108,
        question: "When configuring an explicit web proxy topology, which client protocol requests can be accepted by the FortiGate proxy?",
        options: ["HTTP and HTTPS traffic.", "All TCP protocol connections regardless of target port.", "UDP traffic streams including DNS validations.", "FTP and SSH remote sessions only."],
        answer: "A",
        image: null
    },
    {
        id: 109,
        question: "An administrator needs to quickly identify which firewall policy is matching a specific live traffic stream. Which tool or method should be used?",
        options: ["Run the 'diagnose debug flow' command suite in the CLI console.", "Check the routing table metrics for interface cost alignments.", "Analyze the HA status checksum comparison summaries.", "Review the system conserve mode logs inside the event logs panel."],
        answer: "A",
        image: null
    },
    {
        id: 110,
        question: "What does the 'set match-vip enable' command accomplish when applied to a firewall deny policy?",
        options: ["It allows the policy rules to evaluate traffic whose destination matches a Virtual IP object.", "It forces the VIP object to balance connections strictly across secondary targets.", "It overrides interface routing tables to force local packet resolution.", "It matches the source IP address against dynamic FSSO group listings."],
        answer: "A",
        image: null
    },
    {
        id: 111,
        question: "When a FortiGate enters conserve mode due to high memory consumption, how does it handle new administrative connection attempts?",
        options: ["It continues to allow administrative access but blocks configuration changes.", "It entirely rejects all new GUI and CLI connections until memory drops.", "It allows connections only if they originate from pre-authorized trusted hosts subnets.", "It automatically reboots the hardware to recover available memory footprints."],
        answer: "A",
        image: null
    },
    {
        id: 112,
        question: "Which Security Fabric scaling topology is supported when connecting multiple downstream FortiGate devices to a single Root unit?",
        options: ["Star topology where all units communicate directly with the root device.", "Linear chain topology where units link sequentially one after the other.", "Full-mesh deployment where every unit maintains persistent heartbeats with all others.", "Hybrid distribution requiring secondary roots to manage localized subnets."],
        answer: "A",
        image: null
    },
    {
        id: 113,
        question: "Refer to the exhibit, which shows an SD-WAN zone configuration on the FortiGate GUI. Based on the exhibit, which statement is true?",
        options: ["The d-wan zone cannot be deleted.", "The underlay zone contains port1 and port2.", "The d-wan zone contains no member.", "The virtual-wan-link zone contains no member."],
        answer: "BC",
        image: "images/q114.png"
    },
    {
        id: 114,
        question: "An administrator created a Deny policy with default settings to deny Webserver access for Remote-User2. The policy should work such that Remote-User1 must be able to access the Webserver while preventing Remote-User2 from accessing the Webserver. Which additional configuration can the administrator add to a deny firewall policy, beyond the default behavior, to block Remote-User2 from accessing the Webserver?",
        options: ["Enable NAT on the Allow_access firewall policy.", "Disable NAT on the Internet_Access firewall policy.", "Disable port forwarding on the VIP object.", "Create a new firewall policy before Internet_Access for the webserver and apply the IP pool."],
        answer: "CD",
        image: "images/q115.png"
    },
    {
        id: 115,
        question: "Which statement is a characteristic of automation stitches?",
        options: ["They consist of a single defined trigger condition coupled to one or more execution actions.", "They run asynchronously on FortiAnalyzer instead of local memory matrices.", "They require manual validation from an administrator before performing changes.", "They are limited to blocking source IP metrics using local-in interfaces tables."],
        answer: "A",
        image: null
    },
    {
        id: 116,
        question: "What is the function of the FSSO Collector Agent when integrated into a FortiGate user authentication topology?",
        options: ["It parses security logs from Domain Controllers to extract user login events and maps them to IPs.", "It forces client endpoints to complete active web portal authentications regularly.", "It securely encapsulates all internal LAN payload traffic inside an IPsec wrapper.", "It replicates corporate LDAP schemas directly into the local system configuration file."],
        answer: "A",
        image: null
    },
    {
        id: 117,
        question: "When configuring high availability override on a FortiGate device, what is the effect on primary device selection rules?",
        options: ["It changes the rule order prioritizing the device priority value over the system uptime metric.", "It forces the device with the lowest serial number to remain the active cluster primary.", "It disables port monitoring constraints completely across the cluster members.", "It causes the cluster to load balance connections evenly using round-robin distribution."],
        answer: "A",
        image: null
    },
    {
        id: 118,
        question: "Which diagnostic utility should be executed to trace packet pathways and inspect drops across security engines?",
        options: ["diagnose debug flow", "diagnose sys top", "diagnose hardware test", "diagnose sniffer packet any"],
        answer: "A",
        image: null
    },
    {
        id: 119,
        question: "What condition will trigger a FortiGate unit to transition out of conserve mode?",
        options: ["System memory utilization drops below the configured vacate threshold value.", "The administrator runs a manual flush command string within the console interface.", "All active security inspection sessions are terminated by the hardware processor.", "The device receives a configuration synchronization signal from the HA cluster primary."],
        answer: "A",
        image: null
    },
    {
        id: 120,
        question: "When configuring a web filter profile, what happens if a URL matches both a wildcard block rule and a simple allow rule?",
        options: ["The wildcard block rule takes precedence and the website access is rejected.", "The simple allow rule takes precedence and access is permitted.", "The FortiGate queries FortiGuard databases to break the local evaluation tie.", "The connection is placed in a temporary holding queue pending admin authorization."],
        answer: "A",
        image: null
    },
    {
        id: 121,
        question: "Which profile or setting must be modified to alter the idle timeout value for administrative GUI dashboard sessions?",
        options: ["The global system settings profile configuration.", "The specific administrator account access profile parameter.", "The Security Fabric root orchestration rules panel.", "The local-in management interface policy mappings tables."],
        answer: "A",
        image: null
    },
    {
        id: 122,
        question: "What layer 4 protocol port is utilized by default to transmit FortiTelemetry sync data throughout a Security Fabric deployment?",
        options: ["TCP port 8013", "UDP port 500", "TCP port 443", "UDP port 4500"],
        answer: "A",
        image: null
    },
    {
        id: 123,
        question: "Which statement is true regarding the use of destination interfaces inside a FortiGate static route entry?",
        options: ["Specifying an explicit exit interface is mandatory to compute valid next-hop paths.", "Static routes can omit exit interfaces if a gateway object target is fully specified.", "The exit interface must always map to an internal hardware loopback address.", "All static routes must bind to an active SD-WAN interface boundary definition."],
        answer: "A",
        image: null
    },
    {
        id: 124,
        question: "Refer to the exhibit. In the network shown in the exhibit, the web client cannot connect to the HTTP web server. The administrator runs the FortiGate built-in sniffer and gets the output shown in the exhibit. What should the administrator do next to resolve the issue?",
        options: ["Run a debug flow on FortiGate, this time with the filter \"host 10.0.1.10\".", "Change the firewall policy configuration to allow HTTP traffic.", "Verify the routing configuration on the upstream router.", "Capture the traffic using an external sniffer connected to port1."],
        answer: "A",
        image: ["images/q125_1.png", "images/q125_2.png"]
    },
    {
        id: 125,
        question: "Refer to the exhibits. The exhibits show a diagram of a FortiGate device connected to the network, and the firewall configuration. An administrator created a Deny policy with default settings to deny Webserver access for Remote-User2. The policy should work such that Remote-User1 must be able to access the Webserver while preventing Remote-User2 from accessing the Webserver. Which two configuration changes can the administrator make to the policy to deny Webserver access for Remote-User2? (Choose two.)",
        options: ["Set the Destination address as Webserver in the Deny policy.", "Disable match-vip in the Deny policy.", "Set the Destination address as Deny_IP in the Allow_access policy.", "Enable match-vip in the Deny policy."],
        answer: "AD",
        image: ["images/q127_1.png", "images/q127_2.png", "images/q127_3.png"]
    },
    {
        id: 126,
        question: "An administrator configured a FortiGate to act as a collector for agentless polling mode. What must the administrator add to the FortiGate device to retrieve AD user group information?",
        options: ["DHCP server", "RADIUS server", "LDAP server", "Windows server."],
        answer: "C",
        image: null
    },
    {
        id: 127,
        question: "Which diagnostic output log indicates that a packet was successfully offloaded to network processor hardware chips?",
        options: ["np_info: np_id=", "iprope_in_check()", "fail-open engine switch", "RPF sanity passed"],
        answer: "A",
        image: null
    },
    {
        id: 128,
        question: "What is a major constraint when utilizing FortiGate FSSO agentless polling mode in high-traffic enterprise networks?",
        options: ["It can increase CPU and processing overhead on the Domain Controllers due to rapid WMI querying cycles.", "It requires deploying secondary client applications across workstation endpoints.", "It completely disables the use of group-based security profiles assignments.", "It operates exclusively over unencrypted cleartext protocols across the local network."],
        answer: "A",
        image: null
    },
    {
        id: 129,
        question: "An administrator wants to configure dead peer detection (DPD) on IPsec VPN for detecting dead tunnels. The requirement is that FortiGate sends DPD probes only when there is no inbound traffic. Which DPD mode on FortiGate meets this requirement?",
        options: ["Enabled", "On Idle", "Disabled", "On Demand"],
        answer: "D",
        image: null
    }
];
