import React from "react";
import Layout from "./index";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Layout/Layout",
  component: Layout,
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  render: () => {
    return (
      <Layout>
        <Layout.Header title="Storybook" hasMeatball={false} />
        <Layout.Content>
          <h1>This is Sample Page</h1>
          <p>This is sample page of Layout</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ornare eros quis varius varius. Praesent eget tempus dui.
            Suspendisse malesuada accumsan blandit. Sed vel nisl volutpat,
            viverra dolor quis, suscipit dolor. Duis venenatis magna at massa
            aliquet, ut laoreet lorem imperdiet. Nunc et arcu ut felis
            sollicitudin hendrerit id vel leo. Curabitur ipsum sapien, varius
            vel luctus et, porta quis massa. Etiam id vestibulum ligula. Donec
            tristique odio facilisis ipsum convallis, eget pellentesque orci
            lacinia. Maecenas vulputate consequat sodales. Suspendisse potenti.
            Nullam vitae ex dui. Aenean ac fermentum nunc. Donec interdum porta
            est, eu ultricies est molestie ac. Suspendisse quam mi, faucibus sit
            amet nunc a, varius pellentesque sapien. Mauris blandit vestibulum
            diam posuere interdum. Donec dictum pellentesque magna, non ultrices
            metus sodales quis. Proin sagittis lectus vel ornare pharetra. Cras
            sollicitudin fringilla neque ornare elementum. Pellentesque felis
            lectus, consectetur ac feugiat quis, tempus nec elit. Duis fringilla
            at sem at varius. Morbi dignissim libero urna, eget interdum ligula
            egestas sit amet. Suspendisse potenti. Nam vehicula laoreet dui, vel
            laoreet est sollicitudin vel. Morbi luctus egestas porttitor.
            Suspendisse porttitor, ex sit amet euismod aliquet, elit purus
            efficitur velit, ut ullamcorper leo eros at libero. Fusce molestie
            nunc mauris, id hendrerit ligula pharetra ac. In hac habitasse
            platea dictumst. Maecenas in eleifend est, id ornare massa.
            Phasellus gravida mauris vitae finibus lobortis. Praesent et semper
            quam. Morbi aliquam commodo sapien vitae maximus. Nam sodales eu
            augue at aliquet. Praesent vel ullamcorper mauris. Praesent eget est
            lorem. Maecenas quis sollicitudin odio, id porttitor nulla. Nunc
            commodo ut felis sit amet vulputate. Aenean lobortis bibendum enim,
            vel ultricies dui blandit et. Quisque non varius justo, sed
            efficitur dui. Integer porta commodo metus, sollicitudin mollis
            magna hendrerit in. In vestibulum dui in arcu vehicula dapibus.
            Nulla urna purus, condimentum nec orci vitae, pharetra volutpat
            nibh. Nam purus lorem, tempus et aliquet eget, porttitor a est.
            Aliquam pulvinar nunc nec molestie commodo. Curabitur mi metus,
            elementum quis suscipit sed, efficitur vel sapien. Quisque vitae
            nibh dapibus, sagittis metus a, volutpat quam. Curabitur in lectus
            ut neque consequat rhoncus. Vestibulum et est sed est hendrerit
            imperdiet sit amet sit amet erat. Nunc a mi sit amet orci auctor
            venenatis. Pellentesque venenatis aliquet ante quis luctus. Sed
            laoreet mauris lorem, at efficitur ex elementum a. Vivamus
            vestibulum elit nec ligula scelerisque, sed vestibulum justo varius.
            Proin eu ligula erat. Nam sodales lorem ac elit aliquet mattis. In
            hac habitasse platea dictumst. Fusce volutpat, odio sed iaculis
            pharetra, odio felis suscipit turpis, id aliquet diam metus nec
            lorem. Phasellus varius odio molestie porttitor tristique.
            Pellentesque vulputate mi molestie lorem dictum facilisis. Etiam
            aliquam accumsan lorem, vitae euismod dolor feugiat sit amet.
            Praesent maximus lorem ac hendrerit finibus. Pellentesque in aliquet
            sapien. Sed vitae sollicitudin dolor, non efficitur ante. Cras a
            lorem ante. Cras iaculis, elit vel placerat tempor, ligula sapien
            sollicitudin diam, gravida cursus risus diam vel eros. Sed dictum
            dui sed augue laoreet bibendum. Nulla sit amet sem consectetur,
            iaculis ex eget, luctus magna. Nullam a sollicitudin sem. Quisque at
            volutpat quam. Vivamus ullamcorper placerat ex fermentum porttitor.
            In ac malesuada leo, consequat porttitor urna. Nunc placerat
            suscipit mi, non rhoncus arcu rutrum tristique. Nunc diam ex,
            facilisis eget blandit sed, viverra ut quam. Pellentesque rutrum
            lobortis lacus a molestie. Nam et eros et sapien pharetra finibus a
            aliquam est. Suspendisse accumsan commodo ullamcorper. Maecenas
            efficitur bibendum eros eu posuere. Praesent justo purus, maximus
            sed luctus et, vulputate ut est. Vivamus ut varius magna, id aliquam
            risus. Praesent semper sit amet massa vitae viverra. Nunc eget neque
            ac nulla luctus gravida a eget tortor. Sed eget lorem id tortor
            aliquam lobortis a vel mauris. Donec tempor ex varius malesuada
            porttitor. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Praesent a tortor ut urna
            sollicitudin commodo. In nec enim feugiat lorem elementum feugiat ac
            ac libero. Mauris ut tortor in eros sollicitudin cursus. Cras ut
            sapien eros. Nunc viverra ac ante quis fermentum. Integer non risus
            metus. Nam vitae odio ornare, tempor erat vel, scelerisque erat.
            Morbi aliquam neque vel justo cursus convallis. Quisque maximus urna
            et dolor consequat suscipit. Phasellus eu fermentum metus, sed
            viverra elit. Praesent quis pretium justo. Cras vehicula nunc at
            consectetur accumsan. Proin varius posuere metus ut faucibus.
            Pellentesque rutrum, sapien pretium tincidunt venenatis, dui leo
            ultrices arcu, nec luctus sapien justo sed enim. Ut tincidunt
            gravida felis sit amet fermentum. Integer ut vestibulum ligula, nec
            ultricies tellus. Donec pulvinar nibh viverra magna facilisis
            rhoncus. Phasellus ultrices convallis ligula sed scelerisque. Nullam
            consequat tortor in quam lobortis, et eleifend erat vehicula.
            Maecenas elementum ipsum eu augue condimentum dictum. Curabitur vel
            massa a orci pellentesque luctus. Praesent eu commodo libero. Sed
            urna nibh, fringilla eget leo sit amet, fermentum pharetra ipsum.
            Nam posuere mattis orci, vitae euismod erat posuere non. Phasellus
            at erat accumsan, congue erat a, pellentesque leo. Nam aliquam non
            est non malesuada. Aenean eleifend est sit amet nisi dictum, eget
            aliquam metus suscipit. Maecenas in velit sed nunc accumsan posuere.
            Duis sed elit convallis, hendrerit lacus tempor, molestie tellus.
            Morbi pellentesque enim id auctor facilisis. Proin hendrerit egestas
            ante at consequat. Quisque pellentesque sit amet augue in bibendum.
            In eget nisl commodo nisi euismod fringilla ut eget dolor.
          </p>
        </Layout.Content>
        <Layout.BottomNav />
      </Layout>
    );
  },
};
