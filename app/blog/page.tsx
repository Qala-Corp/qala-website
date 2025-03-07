"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Introducing Qalá v0.9.0: Stronger, Faster, Smarter",
    date: "March 15, 2023",
    excerpt:
      "Qalá v0.9.0 is not just an update—it’s a leap into the future of secure secrets management. In this release, we’ve reimagined key components of our system to provide stronger encryption, smarter API integrations, and a more robust configuration model. Whether you’re a developer working on a small project or part of an enterprise team, Qalá v0.9.0 brings improvements that enhance security and usability.",
    content: `<br/><h2 id="-advanced-encryption-key-management-"><strong>Advanced Encryption & Key Management</strong></h2>
    <ul>
    <li><br/><p><strong>HKDF Integration:</strong>\
    Our implementation now utilizes the HMAC-based Extract-and-Expand Key Derivation Function (HKDF) to generate strong, unique keys. This ensures that every session and encryption operation uses keys derived from high-entropy sources, making unauthorized decryption nearly impossible.</p>
    </li>
    <li><br/><p><strong>AES-Based Encryption Enhancements:</strong>
    We’ve optimized our AES-based encryption routines. By refining how data is encrypted and decrypted, Qalá ensures that sensitive information is safeguarded without sacrificing performance.\
    </p>
    <div className="mt-8">
    <br>
    <h4><strong>Code:</strong></h4>

          <pre className="bg-muted p-4 rounded-md overflow-x-auto">
<code className="text-sm text-foreground">
const key = HKDF.deriveKey(sharedSecret, salt, 'qala-encryption');
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
let encrypted = cipher.update(data, 'utf8', 'hex');
encrypted += cipher.final('hex');
</code>
          </pre>

    </div>
    </li>
    </ul><br/><h2 id="-optimized-secret-rotation-and-session-security-"><strong>Optimized Secret Rotation and Session Security</strong></h2>
    <ul>
    <li><br/><p><strong>Structured Secret Rotation:</strong>\
    Gone are the days of clunky, manual secret updates. Qalá v0.9.0 introduces an optimized secret rotation logic that automates key updates and minimizes downtime. This process ensures that secrets are regularly refreshed without compromising system integrity.</p>
    </li>
    <li><br/><p><strong>Session-Based Decryption:</strong>\
    With a focus on heightened security,  our session-based decryption method guarantees that only authorized sessions can access sensitive data. This extra layer of security makes it far more difficult for attackers to intercept or misuse secrets.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-enhanced-configuration-management-"><strong>Enhanced Configuration Management</strong></h2>
    <ul>
    <li><br/><p><strong>JSON-Based Config Files:</strong>\
    Our new configuration model stores settings in a structured, human-readable JSON file. This approach not only simplifies configuration management but also provides greater flexibility when integrating with other systems or CI/CD pipelines.</p>
    </li>
    <li><br/><p><strong>Dynamic Environment Handling:</strong>\
    Qalá now supports dynamic environment configurations, making it easier to switch between development, staging, and production modes without rewriting code.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-developer-experience-future-outlook-"><strong>Developer Experience & Future Outlook</strong></h2>
    <ul>
    <li><br/><p><strong>Clear API Contracts:</strong>\
    Our refactored API is designed for clarity and consistency. Detailed error messages and comprehensive logging empower developers to troubleshoot and optimize integrations quickly.</p>
    </li>
    <li><br/><p><strong>Looking Ahead:</strong>\
    With v0.9.0, we are laying the groundwork for future innovations. Expect more automated security checks, deeper integration with cloud services, and a continued commitment to community-driven enhancements.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-conclusion-"><strong>Conclusion</strong></h2>
    <p>Qalá v0.9.0 is a testament to our commitment to continuous improvement. It’s built for today’s dynamic environments and is ready to scale for tomorrow’s challenges. Dive into the new features, explore our documentation, and join us as we redefine secrets management.</p>`,
  },
  {
    id: 2,
    title: "Mastering Secret Rotation: Best Practices & Pitfalls",
    date: "March 5, 2023",
    excerpt: "Secret rotation is the cornerstone of any secure system...",
    content: `<br/><h2 id="-introduction-"><strong>Introduction</strong></h2>
    <p>Secret rotation is the cornerstone of any secure system. In today’s fast-paced digital landscape, static secrets are a major vulnerability. This post explores how Qalá’s innovations in secret rotation can serve as a blueprint for modern security practices. From automation to error-handling, we’ll cover the best practices that every team should adopt.</p>
    <br/><br/><h2 id="-why-secret-rotation-matters-"><strong>Why Secret Rotation Matters</strong></h2>
    <ul>
    <li><br/><p><strong>Preventing Unauthorized Access:</strong>\
    Regularly updating secrets reduces the risk of long-term exposure. Even if a secret is compromised, its limited lifespan minimizes potential damage.</p>
    </li>
    <li><br/><p><strong>Compliance and Standards:</strong>\
    Many industries require frequent secret updates to comply with security standards like PCI-DSS, HIPAA, and GDPR. Implementing robust rotation processes can ease compliance burdens.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-best-practices-in-secret-rotation-"><strong>Best Practices in Secret Rotation</strong></h2>
    <ul>
    <li><br/><p><strong>Automate the Process:</strong>\
    Manual updates are error-prone. Automation ensures that secrets are rotated on a schedule with minimal human intervention. Tools like Qalá can integrate with your CI/CD pipelines to trigger rotations based on predefined policies.</p>
    </li>
    <li><br/><p><strong>Versioning and Rollback:</strong>\
    Maintain a versioned history of secrets. In the event of a failure or a bug, being able to roll back to a previous version can be invaluable.</p>
    </li>
    <li><br/><p><strong>Monitoring and Alerting:</strong>\
    Implement real-time monitoring to detect any anomalies during the rotation process. Automated alerts help in addressing issues before they escalate.</p>
    </li>
    <li><br/><p><strong>Integration with Multi-Factor Authentication (MFA):</strong>\
    Enhance secret rotation by coupling it with MFA for additional verification during critical updates.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-common-pitfalls-and-how-to-avoid-them-"><strong>Common Pitfalls and How to Avoid Them</strong></h2>
    <ul>
    <li><br/><p><strong>Overlooking Dependency Chains:</strong>\
    Rotating one secret can have a domino effect on systems that depend on it. Ensure that all services are notified and that there is an automated method to update dependent configurations.</p>
    </li>
    <li><br/><p><strong>Inadequate Testing:</strong>\
    Before rolling out secret rotations, simulate the process in a staging environment. This helps uncover any unforeseen integration issues.</p>
    </li>
    <li><br/><p><strong>Lack of Transparency:</strong>\
    Keep detailed logs and provide audit trails for every rotation. This transparency is crucial for troubleshooting and regulatory compliance.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-technical-deep-dive-qal-s-implementation-"><strong>Technical Deep Dive: Qalá’s Implementation</strong></h2>
    <ul>
    <li><br/><p><strong>API Integration:</strong>\
    Qalá’s API now supports asynchronous secret rotation requests. This allows developers to trigger rotations programmatically and monitor the status via robust logging.</p>
    </li>
    <li><br/><p><strong>Error Handling:</strong>\
    Detailed error categories ensure that the system can distinguish between temporary network glitches and critical failures.\
    <em>Example Workflow:</em></p>
    <ol>
    <li><strong>Trigger Rotation:</strong> A secret rotation is initiated automatically or manually.</li>
    <li><strong>Validation:</strong> The system checks dependencies and validates the new secret.</li>
    <li><strong>Commit & Rollback:</strong> If validation fails, the system reverts to the previous secret version and sends an alert.</li>
    </ol>
    </li>
    <li><br/><p><strong>User Stories:</strong>\
    Teams using Qalá have reported dramatic reductions in security incidents by automating their secret rotations. Real-world case studies demonstrate improved uptime and reduced manual intervention.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-future-enhancements-"><strong>Future Enhancements</strong></h2>
    <ul>
    <li><br/><p><strong>Predictive Analytics:</strong>\
    Future releases will incorporate machine learning to predict when a secret is likely to be compromised based on access patterns and usage anomalies.</p>
    </li>
    <li><br/><p><strong>Cross-System Integration:</strong>\
    Expanding support for integrations with popular orchestration tools like Kubernetes and Terraform will further streamline the rotation process across distributed environments.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-conclusion-"><strong>Conclusion</strong></h2>
    <p>Mastering secret rotation is not just a technical necessity—it’s a strategic advantage. By adopting best practices and leveraging advanced tools like Qalá, organizations can significantly reduce their security risks while maintaining operational efficiency. Embrace the future of secret management and transform your security posture today.</p>`,
  },
  {
    id: 3,
    title: "Why Open Source Matters: Qalá's Vision & Future",
    date: "February 25, 2023",
    excerpt: "Why Open Source Matters: Qalá&#39;s Vision & Future",
    content: `<br/><h2 id="-the-open-source-ethos-"><strong>The Open-Source Ethos</strong></h2>
    <p>At Qalá, we’re more than a technology provider—we’re part of a vibrant global community that believes in the power of open collaboration. Open source is the beating heart of innovation, transparency, and security. This post explores our journey, the challenges we’ve overcome, and how our commitment to open source shapes the future of secure secrets management.</p>
    <br/><br/><h2 id="-our-journey-into-open-source-"><strong>Our Journey into Open Source</strong></h2>
    <ul>
    <li><br/><p><strong>Transparency and Trust:</strong>\
    By making our code publicly available, we invite scrutiny and contributions from the global community. This transparency builds trust and leads to better, more secure software.</p>
    </li>
    <li><br/><p><strong>Community-Driven Innovation:</strong>\
    Contributions from developers around the world have helped us refine features, optimize performance, and identify security vulnerabilities. Open source allows us to tap into a diverse pool of expertise.</p>
    </li>
    <li><br/><p><strong>Real-World Impact:</strong>\
    Many organizations rely on open-source software for their critical infrastructure. Qalá’s open-source model ensures that we not only meet industry standards but often exceed them by leveraging collective wisdom.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-key-benefits-of-open-source-for-qal-"><strong>Key Benefits of Open Source for Qalá</strong></h2>
    <ul>
    <li><br/><p><strong>Rapid Iteration:</strong>\
    With contributions from a global community, we can iterate faster, fix bugs sooner, and release new features more rapidly.</p>
    </li>
    <li><br/><p><strong>Enhanced Security:</strong>\
    Open source code is constantly reviewed by security experts worldwide. This collaborative scrutiny leads to more robust and secure systems.</p>
    </li>
    <li><br/><p><strong>Customization and Flexibility:</strong>\
    Users can tailor Qalá to fit their unique needs. Whether integrating with custom workflows or extending core functionalities, the possibilities are endless.</p>
    </li>
    <li><br/><p><strong>Cost Efficiency:</strong>\
    Open source reduces reliance on proprietary software, cutting costs while promoting innovation and collaboration.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-community-engagement-contribution-"><strong>Community Engagement & Contribution</strong></h2>
    <ul>
    <li><br/><p><strong>Developer Forums and GitHub:</strong>\
    Our GitHub repository is a living, breathing entity where developers share ideas, report issues, and propose enhancements. Regular hackathons and community meetings foster collaboration and knowledge sharing.</p>
    </li>
    <li><br/><p><strong>Transparency Reports:</strong>\
    We publish detailed reports on security audits, feature roadmaps, and community contributions. This level of openness not only reinforces our commitment to transparency but also provides a roadmap for future development.</p>
    </li>
    <li><br/><p><strong>Educational Initiatives:</strong>\
    We’re committed to helping developers of all skill levels. From detailed documentation and tutorials to live webinars, our goal is to empower the community with knowledge and practical skills.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-challenges-and-how-we-overcame-them-"><strong>Challenges and How We Overcame Them</strong></h2>
    <ul>
    <li><br/><p><strong>Managing Contributions:</strong>\
    Handling contributions from around the world requires robust governance. We’ve implemented clear contribution guidelines, code reviews, and automated testing to ensure quality.</p>
    </li>
    <li><br/><p><strong>Balancing Innovation and Stability:</strong>\
    While rapid innovation is a hallmark of open source, maintaining stability is equally important. Our release cycles balance new feature rollouts with rigorous testing and user feedback.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-vision-for-the-future-"><strong>Vision for the Future</strong></h2>
    <ul>
    <li><br/><p><strong>Expanding Ecosystems:</strong>\
    We plan to forge deeper integrations with other open-source security tools and platforms. By building an ecosystem of interconnected projects, we can create more resilient and adaptive security infrastructures.</p>
    </li>
    <li><br/><p><strong>Community-Led Roadmaps:</strong>\
    Our future features will be driven by community input. We’re developing platforms for voting on new features and prioritizing user-requested improvements.</p>
    </li>
    <li><br/><p><strong>Educational Outreach:</strong>\
    We envision a future where our open-source model serves as a learning resource for developers worldwide. Our workshops, webinars, and mentoring programs will help bridge the gap between novice and expert.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-conclusion-"><strong>Conclusion</strong></h2>
    <p>Qalá’s commitment to open source is more than a business strategy—it’s a philosophy. By embracing openness, collaboration, and transparency, we’re not just building a tool; we’re nurturing a community of innovators and security experts. Join us on this journey and be a part of shaping the future of secure, open-source technology.</p>`,
  },
  {
    id: 4,
    title: "Introducing Qalá v0.8.4 - Our First Public Release",
    date: "February 15, 2023",
    excerpt:
      "We're excited to announce the first public release of Qalá, version 0.8.4. This marks a significant milestone in our journey to revolutionize secrets management.",
    content: `<br/><h2 id="-a-new-beginning-"><strong></strong></h2>
    <p>Qalá v0.8.4 represents our first foray into the public arena of secrets management. It’s the culmination of months of hard work, iterative improvements, and a steadfast commitment to building a secure and scalable system. In this post, we recount our journey, highlight the key innovations introduced in v0.8.4, and reflect on the lessons learned along the way.</p>
    <br/><br/><h2 id="-core-innovations-in-v0-8-4-"><strong>Core Innovations in v0.8.4</strong></h2>
    <ul>
    <li><br/><p><strong>Robust Encryption from Day One:</strong>\
    From the outset, Qalá v0.8.4 was built with security as its top priority. We implemented solid encryption routines and introduced key validation layers that ensured data integrity. Our early adoption of best practices set the stage for the advanced features in later versions.</p>
    </li>
    <li><br/><p><strong>Modular Architecture:</strong>\
    The modular design of v0.8.4 allowed for rapid development and easy integration with various systems. Each module—from secret management to API routing—was designed to be independent yet interoperable. This architecture not only facilitated quick fixes but also enabled us to add new features without disrupting core functionalities.</p>
    </li>
    <li><br/><p><strong>Detailed Logging and Monitoring:</strong>\
    Transparency in operations was a key goal. Detailed logging mechanisms were introduced to track every action—from secret creation to deletion—ensuring that developers and system administrators had full visibility into system operations. This not only aided in debugging but also served as an audit trail for security reviews.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-behind-the-scenes-development-and-lessons-learned-"><strong>Behind the Scenes: Development and Lessons Learned</strong></h2>
    <ul>
    <li><br/><p><strong>The Iterative Process:</strong>\
    Building Qalá v0.8.4 was an iterative journey. Our early releases were designed to be as secure as possible while remaining flexible enough to accommodate rapid changes. Through extensive testing and community feedback, we identified pain points and refined the system step by step.</p>
    </li>
    <li><br/><p><strong>Team Collaboration:</strong>\
    One of the hallmarks of our early development was the close collaboration between our security experts, developers, and beta testers. This multi-disciplinary approach ensured that our product was both technically robust and user-friendly.</p>
    </li>
    <li><br/><p><strong>Challenges and Overcoming Them:</strong>\
    Every release comes with its set of challenges. In v0.8.4, we encountered issues related to performance optimization and API scaling. By focusing on code modularity and thorough testing, we not only resolved these issues but also built a solid foundation for future enhancements.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-user-impact-and-early-success-stories-"><strong>User Impact and Early Success Stories</strong></h2>
    <ul>
    <li><br/><p><strong>Empowering Developers:</strong>\
    Early adopters of Qalá v0.8.4 reported significant improvements in how they managed secrets. The clear API contracts and detailed logging empowered teams to integrate the tool into their existing workflows with minimal friction.</p>
    </li>
    <li><br/><p><strong>Security Audits and Feedback:</strong>\
    Security professionals praised the encryption and validation layers, noting that Qalá’s architecture provided a new benchmark for secrets management. The open dialogue with our users helped refine features and solidify trust in the platform.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-looking-to-the-future-"><strong>Looking to the Future</strong></h2>
    <ul>
    <li><br/><p><strong>Building on a Strong Foundation:</strong>\
    The public release of v0.8.4 was just the beginning. We used the lessons learned to guide subsequent versions, constantly iterating to improve security, performance, and usability.</p>
    </li>
    <li><br/><p><strong>Community Involvement:</strong>\
    We’ve since built an active community around Qalá. Developers contribute to the codebase, report bugs, and suggest enhancements—fueling an ongoing cycle of improvement and innovation.</p>
    </li>
    <li><br/><p><strong>Vision for v1.0 and Beyond:</strong>\
    The ultimate goal is to reach Qalá v1.0, a milestone that will incorporate all the lessons learned from v0.8.4 and its successors. With planned features like predictive security analytics, deeper integrations, and even more streamlined secret management, the future is both bright and secure.</p>
    </li>
    </ul>
    <br/><br/><h2 id="-conclusion-"><strong>Conclusion</strong></h2>
    <p>The launch of Qalá v0.8.4 marked the start of our journey to revolutionize secrets management. By focusing on robust encryption, modularity, and community feedback, we set a high standard for what’s possible. As we continue to evolve, we invite you to join us on this journey—whether you’re a developer, security expert, or curious observer. The future of secure, scalable secrets management starts here.</p>`,
  },
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-center mb-8">
              Qalá Blog
            </h1>
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>

              {blogPosts.map((post, index) => (
                <div key={post.id} className="mb-8 relative">
                  <div className="absolute left-[-0.5rem] top-[20px] w-4 h-4 rounded-full bg-primary"></div>

                  {selectedPost !== post.id ? (
                    <>
                      <div className="absolute left-[-0.25rem] top-[80px] w-2 h-2 rounded-full bg-[#33333390]"></div>
                      <div className="absolute left-[-0.25rem] top-[130px] w-2 h-2 rounded-full bg-[#33333390]"></div>
                      <div className="absolute left-[-0.25rem] top-[180px] w-2 h-2 rounded-full bg-[#33333390]"></div>
                    </>
                  ) : null}

                  <div
                    className={`pl-8 relative cursor-pointer transition-colors hover:bg-muted/50 p-4 rounded-lg ${
                      selectedPost === post.id ? "bg-muted/50" : ""
                    }`}
                    onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
                  >
                    <p className="text-sm text-muted-foreground mb-1">
                      <CalendarDays className="inline-block mr-2 h-4 w-4" />
                      {post.date}
                    </p>
                    <br />
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                    {selectedPost !== post.id ? (
                      <span className="text-primary inline-flex items-center">
                        {selectedPost === post.id ? "Read less" : "Read more"} <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    ) : null}
                  </div>
                  <AnimatePresence>
                    {selectedPost === post.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-8 mt-4"
                      >
                        <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-foreground" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
