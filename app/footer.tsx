"use client";

export default function Footer() {
  return (
    <footer className="my-10 flex flex-col md:flex-row items-center md:justify-start md:gap-2 text-sm leading-loose ">
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path fill="url(#pattern0)" d="M0 0H32V32H0z"></path>
        <defs>
          <pattern
            id="pattern0"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use transform="scale(.03125)" xlinkHref="#image0_201_32"></use>
          </pattern>
          <image
            id="image0_201_32"
            width="24"
            height="24"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABLdJREFUWEftV3tMlWUY/32Hc+AAIjA4wlEuAkkICk0IbINgBsjACwjlpsRYTAIa1EY1x4AoVNKwtkSJKSkjV5TJLaDhGBcdJVSKQgcJMJjIXT0Icridr70v8sHnOeShNfAPn3/O+zzvc/md930u38sgDQI4hSUBTBxYSLEcxKAXYE+h5cIRBgVhyWCY9OWIqxKDZVMYfP96LwDzFQHAoJcAYFck+OOgzwGonICDwTocd4mAlZ4pjER6aBvtxWu1n3C3JBJoIWPTPnhKHGAuNkJayw9I2BAIMx1DsGChmJmCQjmJ8ZlJup77VbJKiARCRDRkYXjyIedPBYCQ0cJ1v2NwMrSkSqPTChgURnAGNvpr0BmYxfE+NWko2PoehidH0TnWj2nlDILXuXP7QxMj0NXShr5QDAJibenb6J+QLw6A7Hzs9AZSHcOoUr9CDvPSA/MBJU6o9vmI481LDkChnIJ86hGV6Qt1MBqSz+371qajauAmDIS6EGuJMDgxwst5tUmY6RKBRPsdVPHykAyvVs8HjLLZhjNuMXSvT/EA0tJonkNnQys0+WdSGSmvNSVRGJqYP/InK04tgAqvJASYv0R1v/yrAu9eP8vZHd28Hx867KZ8ee81BF3J4Pncb+WJbzwSqKx9tA8bKmbXi5EKAAYMBnfnwkR7FbUJv3oC57svc/Y/eR5EkHQL5Q/JfkRKcwHPd6bLm0i030lleX/XILLx1NIAOK62QMv2zzkju/J4mlxz1B2UDUs9E8ruqc9EYU8DL0CNTxq8JY5UFv17Dk53Vi0NQIytH7JdZ5PuyTuW6KzGwK4znMP1ZXHoejTE8VqMAA+Cz2GVUExlzpXv46a8e2kA8t3jEW7tRY2KehoRUv8Z5yBQugVlngcpTxJLUhLFc+5saI0m/1l9Ur5GRZGYYZVLAyAL+AKkGREi90vueY7SnfYi2TGUspX9Tdhed5jnPNrWFzmus1VxZagVXtWp/xqcbPKSkHS58T3nQY6SUGTDSeR11dK1WCCi9b/VxJ7yGbJCJDV/ywuQ6xaDt2y2UdmJ9gokXJuvnsWQ8ACYahvQCpij+qFbKL7biI2rLbBD6gpTHQNuT10C3vDPxGZDK6oT+8dpfNVxaWknIACDuztzYCY24hlOKWfw2/0OvPL43ytZlnbHhV2NtNuRkDyQVk6IXA+5pqeRSh8gDSjXLRZrdY3RNTaIiz1XkdX+M+LsApD44mx3bLjXDo+qJJ5vN2M7NPrONyWXyg9wQ971tPj8HFiorSMQYUI5BUs9UwSYuSDVKQwWurP1Tzoj6ZALKdzKC/ke8VRE7F4oj8ed8Xv/HYCrsS0dSn5mzrgzPgxbfTPqjAwd67I4bvjMRZCKjbFeX0Llt8cG6BjWhNTOgn1Wnvj65Vhkd1zCsdZiHNq0l8vu5ObvcFh2URPfGumo+R4QYHBXLj69VYSjrcWIsPbGOfc4kBnx63AbvGvSMKmc1si5JkoqAMjMlgfnoW7wT/Qp5CCnIWAYVA80I/SX47g/OaaJX4111F4BmfkpjqHQFgjR9rAXZ29XI7+7DqT8/m96/lX8TJzAyj3NgL5n4HFKnucbw5LAMO8s4yO1Dyx7ErILR/4BhEbavpkBqMkAAAAASUVORK5CYII="
          ></image>
        </defs>
      </svg>
      <p className="mt-2 md:mt-0">
        {"Built by "}
        <a
          href="https://github.com/ista1024/"
          target="blank"
          className="font-semibold underline underline-offset-4"
        >
          ista1024
        </a>
        {". "}
      </p>
    </footer>
  );
}
