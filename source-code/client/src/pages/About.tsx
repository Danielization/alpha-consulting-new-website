import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Award, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ABOUT_HERO = "https://private-us-east-1.manuscdn.com/sessionFile/iS0tuWCbowu9uVIvmwHdVa/sandbox/EcQqyD3FNxc2bvVO0zsKSi-img-2_1770087769000_na1fn_YWJvdXQtY29ycG9yYXRlLWJ1aWxkaW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVMwdHVXQ2Jvd3U5dVZJdm13SGRWYS9zYW5kYm94L0VjUXF5RDNGTnhjMmJ2Vk8wenNLU2ktaW1nLTJfMTc3MDA4Nzc2OTAwMF9uYTFmbl9ZV0p2ZFhRdFkyOXljRzl5WVhSbExXSjFhV3hrYVc1bi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pUkznLw0frA3LtOtnDcjMKBuzKpRe7gxuHltVesplLqacA1o88dNfYQi~6opCmOJ6UIthGAexNwZN~tOlwL8O3yNR0PZY9qmX8dt8c2btctmHqRSKQTMI1RMRjIhU9euw8ivSPnKKTuLx03bLzYryq0XbJ6VGjHEuGvTNU9311d8gfmJSDj-HNzxj0MaKlC0fOmJyLTbeX5yjWOk~hierzhTlrudAos5xMian5nMNtHOM~mbmwdffhSz6G-nixiQ2CA284cYhKS46bdYyi0k4AfQa-uN6WPRg0WwPagzOJM4pjCRUCn-ESfxfPdUX1RJvXvBL7ORiLRyTEuOwhebTA__";

const TEAM_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/iS0tuWCbowu9uVIvmwHdVa/sandbox/EcQqyD3FNxc2bvVO0zsKSi-img-4_1770087771000_na1fn_ZW5naW5lZXJpbmctdGVhbS1tZWV0aW5n.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaVMwdHVXQ2Jvd3U5dVZJdm13SGRWYS9zYW5kYm94L0VjUXF5RDNGTnhjMmJ2Vk8wenNLU2ktaW1nLTRfMTc3MDA4Nzc3MTAwMF9uYTFmbl9aVzVuYVc1bFpYSnBibWN0ZEdWaGJTMXRaV1YwYVc1bi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=J7pqvfd~UbSAYZ9D8dhSF3WNaxzWPSXdlEch-VticoJR~CLDMAYTcvNk-5a5rW4Ud6RPwPlqKlaOSnCmCa9tlFOSR61dJX17uzzYmDmb3tMbQuvQIkC97Z-JQRcRv~PxH4FbCbgfjKb~4sxFTIZccXOBvcwObAFkhaWi9lN7uAE73kmGV6JxK1t2b0BqTdjZJYAuMBEMvJKhT8f5WiTyAqy~Nz4qEfI4Qyw0GidkzLzDwwNCnK2GCoDzTB7rxgvoGwwl2VXXyTzAKkcmpXV2vNYNaHauZ1eECkarsQHFNumFz47Il4QF3Y6YEQzZtaVMtW6ASQrCU7812Fv-L8t55Q__";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest quality engineering solutions that exceed client expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with architects, contractors, and clients to ensure seamless project delivery.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to provide cutting-edge engineering solutions.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management System",
  "ISO 14001:2015 Environmental Management System",
  "BCA Registered M&E Consultant",
  "PE Board Registered Firm",
];

const teamStats = [
  { value: "6", label: "Registered Professional Engineers" },
  { value: "16", label: "Engineers" },
  { value: "5", label: "Engineering Assistants & Draftsmen" },
  { value: "7", label: "Site Staff" },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ABOUT_HERO})` }}
        />
        <div className="absolute inset-0 page-header-overlay" />
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            About ACEPL
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Engineering Excellence Since 1995
          </p>
        </div>
      </section>

      {/* The Practice Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                The Practice
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Alpha Consulting Engineers Pte Ltd was established in January 1995 
                in conjunction with Alpha Engineering Consultant to assist in undertaking 
                a whole spectrum of mechanical and electrical engineering consultancy 
                services pertaining to building construction and other industries in 
                Singapore and the region.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Together with Alpha Engineering Consultant, Alpha Consulting Engineers 
                Pte Ltd (ACEPL) has since 1995 completed numerous projects, ranging from 
                condominiums, teaching institutions, hospitals, hotels, office buildings, 
                shopping malls to aircraft hangars, wafer fabrication plants etc. in 
                Singapore, Indonesia, Myanmar, Vietnam, Thailand and China.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ACEPL is committed to providing high quality services to our clients. 
                No effort will be spared in producing economical, practical and reliable 
                electrical and mechanical design, in sympathy with the building architecture 
                and structure, to meet the client's requirements and satisfaction.
              </p>
            </div>
            <div>
              <img
                src={TEAM_IMAGE}
                alt="Alpha Consulting Engineers Team"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground">
              Our present staff strength stands at 37 professionals, bringing together 
              expertise across all aspects of mechanical and electrical engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-serif text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-slate-900">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Certifications & Accreditations
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our Quality Management System has achieved accreditation for compliance 
                with ISO 9001:1994 from February 1999 and with new version ISO 9001:2015 
                from March 2018. ACEPL has also been certified by BCA since March 2008 
                and upgraded to ISO 14001:2015 compliant in respect of Environmental 
                Management System.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <div className="text-5xl font-serif text-primary mb-2">ISO</div>
                <div className="text-slate-400 text-sm">9001:2015</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <div className="text-5xl font-serif text-primary mb-2">ISO</div>
                <div className="text-slate-400 text-sm">14001:2015</div>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center col-span-2">
                <div className="text-3xl font-serif text-primary mb-2">BCA Registered</div>
                <div className="text-slate-400 text-sm">M&E Consultant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Partner with us for your next engineering project and experience 
              our commitment to excellence.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
